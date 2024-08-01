// require('@nomiclabs/hardhat-waffle');
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
module.exports = {
  solidity: '0.8.23',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/t0cJd3kBlHftOLXjYIEjIWEfWLhtEeXe',
      accounts:['4723bb63482fdcc3d5d370f9dbb4335987bb1c49e6a3363df0d352d4995a92e0'],
    },
  },

};