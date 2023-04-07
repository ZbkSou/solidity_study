
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
describe("Constans", function () {
    async function deployFixture() {

        // Contracts are deployed using the first signer/account by default
        const [owner] = await ethers.getSigners();
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        const Constans = await ethers.getContractFactory("Constans");
        const constans = await Constans.deploy();
        console.info("合约地址："+constans.address);
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        return { constans,  owner };
      }
    describe("firstApp", function () {
        it("firstApp1", async function () {
            const {constans,  owner} = await loadFixture(
                deployFixture
              );
        });


    });
});
