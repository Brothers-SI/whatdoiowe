const { Router } = require("express");

const router = Router();
const Telegram = require('../controllers/http/telegram')
router.post(`/telegram/${process.env.TELEGRAM_HASH}`, Telegram.receive);

module.exports = router;