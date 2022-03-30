const ticketCollection = require("./tickiets");

// ticket selling controllers

exports.sellSingleTicket = (req, res, next) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);

  res.status(201).json({
    message: "Ticket Created Successfully",
    ticket,
  });
};

exports.sellBulkTicket = (req, res, next) => {
    const {username, price, quantity}=req.body;
    const tickets = ticketCollection.createBulk(username, price, quantity);

    res.status(201).json({
        message: 'Tickets created Successfully',
        tickets
    })
};
