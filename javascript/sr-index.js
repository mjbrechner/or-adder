'use strict';

let textToCopy;
let lineCount = 0;
let timeouter;

// Setting up the textarea for inputting the key string
const stringTextArea = document.getElementById("string-input");
stringTextArea.value = '';
let inputtedString = stringTextArea.value;

stringTextArea.addEventListener('input', function(stringTextAreaColor) {
    console.log("YES");
    inputtedString = stringTextArea.value;
    if (inputtedString.includes("xxxxx")) {
        stringTextArea.style.color = "#06c044";
    } else {
        stringTextArea.style.color = "#e70463";
    }
});

// Return display to normal after text copied message pops up
function copiedReturnToNormal() {
    document.getElementById("copied-notice").style.visibility = "hidden";
    document.getElementById("text-output").style.backgroundColor = "#F7ECDE";
}

// Function to reform and copy text
function orAdding() {

    inputtedString = stringTextArea.value;

    // Exit function if missing string with xxxxx
    if (!inputtedString.includes("xxxxx")) {
        document.getElementById("copied-notice").innerText = "missing string with xxxxx";
        document.getElementById("copied-notice").style.visibility = "visible";
        clearTimeout(timeouter);
        timeouter = setTimeout(copiedReturnToNormal, 5000);
        return
    }

    // let inputtedStringSplit = inputtedString.split('xxxxx');
    // console.log(inputtedStringSplit);
    // console.log(inputtedStringSplit[0]);



    let originalText = document.getElementById("text-input").value;

    // Obtain that original string while preserving line breaks without leading/trailing quotation marks
    let originalTextPreserved = JSON.stringify(originalText);
    originalTextPreserved = originalTextPreserved.replace(/^"|"$/g, '');

    // Clear any existing contet out of the text-output box
    document.getElementById("text-output").innerText = "";

    // Only continue if there is actually something in the textbox
    if (originalText !== "") {

        // Delete ending spaces
        let editedText = originalTextPreserved

        // Count lines (which now will not include lines that had been blank).
        lineCount = editedText.split('\n').length;
        console.log(`3rd: ` + editedText);

        //Turn the instances of /n back into line breaks
        editedText = editedText.replace(/\\n/g, "\n");

        let replacedText = '';
        let editedTextLines = editedText.split('\n');
        for (let i = 0; i < editedTextLines.length; i++) {
            if (editedTextLines[i].trim().length > 0) {
                // replacedText = replacedText + `123-` + editedTextLines[i] + `-456\n`;
                replacedText = replacedText + inputtedString.replace(/xxxxx/g, editedTextLines[i]) + `\n`;
            }
            console.log(replacedText);
        }

        // Display results
        document.getElementById("text-output").innerHTML = replacedText;

        // Copy output to clipboard and display message


        navigator.clipboard.writeText(replacedText);

        if (lineCount) {
            document.getElementById("copied-notice").innerText = `text processed and copied`;
        }
    } else {
        // No text to process
        document.getElementById("copied-notice").innerText = "no text to be processed";
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