

const ticketCollection = require('./tickiets');

// ticket selling controllers

exports.sellSingleTicket = (req, res, next)=>{
    const {username, price}= req.body;

    const ticket = ticketCollection.create(username, price)
}

exports.sellBulkTicket = (req, res, next)=>{

}