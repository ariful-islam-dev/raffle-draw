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
   * @return {tickets}
   */

  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return tickets;
  }

  /**
   * Return All tickets from db
   */

  find() {
    return this.tickets;
  }

  /**
   * find single ticket by id
   * @param {string} id
   * @return {ticket}
   */
  findTicketById(id) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {ticket} ticket
       */
      (ticket) => ticket.id === id
    );

    return ticket;
  }

  /**
   * find tickets by username
   * @param {string} username
   * @return {tickets}
   */
  findTicketByUsername(username) {
    const tickets = this.tickets.filter(
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

  deleteTicketById(ticketId){
    
    const tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
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
}

const collection = new TicketCollection();
