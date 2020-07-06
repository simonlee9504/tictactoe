let table_width = 3;
let table_height = 3;
var player = 1;
var played_spaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var x_spaces = document.getElementsByClassName("x");
var o_spaces = document.getElementsByClassName("o");

function swap() {
    var element_x = document.getElementsByClassName("x")[0];
    var element_x_style = getComputedStyle(element_x);
    var element_o = document.getElementsByClassName("o")[0];
    var element_o_style = getComputedStyle(element_o);
    if(element_o_style.display == "none") {
        element_o.style.display = "block";
        element_x.style.display = "none";
    }
    else if(element_x.style.display == "none") {
        element_x.style.display = "block";
        element_o.style.display = "none";
    }
    console.log("hi");
}

function off() {
    var element_x = document.getElementsByClassName("x")[0];
    var element_o = document.getElementsByClassName("o")[0];
    element_x.style.display = "none";
    element_o.style.display = "none";
}

function reset() {
    for(var r = 0; r < table_width; r++) { // check column
        for(var c = 0; c < table_width; c++) {
            played_spaces[table_width * r + c] = 0;
            x_spaces[table_width * r + c].style.visibility = "hidden";
            o_spaces[table_width * r + c].style.visibility = "hidden";
            x_spaces[table_width * r + c].style.cursor = "default";
            o_spaces[table_width * r + c].style.cursor = "default";
        }
    }
    player = 1
}

function checkWin(row, col) {
    var checkBool = true;
    for(var r = 0; r < table_width; r++) { // check column
        if(played_spaces[table_width * r + col] != player) {
            checkBool = false;
            break;
        }
    }
    if(checkBool) {
        return checkBool;
    }

    checkBool = true;
    for(var c = 0; c < table_width; c++) { // check row
        if(played_spaces[table_width * row + c] != player) {
            checkBool = false;
            break;
        }
    }
    if(checkBool) {
        return checkBool;
    }

    checkBool = true;
    for(var i = 0; i < table_width; i++) { // check diagonal
        if(played_spaces[table_width * i + i] != player) {
            checkBool = false;
            break;
        }
    }
    if(checkBool) {
        return checkBool;
    }

    checkBool = true;
    for(var i = 0; i < table_width; i++) { // check diagonal
        if(played_spaces[table_width * (table_width - i - 1) + i] != player) {
            checkBool = false;
            break;
        }
    }
    if(checkBool) {
        return checkBool;
    }

    return false;
}

function checkDone() {
    for(var r = 0; r < table_width; r++) { // check column
        for(var c = 0; c < table_width; c++) {
            if(played_spaces[table_width * r + c] == 0) {
                return false;
            }
        }
    }
    return true;
}

function move(row, col) {
    if(!(played_spaces[table_width * row + col])) {
        if(player == 1) {
            x_spaces[table_width * row + col].style.visibility = "visible";
            x_spaces[table_width * row + col].style.cursor = "default";
            played_spaces[table_width * row + col] = 1;
            if(checkWin(row, col)) {
                alert("Player " + player + " wins!");
                reset();
            }
            else if(checkDone()) {
                alert("Neither player wins :(");
                reset();
            }
            else {
                player = 2;
            }
        }
        else if(player == 2) {
            o_spaces[table_width * row + col].style.visibility = "visible";
            o_spaces[table_width * row + col].style.cursor = "default";
            played_spaces[table_width * row + col] = 2;
            if(checkWin(row, col)) {
                alert("Player " + player + " wins!");
                reset();
            }
            else if(checkDone()) {
                alert("Neither player wins :(");
                reset();
            }
            else {
                player = 1;
            }
        }
    }
    else {
        alert("Invalid move! Try again please.");
    }
}

function show(row, col) {
    if(!played_spaces[table_width * row + col]) {
        if(player == 1) {
            x_spaces[table_width * row + col].style.visibility = "visible";
            x_spaces[table_width * row + col].style.cursor = "pointer";
        }
        else if(player == 2) {
            o_spaces[table_width * row + col].style.visibility = "visible";
            o_spaces[table_width * row + col].style.cursor = "pointer";
        }
    }
}

function noshow(row, col) {
    if(!played_spaces[table_width * row + col]) {
        if(player == 1) {
            x_spaces[table_width * row + col].style.visibility = "hidden";
            x_spaces[table_width * row + col].style.cursor = "default";
        }
        else if(player == 2) {
            o_spaces[table_width * row + col].style.visibility = "hidden";
            o_spaces[table_width * row + col].style.cursor = "default";
        }
    }
}