function onOpen() {
  DocumentApp.getUi()
    .createMenu('Font Changer')
    .addItem('Open Font Changer', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Font Changer');

  DocumentApp.getUi().showSidebar(html);
}

function changeSelectedTextFont(fontName) {
  const document = DocumentApp.getActiveDocument();
  const selection = document.getSelection();

  if (!selection) {
    return {
      success: false,
      message: 'Select some text first.'
    };
  }

  const selectedElements = selection.getRangeElements();

  selectedElements.forEach(function(rangeElement) {
    const element = rangeElement.getElement();

    
    const text = element.editAsText();

    if (rangeElement.isPartial()) {
      text.setFontFamily(
        rangeElement.getStartOffset(),
        rangeElement.getEndOffsetInclusive(),
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
