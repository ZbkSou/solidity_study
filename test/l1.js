
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("l1", function () {

    describe("account", function () {
        it("account address ", async function () {
            signer = await ethers.provider.getSigner("0x79d65CE3662D67Fc41bF3C298C79D3B7f88F75A7");
            const accounts = await hre.ethers.getSigners();

            for (const account of accounts) {
                console.log(await account.address);
                console.info(await account.getBalance());
            }

            // expect(await owner.getAddress()).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        });


    });
});
