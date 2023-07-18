let contract;

// Connect to MetaMask
const connectMetaMask = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        contract = createContractInstance();
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        document.getElementById('walletAddress').innerText = `Connected Wallet Address: ${address}`;
        console.log('Connected to MetaMask!');
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        contract = createContractInstance();
        console.log('Connected to MetaMask!');
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};

// Create an instance of the smart contract
const createContractInstance = () => {
    const contractAddress = '0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A';
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "donor",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "donate",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "donor",
                    "type": "string"
                }
            ],
            "name": "detail",
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
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "donations",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    return contract;
};

// Donate to the contract
const donate = async () => {
    try {
        const donor = document.getElementById('ownerInput').value;
        const amount = document.getElementById('nodeInput').value;
        const accounts = await web3.eth.getAccounts();
        await contract.methods.donate(donor, amount).send({ from: accounts[0], value: web3.utils.toWei(amount) });
        console.log('Donation successful!');
    } catch (error) {
        console.error(error);
    }
};

// Get the donation amount for a donor
const getDetails = async () => {
    try {
        const donor = document.getElementById('ownerInput').value;
        const amount = await contract.methods.detail(donor).call();
        document.getElementById('amt').innerText = ` ${amount}`;
        console.log(`Amount Donated: ${amount}`);
    } catch (error) {
        console.error(error);
    }
};
