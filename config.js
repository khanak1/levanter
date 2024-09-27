const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || 'ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05uNDVnKy85SElENk5TUE9Mclora04wM2NVRGRCcVY2SUJRNXRkdjltND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWptU3JlSlFWQUxOY3doQWJUZU45dUYwbzBWUnk0Z1VqbTdUdWJ2Rmtrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRERBT0gxNWM3bGdtNWNNcnhFWVVxd25QZ1pmMTZsaGlCcG1GbEhGOG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycUxpSjE4azYzaXBiRE94NFA5VTVHVEJqeDBCSDVway9rWGdubFl5VTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBTGdZVWxmdUZNZlpQTDFzVmd2L1VaczdtOHlWR0tQRkRyQVd1QmtTV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik52a2o1UmZsNXZiWC9BaDk0LzU1dGZVbWZ3U0I1WkVFZUw4UHUvb1BJMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5PRUlHZzR6OXJybmUyWmpvTUFMYlIvWEdxcTNmdDhiYkozbExsNCtWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWVjVHZIZUlmUk1xU0tBU1ZXTEdVSldCbWgrSVN4dTVwcC9scFFlbURHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVueUIyZjJSVXJ5VENNenhwc3YrLzk5bDJ5U3VXY3NSaElvc2ZxTlBHSFZCODNLb1hCTHBjMTBjMlR6NDJDYzVNc29aejJiSE9xTDVNQXlYaGNvbWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJtTnBxQmcrenF0MTFJdXdBYnNiUUJmSmYzOXdvd2N5bEo1eEZWcndLVDNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEZ2ZGckhJb1MtcVN0WWlOX0RWTXhnIiwicGhvbmVJZCI6ImFlZjIyMzNjLTU1NTItNGRmMS1iN2YwLWIyNGRmZjlhOTY5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWW5hZGc0Rm02TWZycGhXVFRLNmp4dGhacHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3VmeDRoUmZERWl0d09KTzBnSFBOSXFyZVl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0xRkJLWDNGIiwibWUiOnsiaWQiOiI5MjM1NTYxNTkyMzQ6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HTndkMEJFSnprMUxjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlZRDBzMDZScElsbTdMM0h1djVUYURuS0RqcE5aOWVPZlg5dXdwRDFlRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVNQlN1ZGpHWm1IUlZUSUtZd1J3TDFpT2ZaU2xKaVFoWjEwQ25TZXhPOG1POXdoMEJmOEtGYWZ5dUV5cXJxNGtteFk4Y2FWUTM3U2U0OThiY0dROEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHblNlV3kyeCtsR0xLdCs2aEJPRzBTUzkzZHR0ZGlVUEhnZEJpZ3hNM3JVS0w5bUUzWVdTdWJuVDcyRG56aWJYaGhpY2xBWGE2SnAvR3hxKzN6NjVoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzU1NjE1OTIzNDozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbUE5TE5Pa2FTSlp1eTl4N3IrVTJnNXlnNDZUV2ZYam4xL2JzS1E5WGhiIn19LHsiaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNTU2MTU5MjM0OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNtQTlMTk9rYVNKWnV5OXg3citVMmc1eWc0NlRXZlhqbjEvYnNLUTlYaGIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczNDUxOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRW9wIn0=').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  SUDO: process.env.SUDO || '',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,LyFE',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || false,
  LOG_MSG: toBool(process.env.LOG_MSG) || false,
  RMBG_KEY: process.env.RMBG_KEY || '🎭',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: toBool(process.env.FORCE_LOGOUT),
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DIS_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: process.env.REJECT_CALL,
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'true').trim(),
  SEND_READ: process.env.SEND_READ,
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: process.env.AJOIN,
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: (process.env.PERSONAL_MESSAGE || 'null').trim(),
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE
    ? toBool(process.env.DISABLE_START_MESSAGE)
    : false,
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'text').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || '').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || '').trim(),
  ADMINS: process.env.GROUP_ADMINS || '',
  RENDER_NAME: (process.env.RENDER_NAME || '').trim(),
  RENDER_API_KEY: (process.env.RENDER_API_KEY || '').trim(),
  TIMEZONE: process.env.TIMEZONE,
  CMD_REACTION: process.env.CMD_REACTION || 'true',
}
