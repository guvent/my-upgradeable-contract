require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

// require("@nomiclabs/hardhat-etherscan");
// Redefinition of task verify failed. Unsupported operation adding positional param definitions in an overridden task.

// require("@nomiclabs/hardhat-waffle");
// Error: You are using both @nomiclabs/hardhat-waffle and @nomicfoundation/hardhat-chai-matchers.
//        They don't work correctly together, so please make sure you only use one.
//        We recommend you migrate to @nomicfoundation/hardhat-chai-matchers.
//        Learn how to do it here: https://hardhat.org/migrate-from-waffle

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
