module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "???",//Mod by H.Thanh
    description: "",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "00FF00", "333300", "FFCCFF", "FFCC00", "33CC66", "FFCC99", "996633", "FF66CC", "FF6666", "3366CC", "993366", "FF3333", "CC6600", "009900", "CC9933", "00CC00", "333333"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
 var random4 = job[Math.floor(Math.random() * job.length)] 
    console.log(chalk.hex("#" + random)(`Tên nhóm: ${nameBox}`) + " | " + chalk.hex("#" + random1)(`Tên người dùng: ${nameUser}`) + " | " + chalk.hex("#" + random2)(`Nội dung: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.hex("#" + random4)(`◆━━━━━━━━━━◆━━━━━━━━━◆NGUYỄN ĐINH TIẾN DŨNG◆━━━━━━━━◆━━━━━━━━━━◆`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}