// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.8.10 ;

contract FirstAppliction{
    uint public count = 0;

    function get() public view returns(uint){
        return count;
    }

    function inc() public {
        count += 1;
    }
    
    function dec() public {
        count -= 1;
    }


}