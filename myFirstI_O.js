var fs = require('fs');

var path = process.argv[2];
//read path of file from input

var buffer = fs.readFileSync(path);
//read file, return a Buffer with contents

var str = buffer.toString();
//convert Buffer into a string

var arr = str.split("\n");
//string.Split() returns an array of substrings 
//using \n as a delimiter

var numNewlines = arr.length-1;
//the last line does not have a newline at the end

console.log(numNewlines);
//print number of newlines the file contains