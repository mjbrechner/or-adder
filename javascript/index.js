'use strict';

let textToCopy;

// Return display to normal after text copied message pops up
function copiedReturnToNormal() {
    document.getElementById("copied-notice").style.visibility = "hidden";
    document.getElementById("text-output").style.backgroundColor = "#F7ECDE";
}

// Function to reform and copy text
function orAdding() {
    let originalText = document.getElementById("text-input").value;

    // Only continue if there is actually something in the textbox
    if (originalText !== "") {

        // Delete ending spaces
        let editedText = originalText.replace(/\s*$/, '');

        // Delete lines that are completely blank
        editedText = editedText.replace(/\n\s*\n/g, '\n');

        // Replace line breaks with " or "
        editedText = editedText.replace(/[\r\n]/g, " or ");

        // Enclose everything in parentheses
        editedText = editedText.replace(/^/, "(");
        editedText = editedText.replace(/$/, ")");

        // Display results
        document.getElementById("text-output").innerText = editedText;

        // Copy output to clipboard and display message
        textToCopy = document.getElementById("text-output").value;
        navigator.clipboard.writeText(textToCopy);
        document.getElementById("copied-notice").innerText = "Text reformatted and copied to clipboard.";
    } else {
        // No text to process
        document.getElementById("copied-notice").innerText = "Please add the text to be processed in the box to the left.";
    }

    document.getElementById("copied-notice").style.visibility = "visible";
    document.getElementById("text-output").style.backgroundColor = "#a8717f";
    setTimeout(copiedReturnToNormal, 5000);