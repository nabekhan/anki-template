---
title: Packager
description: Anki deck packaging tool
---

# Packager

Packager is a command-line tool for packaging source code of Anki template into `.apkg` files.

## Installation and Usage

Run directly with npx (recommended):

```bash
npx @anki-eco/packager [options]
```

## Command Line Options

- `-i, --input <directory>`: Input directory containing build.json, front.html, back.html files (defaults to current directory)
- `-o, --output <directory>`: Output directory where .apkg files will be saved (defaults to current directory)
- `--multiple`: Process multiple subdirectories in the input directory, each containing a deck

## Directory Structure Requirements

### Single Deck

For a single deck, your directory structure should look like this:

```
your-deck/
├── build.json      # Deck configuration file
├── front.html      # Card front template
└── back.html       # Card back template
```

### Multiple Decks

When using the `--multiple` option, the directory structure should look like this:

```
dist/
├── deck1/
│   ├── build.json
│   ├── front.html
│   └── back.html
├── deck2/
│   ├── build.json
│   ├── front.html
│   └── back.html
└── ...
```

## build.json File Format

The `build.json` file is a required configuration file containing the following fields:

```json
{
  "note_type_name": "Note Type Name",
  "deck_name": "Deck Name",
  "note_type_id": 1234567890,
  "deck_id": 9876543210,
  "fields": ["field1", "field2"],
  "notes": [
    {
      "fields": {
        "field1": "content1",
        "field2": "content2"
      }
    }
  ]
}
```

### Field Descriptions

- `note_type_name`: Display name for the note type
- `deck_name`: Display name for the deck (also used as output filename)
- `note_type_id`: Unique identifier for the note type (number)
- `deck_id`: Unique identifier for the deck (number)
- `fields`: Array of field names defining the note structure
- `notes`: Array of notes, each containing content for the corresponding fields

## HTML Template Files

- `front.html`: HTML template for the front of the card
- `back.html`: HTML template for the back of the card

These templates can use Anki's field syntax (e.g., `{{fieldname}}`) to reference fields defined in build.json.

## Usage Examples

### Package a Single Deck

```bash
# Package from current directory, output to current directory
npx @anki-eco/packager

# Specify input and output directories
npx @anki-eco/packager -i ./my-deck -o ./output
```

### Package Multiple Decks

```bash
# Process all subdirectories in the dist directory
npx @anki-eco/packager -i ./dist -o ./release --multiple
```

Upon successful execution, the tool will generate corresponding `.apkg` files in the output directory, with filenames matching the deck names.
