//SPDX-License-Identifier: Unlicensed
pragma solidity >=0.6.0 <0.8.0;

contract TC {
    
    constructor() {

    }

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function sub(uint256 a, uint256 b) public pure returns (uint256) {
        return a - b;
    }

}
