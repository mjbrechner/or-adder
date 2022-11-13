'use strict';

function orAdding() {
    let e = document.getElementById("text-input").value;

    // Delete ending spaces
    e = e.replace(/\s*$/, '');

    // Delete lines that are completely blank
    e = e.replace(/\n\s*\n/g, '\n');

    // Replace line breaks with " or "
    e = e.replace(/[\r\n]/g, " or ");

// Enclose everything in parentheses
e = e.replace(/^/, "(");
e = e.replace(/$/, ")");

    document.getElementById("text-output").innerText = e;
}

// function buttonClick1() {
//     let e = document.getElementById("textbox").value;
//     console.log(e);
//     e = e.replace(/[\r\n]/g, " or ");
//  console.log(e);
//     if (e.match(/.*\sor\s$/m)) {
//         e = e.slice(0, -4);
//     }

//  console.log(e);
//  document.getElementById("textbox").value = e;
// }


//Copy text
let textToCopy;

function copiedReturnToNormal() {
    document.getElementById("copied-notice").style.visibility = "hidden";
    document.getElementById("text-output").style.backgroundColor = "#F7ECDE";
}

function textCopier() {
    textToCopy = document.getElementById("text-output").value;
    navigator.clipboard.writeText(textToCopy);
    document.getElementById("copied-notice").style.visibility = "visible";
    document.getElementById("text-output").style.backgroundColor = "#a8717f";
    setTimeout(copiedReturnToNormal, 2000);
}