const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x7b59A19c28b75482B44E03474C64A374321bCCa1';

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + await upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

main();

// npx hardhat run scripts/upgradeProxy.js --network goerli

/*

Compiled 1 Solidity file successfully (evm target: paris).
The current contract owner is: 0x5497bc097aa03Cd1Ef8aeCAE12E2B3adc161FDbD
Implementation contract address: 0xee19d6bB2d3967BE0f05e7E4A2e2B885D8B60Dfd

*/

// ------------------------------------------------------------------------------------------

// npx hardhat verify --network goerli 0xee19d6bB2d3967BE0f05e7E4A2e2B885D8B60Dfd

/*

Successfully submitted source code for contract
contracts/VendingMachineV2.sol:VendingMachineV2 at 0xee19d6bB2d3967BE0f05e7E4A2e2B885D8B60Dfd
for verification on the block explorer. Waiting for verification result...

Successfully verified contract VendingMachineV2 on the block explorer.
https://goerli.etherscan.io/address/0xee19d6bB2d3967BE0f05e7E4A2e2B885D8B60Dfd#code

*/