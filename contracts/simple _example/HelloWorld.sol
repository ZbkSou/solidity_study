// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.8.10 ;

contract HelloWorld {
    string public greet = "Hello World";
    // string  greet = "Hello World";
    constructor(string memory str){
        greet = str;
    } 

    function setGreet(string memory str) public{
        greet = str;
    }

}