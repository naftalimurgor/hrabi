# hrabi

<p align="center">
  <img width="300" height="300" src="https://github.com/naftalimurgor/hrabi/blob/parse-abi-with-metadata/assets/logo.png">
</p>

`JSON` to Human Readable `ABI` converter for Solidity JSON `ABIs`. A command-line tool that enables parsing `JSON` `ABIs` emitted during Smart Contract compilation to a Human Readable format, which is an `Array` with entries of the contract signatures.

## Usage

### Installation
Install as a global dependency which will later be usable as a commandline application.
```sh
npm i -g hrabi
```

Usage signature:

```sh
hrabi parse <path to json abi file> <output path>
```

To parse a `JSON ABI` to a Human Readable `ABI` format:
<p align="center">
  <img src="https://github.com/naftalimurgor/hrabi/blob/parse-abi-with-metadata/assets/hrabiUse.gif">
</p>

```sh
hrabi parse GameItem.json GameItem.js
```
Where:
1. `GameItem.json` is the `JSON ABI` file path
2. `GameItem.js` is the output path pointing to a file to store the Human Readable formatted  `ABI`.

Currently supports parsing to fully `Human Readable ABIs`. The biggest advantage with `Human Readable ABIs` is:
- Provides an `array` of `strings` of a contract's signature. Quite handy to use as `ABI` becomes a regular `array` that's compact and integrates well with JavaScript code or any other ideal codebase.


### Example
A sample `ERC1155` `ABI` in `JSON` format looks like this:
```javascript
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  }
  // ...
  // other elements omitted for brevity
  
]
```
In Human Readable Format, the above `ABI` becomes:

```javascript
const ERC1155 = [
  "constructor()",
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "function approve(address to, uint256 tokenId)",
  "function balanceOf(address owner) view returns (uint256)",
  "function create(address emotion, string mytokenURI) returns (uint256)",
  "function getApproved(uint256 tokenId) view returns (address)",
  "function isApprovedForAll(address owner, address operator) view returns (bool)",
  "function name() view returns (string)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  "function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)",
  "function setApprovalForAll(address operator, bool approved)",
  "function supportsInterface(bytes4 interfaceId) view returns (bool)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function transferFrom(address from, address to, uint256 tokenId)"
]
```
## Example in use

```typescript
  <script>
    // possible lines of code omitted
    const GreeterAddress = '0x34eB49779a4475b0Cead7DBBB5A5807e89FaB569'
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    document.getElementById('connectBtn').addEventListener('click', connect)
    async function connect() {
      await provider.send('eth_requestAccounts', [])
    }

    const signer = provider.getSigner()

    const GreeterAbi = [
      "function greet() public view returns (string memory)",
      "function setGreeting(string memory _greeting) public"
    ]
    
    const greeterContractInstance = new ethers.Contract(GreeterAddress, GreeterAbi, signer)

</script>
```
[Or view the example](https://github.com/naftalimurgor/Hello-hardhat/blob/main/client/index.html)

## Contributing

All contributions are highly welcome, be sure to check out the [contributing guidlines](https://github.com/naftalimurgor/hrabi/blob/main/CONTRIBUTING.md). Check out issues under the issues tab. Or open a new issue to help improve this  library.

## Development

### Setting Up
To set up project locally for development:
```sh
git clone <your fork url>
cd <your fork path>
yarn install
```
To build the project:
```sh
yarn compile
```
Testing changes can take the the classic `node <script.js>` approach. To test changes, the following works fine:
```sh
node lib/index.js parse GameItem.json GameItem.js
```

To test installation locally:
```sh
yarn test-install
hrabi --version # check version info
```
## Tests
To run unit tests:
```sh
yarn test
```
## Support
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P0HEF2O)

## LICENSE
`MIT`