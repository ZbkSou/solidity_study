// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;
contract Gas {
    uint public i =0;
    function forever() public{
        while (true) {
            i +=1;
        }
    }
}