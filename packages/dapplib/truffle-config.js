require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rescue noise hub include kiwi surround two'; 
let testAccounts = [
"0x6f85c923c7df8d57a2f3b0fd3852184b09ed5ce66defc846fe3dfd533af89a46",
"0x1b18be044b44ad6bfcdc9a4dcc945cd159ed1edef4f1d3bb83a03bf242cb65b9",
"0xb11f6cd9d3ce00ea11c555ddab4c08334564cf8485b0b77d7b75fa6e344b27fc",
"0x878d17c9eb977cbd661985fa9a3fec2b5dc7405dbb9f12831089bfdb5d7e7596",
"0x8b8fd2a1c06656ed71a79c3c3a1891e4bea90740d17d7162cb37bf1562b33b77",
"0xf9aa45799bff6fff1e39f23a02dcaa01cd1e3f2c23c9980d94d306b65deb6eae",
"0x744451a569cbdbd4c9cc3d0b855f92e22e104235a5f418a8df6f55825ffb2456",
"0xe68ccc8028fd3a768459d5e5f3db355926eb374914aa7bea36e2df19311c7bd1",
"0x6a7f8a2fc7a823c515c2c05457f0065e6259dd96e7022f1306b6e708d2cab764",
"0xfc524de612e4b056253da0df81d28e662719c14d350bd287c47fad4a0a209242"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


