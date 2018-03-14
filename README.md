# Zotero Citations for Visual Studio Code

Search your Zotero library to pick one, two or even many items; then have their citekeys inserted into the current document. Citekey format is configurable; there's support for Pandoc, MultiMarkdown, LaTeX, Asciidoctor and plain text citation.

Based on [*Cite as you Write*](https://retorque.re/zotero-better-bibtex/cayw/) courtesy of [Better Bib(La)TeX](https://retorque.re/zotero-better-bibtex/).

## Features

Simple insertion of Zotero citekeys:

1. Hit `Ctrl+Alt+Z` (or run Zotero Citations: Pick citation from the Command Palette)
2. Search and pick items in Zotero's *Cite as you Write* popup. `Left-click` an item to add further details (page number, prefix, suffix)
3. Hit `Enter`

<!--
Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.
-->

## Requirements

- [Zotero](https://www.zotero.org/download/) (must be running)
- [Better Bib(La)TeX](http://retorque.re/zotero-better-bibtex/installation/)

## Extension Settings

This extension contributes the following setting:

* `zotero-citations-vsc.format`: Sets the format of citekeys inserted by Zotero Citations. Valid options: \"latex\", \"cite\" (an alias for latex with the assumption you want the cite command to be cite), \"mmd\", \"pandoc\", \"asciidoctor-bibtex\" and \"formatted-citation\". See [Better Bib(La)TeX's documentation](https://retorque.re/zotero-better-bibtex/cayw/) for details.

## Known Issues

On my system, Zotero's picker dialog occasionally opens in the background. If the picker doesn't show up right away, alt-tabbing or selecting it via the taskbar usually does the trick.

## Release Notes

### 0.1.0

Initial release of Zotero Citations
