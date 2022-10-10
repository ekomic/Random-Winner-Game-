const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  const usdtToken = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
  const _custodyAddress = "0x43c5f606B4FC6C7CEABb2f7Dc758Ce8cF792f5a1";
  const GameStarCustody = await ethers.getContractFactory("GameStarCustody");
  // deploy the contract
  const deployedGameStarCustodyContract = await GameStarCustody.deploy(
    usdtToken,
    _custodyAddress
  );
  

  await deployedGameStarCustodyContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedGameStarCustodyContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedGameStarCustodyContract.address,
    constructorArguments: [usdtToken, _custodyAddress],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });