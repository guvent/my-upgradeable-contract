// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const { ethers, upgrades } = require('hardhat');

async function main() {
    const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
    const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
    await proxy.waitForDeployment();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.target
    );

    console.log('Proxy contract address: ' + proxy.target);

    console.log('Implementation contract address: ' + implementationAddress);
}

main();

// npx hardhat run scripts/deployProxy.js --network goerli
// npx hardhat run scripts/deployProxy.js --network goerli --show-stack-traces

/*

Proxy contract address: 0x7b59A19c28b75482B44E03474C64A374321bCCa1
Implementation contract address: 0xb23D27aCe17DA0035236E10d8458034febaf5b66

*/

// ------------------------------------------------------------------------------------------

// npx hardhat verify --network goerli 0xb23D27aCe17DA0035236E10d8458034febaf5b66

/*

Successfully submitted source code for contract
contracts/VendingMachineV1.sol:VendingMachineV1 at 0xb23D27aCe17DA0035236E10d8458034febaf5b66
for verification on the block explorer. Waiting for verification result...

Successfully verified contract VendingMachineV1 on the block explorer.
https://goerli.etherscan.io/address/0xb23D27aCe17DA0035236E10d8458034febaf5b66#code

*/

