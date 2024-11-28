 // config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "levanter_26cd19852800d5448ca5d2d09f013358e3",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  STATUS_SEND_RAW_URL: process.env.STATUS_SEND_RAW_URL || "",
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  PREFIX: process.env.PREFIX || "!",
  OWNER_NAME: process.env.OWNER_NAME || "𝒟𝑒𝓃𝑒𝓉𝒽 𝑅𝒶𝓈𝒾𝓃𝒹𝓊 𝒩𝒾𝓂𝓈𝒶𝓇𝒶",
  SUDO_NUMBER: process.env.OWNER_NUMBER || "+94774563898",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
