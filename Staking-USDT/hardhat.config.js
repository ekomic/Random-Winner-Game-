require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const BSC_RPC = process.env.BSC_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    bsctestnet: {
      url: BSC_RPC,
      ChainId: 97,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: BSCSCAN_KEY,
    },
  },
};