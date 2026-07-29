# Google Docs Font Changer

A simple Google Apps Script project that adds a font changer sidebar to Google Docs.

Users can:

- Change the font of selected text
- Change the font of the entire document
- Choose from several common fonts
- Open the tool from a custom Google Docs menu

## Setup

1. Open a Google Doc.
2. Click **Extensions > Apps Script**.
3. Replace the default code with the contents of `Code.gs`.
4. Create a new HTML file named `Sidebar`.
5. Paste the contents of `Sidebar.html` into that file.
6. Save the project.
7. Refresh the Google Doc.
8. Open **Font Changer > Open Font Changer**.

Google may ask for permission the first time the script runs.

## Files

- `Code.gs`: Adds the menu and changes document fonts.
- `Sidebar.html`: Creates the font selection sidebar.
- `appsscript.json`: Basic Apps Script project settings.

## Possible Improvements

- Add more Google Fonts
- Add font-size controls
- Add text color controls
- Save favorite fonts
- Add preset document themes
