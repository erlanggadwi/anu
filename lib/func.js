const chalk = require('chalk')
const axios = require('axios')
const fetch = require('node-fetch') 
const fs = require('fs') 

module.exports.filterGroupAdmin = (participants) => {
	listadmin = new Array();
	participants.forEach(a =>{
		a.isAdmin ? listadmin.push(a.jid) : ''
	})
	return listadmin
}
module.exports.urlshortner = async (url) => {
	const getdt = await axios.get(`https://tinyurl.com/api-create.php?url=${url}&alias=bots-${this.randomString(7)}`)
	return getdt.data
}
module.exports.randomString = (length) => {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
    let str = '';
	lengt = length || 9
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * 65)];
    }
	return str
} 
module.exports.getRandom = getRandom = (ext) => {
	return `./media/${Date.now() / 10000}.${ext}`
}
module.exports.fetchJson = fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
module.exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
	const anu = fs.readFileSync('./lib/temp/doge.webp')
	if (!res.ok) return { type: 'image/jpeg', result: anu }
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}
module.exports.color = (text, color) => {
    return chalk.keyword(color || 'green')(text)
}

module.exports.parseMs = (milliseconds) => {
	if (typeof milliseconds !== 'number') throw new TypeError('Parameter must be filled with number');
	return {
		days: Math.trunc(milliseconds / 86400000),
		hours: Math.trunc(milliseconds / 3600000) % 24,
		minutes: Math.trunc(milliseconds / 60000) % 60,
		seconds: Math.trunc(milliseconds / 1000) % 60,
		milliseconds: Math.trunc(milliseconds) % 1000,
		microseconds: Math.trunc(milliseconds * 1000) % 1000,
		nanoseconds: Math.trunc(milliseconds * 1e6) % 1000
	};
}
const converters = {
	days: value => value * 864e5,
	hours: value => value * 36e5,
	minutes: value => value * 6e4,
	seconds: value => value * 1e3,
	milliseconds: value => value,
	microseconds: value => value / 1e3,
	nanoseconds: value => value / 1e6
};
module.exports.toMs = (objs) => {
	if (typeof objs !== 'object') throw new TypeError('parameter must be filled with object')
	let totalMilliseconds = 0;
	for (var [key, value] of Object.entries(objs)) {
		if (typeof value !== 'number') throw new TypeError(`Expected a \`number\` for key \`${key}\`, got \`${value}\` (${typeof value})`);
		const converter = converters[key];
		if (!converter) throw new Error(`Unsupported time key: ${key}`);
		totalMilliseconds += converter(value);
	}
	return totalMilliseconds;
};