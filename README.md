# Google Docs Font Changer

A simple Google Apps Script tool that lets users quickly change fonts inside Google Docs.

## Features

* Change the font of selected text
* Change the font of the entire document
* Choose from several common fonts
* Access the tool through a custom Google Docs menu
* Simple sidebar interface

## How It Works

The project uses Google Apps Script to add a custom **Font Changer** menu to Google Docs.

When the user opens the sidebar, they can select a font and apply it to either:

1. The currently selected text
2. The entire Google Doc

## Installation

1. Open a Google Doc.
2. Click **Extensions**.
3. Click **Apps Script**.
4. Delete the default code.
5. Copy the contents of `Code.gs` into the script editor.
6. Create a new HTML file called `Sidebar`.
7. Copy the contents of `Sidebar.html` into the file.
8. Save the project.
9. Refresh the Google Doc.
10. Click **Font Changer > Open Font Changer**.

Google may request permission when the script is used for the first time.

## Project Files

```text
google-docs-font-changer/
├── Code.gs
├── Sidebar.html
├── appsscript.json
└── README.md
```

### Code.gs

Creates the custom Google Docs menu and contains the functions that change the fonts.

### Sidebar.html

Creates the sidebar interface where users can select and apply a font.

### appsscript.json

Contains the Google Apps Script project configuration.

## Available Fonts

* Arial
* Georgia
* Verdana
* Times New Roman
* Courier New
* Trebuchet MS

## Technologies Used

* Google Apps Script
* JavaScript
* HTML
* CSS
* Google Docs API

## Future Improvements

* Add more fonts
* Add font-size controls
* Add text-color controls
* Allow users to save favorite fonts
* Add document style presets

## Author

Created as a beginner project for learning Google Apps Script and working with Google Docs.
