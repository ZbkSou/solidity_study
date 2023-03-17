require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    local: {
      url: "http://127.0.0.1:8545/",
      accounts: ["0x23f5abcbaf0270ffe0e89c8577957e5202873460e853962da3ee5e87d9c56eb2"]
    }
  },
};
