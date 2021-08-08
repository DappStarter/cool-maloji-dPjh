require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food stock renew sad essay coral light army gate'; 
let testAccounts = [
"0x7760d196112f6634c046e1427c2a6197dce51be1563db05f48fd95070da25b5a",
"0xeae34f77b7a7c46f5d34f1787e5796a0e4eacde32adbe631124450d7f2b0f064",
"0xbab83575648469284096d4df60ee838aaf2ba1f82015345327af3ee982409982",
"0xe1ec08cc0fcb648a0a79bc69b743fa12fbdbf5119b593e7d3100cadfaebead77",
"0x6d2f166cc0a404050131c02c4922fb51827bfce699fa5efdb7186856e46c074c",
"0x0a9bbdaadedc28fa2f3025b743235935c70c9c24b784389b8e7a819b3aacec52",
"0x3c4d3d10ea287e13bd7b3e1b52abbbd60c31cc97758016ac540b4acc6b88d363",
"0x4cfed8308c2325f349133cbd4b2d50431bb6165d92a86c087e33de5417b06fb0",
"0x3506c2a6daae01a89e852c679a400fc0907a457d3795ce028d5869670fc0dc2c",
"0x98d688f01b1c644af73a2ab5d19ae81cd0454def8283a5ee4efe078810bb089c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

