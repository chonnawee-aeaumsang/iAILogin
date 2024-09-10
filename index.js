const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAGCIRc0kukGgNeE6_NWn_tf3__qEV3bGc0"; // Replace with your bot token
const webhookUrl = "https://i-ai-login.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

