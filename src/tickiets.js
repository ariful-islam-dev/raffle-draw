const Ticket = require("./Ticket");
const { readFile, writeFile } = require("./utils");

class TicketCollection {
  constructor() {
    this.tickets = [];
  }
  /**
   * Create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @return {Tickets}
   */

  create(username, price) {
    const ticket = new Ticket(username, price);
    this[tickets].push(ticket);
    return tickets;
  }

  /**
   * Create Bulk tickets
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @return {Tickets[]}
   */
  createBulk(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Return All tickets from db
   */

  find() {
    return this[tickets];
  }

  /**
   * find single ticket by id
   * @param {string} id
   * @return {Ticket}
   */
  findTicketById(id) {
    const ticket = this[tickets].find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === id
    );

    return ticket;
  }

  /**
   * find tickets by username
   * @param {string} username
   * @return {Tickets}
   */
  findTicketByUsername(username) {
    const tickets = this[tickets].filter(
      /**
       *
       * @param {tickets} ticket
       */
      (ticket) => ticket.username === username
    );

    return tickets;
  }
  /**
   * update by id
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @return {ticket}
   */

  updateTicketById(ticketId, ticketBody) {
    const ticket = this.findTicketById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;

    return ticket;
  }
  /**
   *
   * @param {string} ticketId
   * @returns {boolean}
   */

  deleteTicketById(ticketId) {
    const tickets = this[tickets].filter((ticket) => ticket.id !== ticketId);
    return tickets;

    // const index = this.tickets.findIndex(
    //     (ticket)=>ticket.id === id
    // );

    // if(index === -1){
    //     return false;
    // }else{
    //     this.tickets.splice(index, 1);
    //     return true
    // }
  }

  /**
   * Bulk update by username
   * @param {string} username
   * @param {{username:string, price:number}} ticketBody
   * @return {tickets[]}
   */

  updateBulk(username, ticketBody) {
    const userTickets = this.findTicketByUsername(username);
    const updatedTickets = userTickets.map(
      /**
       * @param {tickets[]}
       */

      (ticket) => this.updateTicketById(ticket.id, ticketBody)
    );
    return updatedTickets;
  }

  /**
   *
   * @param {string} username
   * @return {boolean[]}
   */
  deleteBulk(username) {
    const userTickets = this.findTicketByUsername(username);
    const deletedResult = userTickets.map(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => this.deleteTicketById(ticket.id)
    );
    return deletedResult;
  }

  /**
   * find winners
   * @param {number} winnerCount
   * @return {Ticket[]}
   */
  draw(winnerCount) {
    const winnerIndexes = new Array(winnerCount);

    let winnerIndex = 0;
    while (winnerIndex < winnerCount) {
      let ticketIndex = Math.floor(Math.random() * this.tickets.length);

      if(!winnerIndexes.includes(ticketIndex)){
        winnerIndexes[winnerIndex++] = ticketIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map(
      /**
       * @param {number} index
       */
      (index)=> this[tickets][index]
    );

    return winners
  }
}

const collection = new TicketCollection();

module.exports = collection;

