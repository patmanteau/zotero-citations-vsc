'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

//import * as axios from 'axios';
const axios = require('axios');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    
    // console.log('Congratulations, your extension "zotero-citations-vsc" is now active!');

    let pickCitation = async () => {
        const configuration = vscode.workspace.getConfiguration('zotero-citations-vsc');
        const format = configuration.get("format", "pandoc");
        const url = `http://localhost:23119/better-bibtex/cayw?format=${format}`;
        const response = await axios.get(url);
        
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let selection = editor.selection;
            editor.edit( (editBuilder) => {
                editBuilder.insert(selection.active, response.data);
            });
        }
    };

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('zotero-citations-vsc.pickCitation', pickCitation);

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}