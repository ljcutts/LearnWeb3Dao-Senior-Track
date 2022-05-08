// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Test {

    // Private variables
    // Each bytes32 variable would occupy one slot
    // because bytes32 variable has 256 bits(32*8)
    // which is the size of one slot

    // Slot 0
    uint private number2 = 2;
    // Slot 1
    bytes32 private password;

    constructor(uint _number2, bytes32  _password) {
        number2 = _number2;
        password = _password;
    }
}