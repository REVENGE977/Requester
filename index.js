const phin = require("phin"), { question, keyInSelect } = require("readline-sync"), chalk = require("chalk"), reqmethods = ["GET", "POST", "DELETE", "HEAD", "OPTIONS", "PUT", "PATCH"];
var reqbody, reqmethod;
var index = keyInSelect(reqmethods, chalk.yellow('? Request Method'));
if(index == -1) return console.log(chalk.redBright("Cancelled !"));
reqmethod = reqmethods[index];
if(!reqmethods.includes(reqmethod)) return console.log(chalk.red("Invalid Request Type !"));
var requrl = question(chalk.yellow("? URL "))
if(!requrl.startsWith("http")) return console.log(chalk.red("Invalid URL !"));
if(reqmethod == "POST" || reqmethod == "PATCH") reqbody = question(chalk.yellow("? Body (Empty = No Body) "));
var reqheaders = question(chalk.yellow("? Headers (Empty = No Headers) "))
phin({
    url: requrl,
    method: reqmethod,
    data: reqbody && reqbody.length < 1 ? null : reqbody,
    headers: reqheaders.length < 1 ? null : JSON.parse(reqheaders)
}).then(res => {
    console.log(`Status Code ${res.statusCode == 200 ? chalk.greenBright(res.statusCode) : chalk.gray(res.statusCode)}`)
    console.log(`Response Body: ${res.body}`);
})
