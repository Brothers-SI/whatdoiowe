class TelegramHttp {
  constructor() {
    const TelegramBot = require("node-telegram-bot-api");
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
    this.bot.setWebHook(
      `${process.env.WEBHOOK_PUBLICURL}/telegram/${process.env.TELEGRAM_HASH}`
    );
  }

  receive(req, res) {
    // this.bot.processUpdate(req.body);
    const { message: from, chat, date, text, entities } = req.body;
    console.log("Message received:", req.body.message);
    res.send(req.body);
  }

  onMessage() {
    this.bot.on("message", (msg) => {
      this.bot.sendMessage(msg.chat.id, "I am alive!");
    });
  }
}
module.exports = new TelegramHttp();
