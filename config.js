//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "darksten4@gmail.com";
global.location = "America,Port-au-Prince.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Dark-S-TEN/DRK_ST_V1/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VYTWt5a0J6TXNxYkFYcXNieWFCR3R0UnpFZll2V0o0U3VOTDd4bEpuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjF4ZE9Zdm5kVkhOQnJwanZlL0pXdERjSFplamRXR0VyemowV2ZzY3RBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Q09XSGlLcjZOc2k4dXdsRjcvMzlWeG4yNzFrejdDVmIrUDh2YWRsSkhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhLzg5TUtob3BpQkozRmovaTlHUXBrbUZqdm8ydmIraHBqd3NaUm1mTUZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIVTJXUDQ4Z3FhVCt2d3poU2trMUdwdkUyNU0zZVNIZ0lybXFGaFBHMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhVZHF1K1lsTWJkWHlCUzJLRUk0YjBhdjlmcE12Z1BlTDN4WndQd0E5Mms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY041R2RwM25kWWZSYTJzbWNZRVFXdDJQSXNYMlFOQ3dKM3NwM2J2RHNXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWQzMnRpcVdVRjlTWFl5TSthcWFwYWZwRys0YmQ5Ukl5aGRlRHhnQnBuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5oVFBOSlR0MWt3eFhtd1Z4RlB0L3hIYk12VFFiaC9kczQ2N0dGUmZiTGsrRWFqd1lvcHhuZDJMcmdNbjV6d0haRm1GU1Qxc0J0OEhmY0JMUDJPQ0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IkR2ZlNKM2w4TlB0S2Rya00rV2JMdis5Z09FZFB0MkIwellLNk9qTm9yb1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM4NDA0MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E2NjVERTU5QTg2MDJDRTFDNEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTEwNDQ4Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM4NDA0MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EzNkM1N0VBQkExQTFDRkMzNkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTEwNDQ4OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOmZhbHNlLCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjdBMXJFTEVOaktuTDRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3JsY2w4ODJvMjNwMlFjWUwrSmNnSnRtY2VQb3BFbzdrYlI3Mm9LWCswbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiREw1aXpzaDhPQlpHeC81dWlZNUt5dmMyODVHRy90ZWdQQ0tPaFlUR0VkNEVaSEdIQXBXcktPano2ekhWZkpxWHFkVnF4OTZ0STh0OHh6M3hLZVFmRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkxMQ1c5MlhPZkhkT2xUQ2JyaDljQmt3dmtXbEdTNnE1MlFjbmprVWtNL2NsNEFiLzdLRm1HL0N6OHVtWFhwVWlPV3U3ejcyZ3NCNGdOamJuZTRYY0JnPT0ifSwibWUiOnsiaWQiOiIyMjg5Mzg0MDQwODoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjcwMjI2NjU4NzA5NjkxOjFAbGlkIiwibmFtZSI6IuG0jeG0nMmiyarhtKHhtIDKgOG0gCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5Mzg0MDQwODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFLNVhKZlBOcU50NmRrSEdDL2lYSUNiWm5IajZLUktPNUcwZTlxQ2wvdEsifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMTA0NDg1LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt3dCJ9=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "DRK_ST_V1",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
