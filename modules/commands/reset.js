module.exports.config = {
	name: "reset",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Đ𝙤̛̣𝙞 𝙭𝙞́𝙪 đ𝙖𝙣𝙜 𝙠𝙝𝙤̛̉𝙞 đ𝙤̣̂𝙣𝙜 𝙡𝙖̣𝙞 𝙝𝙚̣̂ 𝙩𝙝𝙤̂́𝙣𝙜 𝙗𝙤𝙩 !!!",event.threadID, () =>process.exit(1))
