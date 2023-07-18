
# Integrating Smart Contract

The project demonstrates a simple smart contract integrated with a frontend user interface. The contract allow users to donate Ether. The users can make donations and view donation details using a web-based interface. The project consists a frontend interface, built with HTML and JavaScript and a smart contract written in Solidity.
## Description

#### Smart Contract

The smart contract is implemented in Solidity and contains the following functionality:

- `donate()`: Allows users to make a donation by specifying the donor name and donation amount.
- `detail()`: Retrieves the donation amount for a specific donor.

#### Frontend Integration

The frontend interface is built using HTML and JavaScript. It provides a user-friendly way to interact with the smart contract The integration includes the following features:

- *Connect to MetaMask:* Users can connect their MetaMask wallet to the application.
- *Make Donations:* Users can enter the donor name and donation amount, and then click the `Donate` button to make a donation.
- *Retrieve Donation Details:* Users can enter a donor name and click the `Fetch` button to view the donation amount for that donor.
## Getting Started

#### Prerequisites
- MetaMask extension installed in your web browser.
- Internet connection to interact with the Ethereum network.

Follow the steps listed below to integrate the smart contract and interact with the web inteface.

##### **Remix IDE**
   - Open the Remix IDE (https://remix.ethereum.org/) in your web browser.
   - Copy and paste the smart contract `(contract.sol)` code into the Remix editor.
   - Select the appropriate compiler version for the smart contract.
   - Compile the contract by clicking the "Compile" button.
   - Ensure that the contract is successfully compiled without any errors.

##### **Deployment**
   - Switch to the "Deploy & Run Transactions" tab in Remix.
   - From the "Environment" dropdown, select the desired development environment (e.g., Injected Web3).
   - Click the "Deploy" button to deploy the smart contract to the selected network.
   - Once the contract is deployed, copy the contract address for future use.

##### **Integration with Frontend**
   - Open the project directory in your code editor.
   - Ensure that you have the contract ABI and the contract address.
   - In the frontend JavaScript code, locate the `createContractInstance` function.
   - Replace `<Your Contract Address>` with the actual contract address you copied during deployment.
   - Save the changes in the JavaScript file.

##### **Web Interface**
   - Open the `index.html` file in a web browser.
   - Connect MetaMask by clicking the "Connect MetaMask" button in the web interface.
   - If MetaMask is installed, it will prompt you to connect and grant account access.

##### **Making Donations**
   - Enter the donor's name in the "Donor" input field.
   - Enter the donation amount in the "Amount" input field.
   - Click the "DONATE" button to submit the donation transaction.
   - Confirm the transaction in MetaMask.
   - The donation will be processed, and the amount donated will be recorded in the smart contract.

##### **Retrieving Donation Details**
   - Enter the donor's name in the "Donor" input field.
   - Click the "Fetch" button to retrieve the donation amount for the specified donor.
   - The donation amount will be displayed below the "Fetch" button in the web interface.

Repeat the donation and retrieval process as desired, entering different donor names and amounts. 


#### Notes

- This project is for demonstration purposes only and should not be used in a production environment without proper security audits.
- Ensure that you are connected to the appropriate Ethereum network (e.g., local development network, testnet, or mainnet) in MetaMask to interact with the smart contract correctly.
## Authors
[@AyushiRai](https://github.com/st-bfly)

