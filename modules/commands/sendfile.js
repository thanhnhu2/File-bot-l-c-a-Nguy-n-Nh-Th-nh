module.exports.config = {
	name: 'sendfile',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'D-Jukie',//Mod by Lý Hải!
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
 const permission = ["100054769571636"];
             if (!permission.includes(event.senderID))
             return api.sendMessage(">callad chôm mdl kìa Như Thành ơi", event.threadID, event.messageID);
 
	const fs = require("fs-extra")
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('Tên file không được bỏ trống', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('Đuôi file không được khác .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
        	if(search == undefined) return api.sendMessage('🔎 Không tìm thấy file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 Không tìm thấy file: ' + file + ' \n🔎 File gần giống là: ' + search + '.js, \n» Thả cảm xúc vào tin nhắn này để give nó.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  𝗙𝗶𝗹𝗲 ' + args.join(' ') + ' 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» ℂ𝕙𝕖𝕔𝕜 𝕥𝕚𝕟 𝕟𝕙𝕒̆́𝕟 đ𝕚 ' + name, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
       		if(search == undefined) return api.sendMessage('🔎 𝙆𝙝𝙤̂𝙣𝙜 𝙩𝙞̀𝙢 𝙩𝙝𝙖̂́𝙮 𝙛𝙞𝙡𝙚 ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 𝙆𝙝𝙤̂𝙣𝙜 𝙩𝙞̀𝙢 𝙩𝙝𝙖̂́𝙮 𝙛𝙞𝙡𝙚: ' + file + ' \n🔎 𝗙𝗶𝗹𝗲 𝗴𝗮̂̀𝗻 𝗴𝗶𝗼̂́𝗻𝗴 𝗹𝗮̀: ' + search + '.js, \n» 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗴𝗶𝘃𝗲 𝗻𝗼́.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»   𝗙𝗶𝗹𝗲 ' + args.join(' ') + ' 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» 𝑭𝒊𝒍𝒆 ' + file + ' 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» ℂ𝕙𝕖𝕔𝕜 𝕥𝕚𝕟 𝕟𝕙𝕒̆́𝕟 đ𝕚 ' + namee, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» 𝑭𝒊𝒍𝒆 ' + file + ' 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}
