const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(153,102,204)('» Lỗi rồi «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(61,43,31)('» Lỗi rồi «  ') + data);
			break;
		default:
			console.log(chalk.rgb(0,255,255)(`» ${option} « `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(172,225,175)('» 𝒩𝒽𝓊̛ 𝒯𝒽𝒶̀𝓃𝒽 «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(192,192,192)('» 𝒩𝒽𝓊̛ 𝒯𝒽𝒶̀𝓃𝒽 «  ') + data);
			break;
		default:
			console.log(chalk.rgb(172,225,175)(`» 𝒩𝒽𝓊̛ 𝒯𝒽𝒶̀𝓃𝒽 «  `) + data);
			break;
	}
}
