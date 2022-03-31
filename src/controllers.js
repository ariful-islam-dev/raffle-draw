const ticketCollection = require("./tickiets");

// ticket selling controllers

exports.sellSingleTicket = (req, res, _next) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);

  res.status(201).json({
    message: "Ticket Created Successfully",
    ticket,
  });
};

exports.sellBulkTicket = (req, res, _next) => {
    const {username, price, quantity}=req.body;
    const tickets = ticketCollection.createBulk(username, price, quantity);

    res.status(201).json({
        message: 'Tickets created Successfully',
        tickets
    })
};

//Find tickets controllers
exports.findAll = (_req, res, _next)=>{
  const tickets = ticketCollection.find();
  res.status(200).json({items: tickets, total: tickets.length})
}

// Find single ticket controllers

exports.findById = (req, res, next)=>{
  const id = req.params.id;
  const ticket = ticketCollection.findTicketById(id);

  if(!ticket){
    return res.status(404).json({message: '404 Not Found'})
  }

  res.status(200).json(ticket)
}

// Find By username

exports.findByUsername = (req, res )=>{
  const username = req.params.username;
  const tickets = ticketCollection.findTicketByUsername(username);
  res.status(200).json({items: tickets, total: tickets.length})

}

//update Controller by id

exports.updateById = (req, res)=>{
  const id = req.params.id;
  const ticket = ticketCollection.findTicketById(id);

  if(!ticket){
    return res.status(404).json({message: '404 Not Found'})
  }

  const updateTicket = ticketCollection.updateTicketById(id, req.body)
  res.status(203).json(updateTicket)

}

exports.updateByUsername=(req,res)=>{
  const username = req.params.username;
  const tickets = ticketCollection.findTicketByUsername(username)

  if(!tickets){
    return res.status(404).json({message: '404 Not Found'})
  }

  const updateTicket = ticketCollection.updateBulk(username, req.body)
  res.status(200).json({items: tickets, total: tickets.length})
}