 const request = require("request");
const fs = require("fs")
const axios = require("axios")
 module.exports.config = {
  name: "gai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Random ảnh giá",
  commandCategory: "Hình Ảnh",
  usages: "gai",
  cooldowns: 5,
  dependencies: {}
    
};

module.exports.run = async({api, event, Currencies}) => {
var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (100 > moneyUser) return api.sendMessage("Hết tiền kìa bạn ơi", event.threadID, event.messageID);
    var link = [
"https://i.imgur.com/G8JTDUl.jpg",
"https://i.imgur.com/I755rri.jpg",
"https://i.imgur.com/L1FC5Ir.jpg",
"https://i.imgur.com/ax30104.jpg",
"https://i.imgur.com/saimlP4.jpg",
"https://i.imgur.com/GGfygcC.jpg",
"https://i.imgur.com/GGfygcC.jpg",
"https://i.imgur.com/y8cPYKs.jpg",
"https://i.imgur.com/jWsDIQf.jpg",
"https://i.imgur.com/uGNgllz.jpg",
"https://i.imgur.com/WyVdCdx.jpg",
"https://i.imgur.com/x4GjO4e.jpg",
"https://i.imgur.com/j4IdeZ9.jpg",
"https://i.imgur.com/S96i3PA.jpg",
"https://i.imgur.com/DMHmXdv.jpg",
"https://i.imgur.com/Uk9sFXh.jpg",
"https://i.imgur.com/VWessiA.jpg",
"https://i.imgur.com/K6bJMPC.jpg",
"https://i.imgur.com/xjR99yr.jpg",
"https://i.imgur.com/nGkKuv7.jpg",
"https://i.imgur.com/PAVLSkX.jpg",
"https://i.imgur.com/R9J2uG3.jpg",
"https://i.imgur.com/f83z4Z1.jpg",
"https://i.imgur.com/TsFfk7O.jpg",
"https://i.imgur.com/WAj3JbJ.jpg",
"https://i.imgur.com/XrSeV0R.jpg",
"https://i.imgur.com/3AEk1HO.jpg",
"https://i.imgur.com/6aRdx9A.jpg",
"https://i.imgur.com/0X9cUXM.jpg",
"https://i.imgur.com/RedLmBZ.jpg",
"https://i.imgur.com/d9lBgaM.jpg",
"https://i.imgur.com/njBvNOC.jpg",
"https://i.imgur.com/0u9RglN.jpg",
"https://i.imgur.com/5FfubP0.jpg",
"https://i.imgur.com/S98oT55.jpg",
"https://i.imgur.com/jhAzJvm.jpg",
"https://i.imgur.com/8ZF9QKJ.jpg",
"https://i.imgur.com/byyGNuI.jpg",
"https://i.imgur.com/33dnreZ.jpg",
"https://i.imgur.com/OrOCCD6.jpg",
"https://i.imgur.com/ULfGCsd.jpg",
"https://i.imgur.com/hUTWxg4.jpg",
"https://i.imgur.com/ZIPqyK7.jpg",
"https://i.imgur.com/pF49rww.jpg",
"https://i.imgur.com/nyw5DjY.jpg",
"https://i.imgur.com/qTChmw6.jpg",
"https://i.imgur.com/EnW7fKp.jpg",
"https://i.imgur.com/ObliAZW.jpg",
"https://i.imgur.com/yEbEE2x.jpg",
"https://i.imgur.com/odsf2Uu.jpg",
"https://i.imgur.com/VTYkyDa.jpg",
"https://i.imgur.com/LcrASdc.jpg",
"https://i.imgur.com/VV0RnMC.jpg",
"https://i.imgur.com/Vq8SRoK.jpg",
"https://i.imgur.com/7GQOA4M.jpg",
"https://i.imgur.com/Jbo1Ifa.jpg",
"https://i.imgur.com/fjihOnS.jpg",
"https://i.imgur.com/4KiShCo.jpg",
"https://i.imgur.com/x5URZnF.jpg",
"https://i.imgur.com/ODFYtCx.jpg",
"https://i.imgur.com/Hvtr7ZO.jpg",
"https://i.imgur.com/lLHFEQi.jpg",
"https://i.imgur.com/1WvmyXy.jpg",
"https://i.imgur.com/nOeYaEE.jpg",
"https://i.imgur.com/74Bb9FD.jpg",
"https://i.imgur.com/XaD9RRs.jpg",
"https://i.imgur.com/KugXlE9.jpg",
"https://i.imgur.com/GPI7rZD.jpg",
"https://i.imgur.com/Z1bqBrH.jpg",
"https://i.imgur.com/ydFAtUe.jpg",
"https://i.imgur.com/NQMNjrs.jpg",
"https://i.imgur.com/ycIeBe8.jpg",
"https://i.imgur.com/JZRzh9e.jpg",
"https://i.imgur.com/HpfYaLw.jpg",
"https://i.imgur.com/4rC7AFL.jpg",
"https://i.imgur.com/EBJuOVi.jpg",
"https://i.imgur.com/uuvS3UI.jpg",
"https://i.imgur.com/VnwqoZ5.jpg",
"https://i.imgur.com/1mDTuS1.jpg",
"https://i.imgur.com/ZJ5FLOR.jpg",
"https://i.imgur.com/JKmE9k3.jpg",
"https://i.imgur.com/OO64Qjf.jpg",
"https://i.imgur.com/RxKuG2s.jpg",
"https://i.imgur.com/0aMT3F1.jpg",
"https://i.imgur.com/xppGv1y.jpg",
"https://i.imgur.com/WL4fTJL.jpg",
"https://i.imgur.com/7fviVQx.jpg",
"https://i.imgur.com/3hnYcIo.jpg",
"https://i.imgur.com/GPwGV8k.jpg",
"https://i.imgur.com/TYLzHWX.jpg",
"https://i.imgur.com/rlAzrf0.jpg",
"https://i.imgur.com/XD3FxAy.jpg",
"https://i.imgur.com/sTrLUHo.jpg",
"https://i.imgur.com/rR7cqRL.jpg",
"https://i.imgur.com/LDnQdkF.jpg",
"https://i.imgur.com/7EbJTCZ.jpg",
"https://i.imgur.com/bli3w0P.jpg",
"https://i.imgur.com/4LaVAxe.jpg",
"https://i.imgur.com/SZBNVAz.jpg",
"https://i.imgur.com/LV1RQ1I.jpg",
"https://i.imgur.com/LVds2dk.jpg",
"https://i.imgur.com/FCBFIEs.jpg",
"https://i.imgur.com/GnaGuMa.jpg",
"https://i.imgur.com/SanyCrx.jpg",
"https://i.imgur.com/icBVGJx.jpg",
"https://i.imgur.com/C8Yq0x0.jpg",
"https://i.imgur.com/d071686.jpg",
"https://i.imgur.com/Fq9uTRj.jpg",
"https://i.imgur.com/K0Y41bk.jpg",
"https://i.imgur.com/8j7kH49.jpg",
"https://i.imgur.com/DmdQKaw.jpg",
"https://i.imgur.com/RmLtdAX.jpg",
"https://i.imgur.com/rBSmDGf.jpg",
"https://i.imgur.com/ipyy3Ea.jpg",
"https://i.imgur.com/519wMKd.jpg",
"https://i.imgur.com/GzpPWMu.jpg",
"https://i.imgur.com/9dm6Yfz.jpg",
"https://i.imgur.com/ZNGR7Ol.jpg",
"https://i.imgur.com/ruwZ5Mp.jpg",
"https://i.imgur.com/NqJRYKs.jpg",
"https://i.imgur.com/l0yyJrh.jpg",
"https://i.imgur.com/Vj5cazH.jpg",
"https://i.imgur.com/5T5USh0.jpg",
"https://i.imgur.com/or2E3iD.jpg",
"https://i.imgur.com/eyEYAhE.jpg",
"https://i.imgur.com/zQq3oaF.jpg",
"https://i.imgur.com/UTML1vR.jpg",
"https://i.imgur.com/zbAk2dO.jpg",
"https://i.imgur.com/hWopk0M.jpg",
"https://i.imgur.com/AdpujxQ.jpg",
"https://i.imgur.com/Fc5ZU7W.jpg",
"https://i.imgur.com/h5xYbIY.jpg",
"https://i.imgur.com/rz5uk9H.jpg",
"https://i.imgur.com/pKpu9BE.jpg",
"https://i.imgur.com/YJbKy06.jpg",
"https://i.imgur.com/9YTgeET.jpg",
"https://i.imgur.com/6K2vJVY.jpg",
"https://i.imgur.com/aIp6QFq.jpg",
"https://i.imgur.com/0IUfvL0.jpg",
"https://i.imgur.com/ODndGYE.jpg",
"https://i.imgur.com/LNBtV99.jpg",
"https://i.imgur.com/rDSdAHn.jpg",
"https://i.imgur.com/u46yaYz.jpg",
"https://i.imgur.com/0oZIlVF.jpg",
"https://i.imgur.com/V83VofN.jpg",
"https://i.imgur.com/7t9KxSK.jpg",
"https://i.imgur.com/EAHv9QH.jpg",
"https://i.imgur.com/bAH4gX3.jpg",
"https://i.imgur.com/oO091T8.jpg",
"https://i.imgur.com/0g6dgNf.jpg",
"https://i.imgur.com/xXcH6Mv.jpg",


];
     Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => 
   api.sendMessage({
    body:`Xin 100 của bạn nhá\nẢnh Gái\nSố Ảnh: ${link.length}`,
    attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")
  }, event.threadID, (err, info) =>
        setTimeout(() => {api.unsendMessage(info.messageID) } , 3000000));
       request(link[Math.floor(Math.random() * link.length)]).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };