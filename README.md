# Decentralized Ticket Purchasing System

## Overview

The Decentralized Ticket Purchasing System is a blockchain-based application built on the Ethereum platform. It allows users to securely purchase tickets using Ethereum cryptocurrency. The system provides a transparent and immutable ticket purchasing process, ensuring trust and security for both buyers and sellers.

## Features

- **Smart Contracts**: Implemented in Solidity, the smart contracts manage ticket creation, pricing, and purchasing.
- **Local Blockchain**: Ganache is used to simulate a local blockchain environment for development and testing.
- **Web3 Integration**: Web3.js is used to interact with the Ethereum blockchain from the frontend.
- **MetaMask Integration**: MetaMask is used for account management and transaction signing.

## Installation

1. **Install Ganache**: Download and install Ganache from the [Truffle Suite](https://www.trufflesuite.com/ganache).
2. **Install Truffle**: Install Truffle globally using npm: `npm install -g truffle`.
3. **Clone Repository**: Clone the repository to your local machine: `git clone https://github.com/Eng-IbrahimElgammal/TicketsDapp_Blockchan.git`.
4. **Install Dependencies**: Install project dependencies using npm: `npm install`.

## Usage

1. **Start Ganache**: Launch Ganache and create a new workspace.
2. **Compile Contracts**: Compile the Solidity smart contracts: `truffle compile`.
3. **Deploy Contracts**: Deploy the contracts to Ganache: `truffle migrate --network development`.
4. **Start Frontend**: Open `index.html` in a web browser to interact with the frontend.
5. **Connect MetaMask**: Configure MetaMask to connect to the local Ganache network.
6. **Purchase Tickets**: Enter the number of tickets to purchase and confirm the transaction in MetaMask.
7. **Check Ticket Balance**: View the updated ticket balance in the frontend.

## Technologies Used

- Ganache
- Truffle
- Solidity
- Web3.js
- MetaMask

## Contributing

Contributions are welcome! Fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
