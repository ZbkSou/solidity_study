
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
describe("FirstAppliction", function () {
    async function deployFixture() {
     
        // Contracts are deployed using the first signer/account by default
        const [owner] = await ethers.getSigners();
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        const FistApplication = await ethers.getContractFactory("FirstAppliction");
        const fistApplication = await FistApplication.deploy();
        console.info("合约地址："+fistApplication.address);
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        return { fistApplication,  owner };
      }
    describe("firstApp", function () {
        it("firstApp1", async function () {
            const {fistApplication,  owner} = await loadFixture(
                deployFixture
              );
            console.info(await fistApplication.count());
            console.info("主币："+await ethers.provider.getBalance(owner.address));
            console.info(await fistApplication.get());
            console.info("主币："+await ethers.provider.getBalance(owner.address));
            console.info(await fistApplication.inc());
            console.info("主币："+await ethers.provider.getBalance(owner.address));
            console.info(await fistApplication.count());
            console.info(await fistApplication.get());
            console.info(await fistApplication.dec());
            console.info("主币："+await ethers.provider.getBalance(owner.address));
            console.info(await fistApplication.count());
            console.info(await fistApplication.get());
            expect(await fistApplication.get()).to.equal(0);
        });


    });
});
