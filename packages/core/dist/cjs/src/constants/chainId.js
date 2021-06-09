"use strict";
var _a, _b;
exports.__esModule = true;
exports.TEST_CHAINS = exports.MULTICALL_ADDRESSES = exports.CHAIN_NAMES = exports.ChainId = void 0;
var ChainId;
(function (ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCTestnet"] = 97] = "BSCTestnet";
    ChainId[ChainId["xDai"] = 100] = "xDai";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["Localhost"] = 1337] = "Localhost";
    ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
exports.CHAIN_NAMES = (_a = {},
    _a[ChainId.Mainnet] = 'Mainnet',
    _a[ChainId.Ropsten] = 'Ropsten',
    _a[ChainId.Kovan] = 'Kovan',
    _a[ChainId.Rinkeby] = 'Rinkeby',
    _a[ChainId.Goerli] = 'Goerli',
    _a[ChainId.BSC] = 'BSC',
    _a[ChainId.BSCTestnet] = 'BSC testnet',
    _a[ChainId.xDai] = 'xDai',
    _a[ChainId.Polygon] = 'Polygon',
    _a[ChainId.Mumbai] = 'Mumbai',
    _a[ChainId.Localhost] = 'Localhost',
    _a[ChainId.Hardhat] = 'Hardhat',
    _a);
exports.MULTICALL_ADDRESSES = (_b = {},
    _b[ChainId.Mainnet] = '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    _b[ChainId.Ropsten] = '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    _b[ChainId.Rinkeby] = '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    _b[ChainId.Goerli] = '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    _b[ChainId.Kovan] = '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    _b[ChainId.BSC] = '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    _b[ChainId.BSCTestnet] = '0x0fF0A7fcb782310cd1267fE72A677d96bbAcCA61',
    _b[ChainId.xDai] = '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
    _b[ChainId.Polygon] = '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    _b[ChainId.Mumbai] = '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
    _b);
exports.TEST_CHAINS = [
    ChainId.Ropsten,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Goerli,
    ChainId.BSCTestnet,
    ChainId.Mumbai,
    ChainId.Localhost,
    ChainId.Hardhat,
];
//# sourceMappingURL=chainId.js.map