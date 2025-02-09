'use strict';

let textToCopy;
let lineCount = 0;
let timeouter;


// Return display to normal after text copied message pops up
function copiedReturnToNormal() {
    document.getElementById("copied-notice").style.visibility = "hidden";
    document.getElementById("text-output").style.backgroundColor = "#F7ECDE";
}

// Function to reform and copy text
function orAdding() {
    let originalText = document.getElementById("text-input").value;

    // Clear any existing contet out of the text-output box
    document.getElementById("text-output").innerText = "";

    // Only continue if there is actually something in the textbox
    if (originalText !== "") {

        // Delete ending spaces
        let editedText = originalText.replace(/\s*$/, '');

        // Delete lines that are completely blank
        editedText = editedText.replace(/\n\s*\n/g, '\n');

        // Count lines (which now will not include lines that had been blank).
        lineCount = editedText.split('\n').length;

        // Replace line breaks with " or "
        editedText = editedText.replace(/[\r\n]/g, " or ");

        // Enclose everything in parenthesis
        editedText = editedText.replace(/^/, "(");
        editedText = editedText.replace(/$/, ")");

        // Display results
        document.getElementById("text-output").innerText = editedText;

        // Copy output to clipboard and display message
        textToCopy = document.getElementById("text-output").value;
        navigator.clipboard.writeText(textToCopy);
        if (lineCount === 1) {
            document.getElementById("copied-notice").innerText = `${lineCount} line reformatted and copied to clipboard.`;
        } else {
            document.getElementById("copied-notice").innerText = `${lineCount} lines reformatted and copied to clipboard.`;
        }
    } else {
        // No text to process
        document.getElementById("copied-notice").innerText = "Please add the text to be processed in the box to the left.";
    }

    document.getElementById("copied-notice").style.visibility = "visible";
    
    clearTimeout(timeouter);
    timeouter = setTimeout(copiedReturnToNormal, 5000);
}

// Function to reform and copy text with quotes around each line
function orAddingWithQuotes() {
    let originalText = document.getElementById("text-input").value;

    // Clear any existing contet out of the text-output box
    document.getElementById("text-output").innerText = "";

    // Only continue if there is actually something in the textbox
    if (originalText !== "") {

        // Delete ending spaces
        let editedText = originalText.replace(/\s*$/, '');

        // Delete lines that are completely blank
        editedText = editedText.replace(/\n\s*\n/g, '\n');

        // Count lines (which now will not include lines that had been blank).
        lineCount = editedText.split('\n').length;

        // Replace line breaks with "or" in quotes
        editedText = editedText.replace(/[\r\n]/g, "\" or \"");

        // Make sure to add quotes to the beginning of the first item and the end of the last item
        editedText = editedText.replace(/^/, "\"");
        editedText = editedText.replace(/$/, "\"");

        // Enclose everything in parenthesis
        editedText = editedText.replace(/^/, "(");
        editedText = editedText.replace(/$/, ")");

        // Display results
        document.getElementById("text-output").innerText = editedText;

        // Copy output to clipboard and display message
        textToCopy = document.getElementById("text-output").value;
        navigator.clipboard.writeText(textToCopy);
        if (lineCount === 1) {
            document.getElementById("copied-notice").innerText = `${lineCount} line reformatted and copied to clipboard.`;
        } else {
            document.getElementById("copied-notice").innerText = `${lineCount} lines reformatted and copied to clipboard.`;
        }
    } else {
        // No text to process
        document.getElementById("copied-notice").innerText = "Please add the text to be processed in the box to the left.";
    }

    document.getElementById("copied-notice").style.visibility = "visible";
    clearTimeout(timeouter);
    timeouter = setTimeout(copiedReturnToNormal, 5000);
}

// Function to clear the input and output fields
function orClearing() {
    document.getElementById("text-input").value = "";
    document.getElementById("text-output").innerText = "";
}