function onOpen() {
  DocumentApp.getUi()
    .createMenu("Font Changer")
    .addItem("Open Font Changer", "showSidebar")
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("Font Changer");

  DocumentApp.getUi().showSidebar(html);
}

function changeSelectedTextFont(fontName) {
  const document = DocumentApp.getActiveDocument();
  const selection = document.getSelection();

  if (!selection) {
    return {
      success: false,
      message: "Select some text first."
    };
  }

  const selectedElements = selection.getRangeElements();
  let changedText = false;

  selectedElements.forEach(function (rangeElement) {
    const element = rangeElement.getElement();

    if (element.getType() !== DocumentApp.ElementType.TEXT) {
      return;
    }

    const text = element.asText();

    if (rangeElement.isPartial()) {
      const startOffset = rangeElement.getStartOffset();
      const endOffset = rangeElement.getEndOffsetInclusive();

      text.setFontFamily(startOffset, endOffset, fontName);
    } else {
      text.setFontFamily(fontName);
    }

    changedText = true;
  });

  if (!changedText) {
    return {
      success: false,
      message: "The selected content does not contain editable text."
    };
  }

  return {
    success: true,
    message: "Selected text changed to " + fontName + "."
  };
}

function changeWholeDocumentFont(fontName) {
  const document = DocumentApp.getActiveDocument();
  const body = document.getBody();

  body.setFontFamily(fontName);

  return {
    success: true,
    message: "The whole document now uses " + fontName + "."
  };
}        rangeElement.getEndOffsetInclusive(),
        fontName
      );
    } else {
      text.setFontFamily(fontName);
    }
  });

  return {
    success: true,
    message: 'Selected text changed to ' + fontName + '.'
  };
}

function changeWholeDocumentFont(fontName) {
  const document = DocumentApp.getActiveDocument();
  const body = document.getBody();

  body.setFontFamily(fontName);

  return {
    success: true,
    message: 'The whole document now uses ' + fontName + '.'
  };
}
