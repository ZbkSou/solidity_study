
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
describe("l1", function () {
    async function deployFixture() {
        const greet = "hello";
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy(greet);
        console.info("合约地址："+helloWorld.address);
        console.info("主币："+await ethers.provider.getBalance(owner.address));
        return { helloWorld,  owner, otherAccount };
      }
    describe("account", function () {
        it("account address ", async function () {
            const {helloWorld,  owner,otherAccount } = await loadFixture(
                deployFixture
              );
            console.info(await helloWorld.greet());
            console.info(await helloWorld.setGreet("hello wo"));
            console.info(await helloWorld.greet());
            console.info("主币："+await ethers.provider.getBalance(owner.address));
  
            console.info(await helloWorld.greet());
            // expect(await owner.getAddress()).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        });


    });
});
