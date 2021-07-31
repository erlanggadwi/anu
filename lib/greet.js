const fs = require('fs')
const axios = require('axios') 
module.exports = async (jdgn, Client, client) =>{
try {
			const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
			from = jdgn.jid
			if (!dataGc[from] || !dataGc[from].welcome && !dataGc[from].leave) return
			const mdata = await client.groupMetadata(from)
			jdgn.participants.forEach(async num =>{
			if (num == client.user.jid) return
			if (jdgn.action == 'add') {
				stst = await client.getStatus(`${num.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`).catch(() => ppimg = 'https://i.ibb.co/PCpJRqd/pepeq.jpg')
				member = mdata.participants.length
				teks = `*[ Member Baru! ${mdata.subject} ]*\n\n*――――――――――――――*\n⤔ *Name*: @${num.split('@')[0]}\n⤔ *Bio*: ${stst}\n*――――――――――――――*\n\nWelcome 🎊🎊🎉!\n\n_*Baca Deskripsi Group!*_\n\n${mdata.desc}`
				let pushname = client.contacts[num].vname || client.contacts[num].notify || num.split('@')[0] 
				axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/welcome2?name=${encodeURIComponent(pushname)}&discriminator=${encodeURIComponent(member)}&member=${encodeURIComponent(member)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg&apikey=BryanRfly`) 
.then(res => {
Client.sendFileFromUrl(jdgn.jid, `${res.data.result}`, 'user.jpg', teks, null, {contextInfo: {"mentionedJid": Client.getMentionedJidList(teks), "stanzaId":"xxxx","participant":"0@s.whatsapp.net","quotedMessage":{"groupInviteMessage":{"groupJid":from,"inviteCode":"OKOKLAH","inviteExpiration":"0","groupName":from,"caption":`Participant Added/Join ${pushname}`}},"remoteJid":num}})
}) 
			} else if (jdgn.action == 'remove') {
				stst = await client.getStatus(`${num.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				var ppimg;
				ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`).catch(() => ppimg = 'https://i.ibb.co/PCpJRqd/pepeq.jpg')
				teks = `*[ Member leave! ${mdata.subject} ]*\n\n*――――――――――――――*\n⤔ *Name*: @${num.split('@')[0]}\n⤔ *Bio*: ${stst}\n*――――――――――――――*\n\nSemoga tenang dialam sana~`
				let pushname = client.contacts[num].vname || client.contacts[num].notify || num.split('@')[0] 
				member = mdata.participants.length
				axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/goodbye2?name=${encodeURIComponent(pushname)}&discriminator=${encodeURIComponent(member)}&member=${encodeURIComponent(member)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg&apikey=BryanRfly`) 
.then(res => {
Client.sendFileFromUrl(jdgn.jid, `${res.data.result}`, 'leave.jpg', teks, null, {contextInfo: {"mentionedJid": Client.getMentionedJidList(teks), "stanzaId":"xxxx","participant":"0@s.whatsapp.net","quotedMessage":{"groupInviteMessage":{"groupJid":from,"inviteCode":"OKOKLAH","inviteExpiration":"0","groupName":from,"caption":`Participant Leeave/kicked ${pushname}`}},"remoteJid":num}})
}) 
			}
			})
		} catch (e) {
			console.log(e)
		}
	}
