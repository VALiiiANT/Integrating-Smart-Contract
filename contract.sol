// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract Donation {
    
    mapping(string => uint256) public donations; // holds the name of the donor and amount donated
    
    // to donate eth
    function donate(string memory donor, uint256 amount) public payable {
        require(amount > 0, "Donation amount should be greater than zero");
        donations[donor] += amount;
    }

    // to fetch details
    function detail(string memory donor) public view returns (uint) {
        return donations[donor];
    }
    
}
