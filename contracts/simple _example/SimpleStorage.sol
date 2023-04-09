// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;

contract SimpleStorage{
    uint public num;

    function set(uint _num) public{
        num = _num;
    }

    function get() public view returns (uint){
        return num;
    }
}