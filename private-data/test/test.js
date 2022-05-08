const { ethers } = require("hardhat");
const { expect } = require("chai");
const {BigNumber} = require("ethers")

describe("Attack", function () {
  it("Should be able to read the private variables password and username", async function () {
    // Deploy the login contract
    const loginFactory = await ethers.getContractFactory("Test");

    // To save space, we would convert the string to bytes32 array
    const passwordBytes = ethers.utils.formatBytes32String("password");

    const loginContract = await loginFactory.deploy(
      2,
      passwordBytes
    );
    await loginContract.deployed();

    // Get the storage at storage slot 0,1
    const slot0Bytes = await ethers.provider.getStorageAt(
      loginContract.address,
      0
    );
    const Decode = await ethers.utils.defaultAbiCoder.decode(
      ["uint"],
      slot0Bytes
    );
    const slot1Bytes = await ethers.provider.getStorageAt(
      loginContract.address,
      1
    );

    // We are able to extract the values of the private variables
    console.log(Decode)
    // expect(ethers.utils.parseBytes32String(slot1Bytes)).to.equal("password");
  });
});
