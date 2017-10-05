// JavaScript Document
/*  jslint browser:true */
"use strict";

// Create an array with 3 trees listed
var treesArray = ["Oak", "Pine", "Aspen", "Bald Cypress"];

// Display the list of trees in a page div
var displayArrayItems = function() {
    var myString = "";
    var i;
    for (i = 0; i < treesArray.length; i++){
        myString += treesArray[i] + "<br>";
    }
    document.getElementById("displayTrees").innerHTML = myString;

}; // End of display Array


// This displays the current array which displays the four trees to begin with
var x = document.getElementById('displayTrees').innerHTML = treesArray.join(" <br> ");


// Add a redwood tree to the end of the array  - push()
    var addRedwoodTree = function() {
        treesArray.push("Redwood");
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var addRedTree = document.getElementById('add_redwood');
    addRedTree.onclick = addRedwoodTree;


// Add a pear to the start of the array - unshift()
    var addPearTree = function() {
        treesArray.unshift("Pear");
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var addPear = document.getElementById('add_pear');
    addPear.onclick = addPearTree;


// Remove the first tree in the array - shift()
    var removeFirstTree = function() {
        treesArray.shift();
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var remove1 = document.getElementById('remove_tree1');
    remove1.onclick = removeFirstTree;


// Remove the second tree down in the array - splice() 
    var removeSecondTree = function() {
        treesArray.splice(1, 1);
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var remove2 = document.getElementById('remove_tree2');
    remove2.onclick = removeSecondTree;

// Remove the last tree in the array - pop()
    var removeLastTree = function() {
        treesArray.pop();
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var removeLast = document.getElementById('remove_treeLast');
    removeLast.onclick = removeLastTree;

// Sort the trees A - Z in the array - sort()
    var sortTrees = function() {
        treesArray.sort();
        document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
};

    var sortArray = document.getElementById('sortTrees');
    sortArray.onclick = sortTrees;



// Make all trees lower case in the array - toLowerCase()
var lowerCase = function() {

    for ( var i = 0; i < treesArray.length; i++) {
        treesArray[i] = treesArray[i].toLowerCase();
    }
   // treesArray.toLowerCase();
     document.getElementById('displayTrees').innerHTML = treesArray.join("<br>");
}

    var createLowerCase = document.getElementById('lowerTrees');
    createLowerCase.onclick = lowerCase;  



// Get the answer - What is the name of tree number three? - 
    var display3 = function() {
        if (treesArray.length<3) {
            document.getElementById('message').innerHTML = "There is not a third item in the tree array list.";
        } else {
            document.getElementById('message').innerHTML = treesArray[2];
            displayArrayItems();
        }

    }; // End of function

    var thirdNameInList = document.getElementById('showName3');
    thirdNameInList.onclick = display3;

// Get the answer - What is the name of tree number four?
    var display4 = function() {
        if (treesArray.length<4) {
            document.getElementById('message').innerHTML = "There is not a fourth item in the tree array list.";
        } else {
            document.getElementById('message').innerHTML = treesArray[3];
            displayArrayItems();
        }

    }; // End of function

    var fourthNameInList  = document.getElementById('showName4');
    fourthNameInList.onclick = display4;

// Adds how many trees currently exist in the array
document.getElementById('amountOfTrees').innerHTML = treesArray.length + " elements long";