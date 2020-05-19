const { Router } = require("express");

const router = Router();
router.post(`/telegram/${process.env.TELEGRAM_HASH}`, (req, res) => {
  const {message: from, chat, date, text, entities } = req.body;
  console.log(req.body.message);
  res.send(req.body)
})

module.exports = router;