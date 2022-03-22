const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(127,255,0)('» Lỗi rồi «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(255,20,147)('» Lỗi rồi «  ') + data);
			break;
		default:
			console.log(chalk.rgb(230,230,230)(`» ${option} « `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(0,206,209)('» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(255,105,180)('» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  ') + data);
			break;
		default:
			console.log(chalk.rgb(64,224,208)(`» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  `) + data);
			break;
	}
}
