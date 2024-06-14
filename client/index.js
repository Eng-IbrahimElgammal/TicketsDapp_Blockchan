import Web3 from 'web3';
import configuration from '../build/contracts/Tickets.json';
import 'bootstrap/dist/css/bootstrap.css';
import ticketImage from './images/ticket.png';

const createElementFromString = (string) => {
  const el = document.createElement('div');
  el.innerHTML = string.trim();
  return el.firstChild;
};

const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

let account;

const accountEl = document.getElementById('account');
const ticketsEl = document.getElementById('tickets');
const TOTAL_TICKETS = 20;  // Updated to 20 tickets
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

const buyTicket = async (ticket) => {
  console.log(`Buying ticket with ID: ${ticket.id}`);
  await contract.methods.buyTicket(ticket.id).send({ from: account, value: ticket.price });
};

const refreshTickets = async () => {
  ticketsEl.innerHTML = '';
  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const ticket = await contract.methods.tickets(i).call();
    ticket.id = i;
    // Display the ticket price in ETH
    ticket.price = web3.utils.toWei('1', 'ether'); // Ensure price is set to 1 ETH in Wei
    if (ticket.owner === EMPTY_ADDRESS) {
      const ticketEl = createElementFromString(`
        <div class="ticket card" style="width: 18rem;">
          <img src="${ticketImage}" class="card-img-top" alt="Ticket Image">
          <div class="card-body">
            <h5 class="card-title">Ticket</h5>
            <p class="card-text">${web3.utils.fromWei(ticket.price, 'ether')} Eth</p>
            <button class="btn btn-primary">Buy Ticket</button>
          </div>
        </div>
      `);
      ticketEl.querySelector('button').onclick = buyTicket.bind(null, ticket);
      ticketsEl.appendChild(ticketEl);
    }
  }
};

const main = async () => {
  const accounts = await web3.eth.requestAccounts();
  account = accounts[0];
  accountEl.innerText = account;
  await refreshTickets();
};

document.addEventListener('DOMContentLoaded', (event) => {
  main();
});
