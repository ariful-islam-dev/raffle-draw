const {
  sellSingleTicket,
  sellBulkTicket,
  findByUsername,
  findById,
  findAll,
  updateById,
  updateByUsername,
} = require("./controllers");

const router = require("express").Router();

// router.get('/t/:id')
// router.put('/t/:id')
// router.delete('/t/:id')

router.route("/t/:id").get(findById).put(updateById).delete();

// router.get('/u/:username')
// router.put('/u/:username')
// router.delete('/u/:username')

router.route("/u/:username").get(findByUsername).put(updateByUsername).delete();

router.post("/bulk", sellBulkTicket);
router.get("/draw");

router.route("/").port(sellSingleTicket).get(findAll);

module.exports = router;
