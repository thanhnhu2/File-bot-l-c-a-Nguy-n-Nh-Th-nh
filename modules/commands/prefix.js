module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙",
  description: "Dùng sai lệnh bot .",
  commandCategory: "Thông tin dùng sai lệnh bot",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://imgur.com/j4SCKM2.jpg",
    "https://imgur.com/03UvtQb.jpg",
    "https://imgur.com/vxtN3IW.jpg",
    "https://imgur.com/2AOIgUL.jpg",
    "https://imgur.com/K5LCtmp.jpg",
    "https://imgur.com/7GrC3TD.jpg",
    "https://imgur.com/RMWiugi.jpg",
    "https://imgur.com/TFA1j2d.jpg",
    "https://imgur.com/3bcjmHg.jpg",
    "https://imgur.com/mMh3SQS.jpg",
    "https://imgur.com/7cw9Cv3.jpg",
    "https://imgur.com/dlseLph.jpg",
    "https://imgur.com/MV5kznS.jpg",
    "https://imgur.com/Vlp2xey.jpg"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Hỡi cô cắt cỏ bên đê \nCó nghe anh hò đứng dậy mà nghe \nNghe xong thì nói quê nhà \nCó nhiều anh chị hay là mình em",
               
              "Trời mưa xăn ống cao quần \n Hỡi cô bán thuốc nhà gần hay xa",  
              "Boi 2 mái \nĐi đái vẫn nhớ em",
              "Học ăn học nói, học gói mang về",
              "Tôi có một vài người bạn. Không nhiều nhưng mà ít",
              "Chớ nghe lời phỉnh tiếng phờ  \nThò tay vào lờ, mắc kẹt cái hom",
              "Ai ơi chớ vội cười nhau \nCây nào mà chẳng có sâu chạm cành",
              "Đã cam quấn quít má đào, \nNhững mong chim nhạn mai trao chỉ hồng.",
              "Đa tình thì vướng nợ tình, \nTrách người đã vậy, trách mình sao đây !",
              "Bán anh em xa, mua láng giềng gần.",
              "Cây ngay không sợ chết đứng.\n Người xinh xắn đâu sợ ko bị đ*t",
              "Trời đổ mưa rồi, sao anh chưa đổ em?",
              "Tớ có một siêu năng lực, nhắm mắt lại là có thể nhìn thấy cậu.",
              " Anh có thể cười 1 cái được không? Cafe của em quên cho đường rồi.\n Could you smile? I forgot putting sugar in my cafe.",
              "Anh ơi có cháy này! Cháy trong tim em! \nFire!!! Fire in my heart!",
              "Có rất nhiều cách để hạnh phúc, nhưng nhanh nhất chính là được nhìn thấy anh."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	  var callback = () => api.sendMessage({body:`╭──────────╮\n[➤]𝙎𝙖𝙞 𝙇ệ𝙣𝙝﹏﹏⌫\n╰──────────╯\n\n 𝕋𝕙𝕚́𝕟𝕙🥰: [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };
