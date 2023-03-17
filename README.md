# Study Solidity Project

## 环境

在本地安装

`npm install --save-dev hardhat`

先创建项目文件夹 

`npx hardhat`

windows 需要安装 

`npm install --save-dev @nomicfoundation/hardhat-toolbox`

编译合约

`npx hardhat compile`

测试合约

_//todo: 并没有找到指定脚本运行指定网络的命令_
 
`npx hardhat test test/l1.js`

部署合约 
签名使用 `hardhat.cnfig`中网络的第一个账号

`npx hardhat run scripts/deploy.js --network xxx`

