// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.8.10 ;

contract Variables{
    string public text = "hello";
    uint public num = 123;
    function doSomething() public view{
        uint i = 456;
        uint timestamp = block.timestamp;
        address sender = msg.sender;
    }
}
