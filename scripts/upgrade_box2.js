// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0xF97bEE5aD6FD75Ec59228e8688b99e1f7e8A835c";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy(PROXY, BoxV2);
  console.log("Box upgraded");
}

main();