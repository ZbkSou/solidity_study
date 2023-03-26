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


## hello world

构造方法

方法里当传入的值是 string 这种复杂类型的时候需要指定 memory 数据类型

`constructor(string memory str)`

`string public greet = "Hello World";`


## First Application

属性被 public 修饰编译是会生成属性名的 view 方法,可以不用写 get 方法

```
    {
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
```
 