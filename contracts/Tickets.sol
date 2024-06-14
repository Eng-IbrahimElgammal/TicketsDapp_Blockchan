// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

uint256 constant TOTAL_TICKETS = 20;

contract Tickets {
  address public owner = msg.sender;

  struct Ticket {
    uint256 price;
    address owner;
  }

  Ticket[TOTAL_TICKETS] public tickets;

  constructor() {
    for (uint256 i = 0; i < TOTAL_TICKETS; i++) {
      tickets[i].price = 1 ether; // Set price to 1 ETH
      tickets[i].owner = address(0x0);
    }
  }

  function buyTicket(uint256 _index) external payable {
    require(_index < TOTAL_TICKETS && _index >= 0, "Invalid ticket index");
    require(tickets[_index].owner == address(0x0), "Ticket already sold");
    require(msg.value >= tickets[_index].price, "Insufficient ETH to buy ticket");
    tickets[_index].owner = msg.sender;
  }
}
