//SPDX-License-Identifier: Unlicensed
pragma solidity >=0.6.0 <0.8.0;

interface ITC {
    function add(uint256, uint256) external view returns (uint256);
}

contract SecondContract {
    
    ITC first;

    constructor(address _first) {
        first = ITC(_first);
    }

    function test(uint256 a, uint256 b) public view returns (uint256) {
        uint256 z = a + b;
        return first.add(a, b) + z;
    }

    function test2(uint256 a, uint256 b) public view returns (uint256) {
        return first.add(a, b);
    }

}
