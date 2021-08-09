/*

   Hai Bang Mau Ngapain? 
   Thanks Udah Pake Sc Recode'an gw
   Credits Zeks and BryanRfly
   lopyu
   
   Error? Hubungi Saya🗿
   More Info? https://wa.me/6289649480997
   
*/

const { 
          GroupSettingChange,
          WAMessageProto, 
          MessageType,
          Presence, 
          prepareMessageFromContent, 
          relayWAMessage, 
          ChatModification
     } = require('@adiwajshing/baileys')
const { exec } = require('child_process');
const axios = require('axios')
const fs = require('fs') 
const hx = require('hxz-api') 
const os = require('os') 
const toMs = require('ms')
const ms = require('parse-ms')
const speed = require('performance-now')
let FormData = require('form-data')
const ffmpeg = require('fluent-ffmpeg')
const afkJs = require('./lib/afk')
const moment = require('moment-timezone');
const {
    mess,
    menu,
    ingfo
} = require('./lib/text') 
const { color, 
        getBuffer, 
        getRandom, 
        fetchJaon
      } = require('./lib/func') 
const p = JSON.parse(fs.readFileSync('./config.json'));
const {
        uploadimg,
        upload 
      } = require('./lib/uploadimg')

moment.tz.setDefault('Asia/Jakarta').locale('id');

module.exports = handle = (client, Client) => {
    try {
        /*DOWNLOADER*/
        Client.cmd.on('ytmp4', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp4 [ link ]*\nContoh : ${data.prefix}ytmp4 https://www.youtube.com/xxx`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp4/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Link* : ${ytm.link}\n\n_Jika durasi melebihi batas akan dikirim berbentuk link._`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch {
                data.reply('Ups maaf server sedang error')
            }
        }) 
        Client.cmd.on('tiktoknowm', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Link')
               Client.sendFileFromUrl(data.from, `https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${data.body}&apikey=BryanRfly`, 'tiktok.mp4', `Video Berhasil Di Dapatkan@${data.sender.split('@')[0]}`,  data.message)
        })
        Client.cmd.on('tiktok', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
          Client.sendFileFromUrl(data.from, `https://dapuhy-api.herokuapp.com/api/socialmedia/tiktokwithwm?url=${data.body}&apikey=BryanRfly`, 'tiktod.mp4', `Video Berhasil Di Dapatkan @${data.sender.split('@')[0]}`, data.messsge)
        }) 
        Client.cmd.on('ytmp3', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp3 [ link ]*\nContoh : ${data.prefix}ytmp3 https://www.youtube.com/xxx`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp3/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Link* : ${ytm.link}\n\n_Jika durasi melebihi batas akan dikirim berbentuk link._`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error')
            }
        }) 
        
        Client.cmd.on('playvid', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playvid [ query ]*\nContoh : ${data.prefix}playvid anime`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp4/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Jika durasi melebihi batas akan dikirim berbentuk link._`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, 'video.mp4', `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch (e) {
                data.reply('Ups maaf server sedang error')
            }
        })
        Client.cmd.on('ytplay', async(data) => {
          if(isLimit(data.sender)) return data.reply(mess.limit)
          if(data.body == "") return data.reply('Input Link')
          res = await axios.get(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp4v2?url=${data.body}&apikey=BryanRfly`)
          result = res.data 
          Client.sendFileFromUrl(data.from, result.url, `ytplay.mp4`, 'Video Berhasil Di Dapatkan', data.from)
        })
        Client.cmd.on('playyt', async(data) => {
          if(isLimit(data.sender)) return data.reply(mess.limit)
          if(data.body == "") return data.reply('Input Query')
          Client.sendFileFromUrl(data.from, `https://dapuhy-api.herokuapp.com/api/socialmedia/ytplaymp4v2?query=${data.body}&apikey=BryanRfly`, 'playyt.mp4', 'Nih Kak', data.messsge)
        })
        Client.cmd.on('youtubedl', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}play [ link ]*\nContoh : ${data.prefix}play perfect`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp3/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Jika durasi melebihi batas akan dikirim berbentuk link._`, data.message)
                Client.sendFileFromUrl(data.from, ytm.thumb, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, ytm.link, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error')
            }
        })
        Client.cmd.on('mediafire', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('input link')
          try {
            mdfr = await axios.get(`https://api.lolhuman.xyz/api/mediafire?apikey=erdwpe2003&url=${data.body}`)
            res = mdfr.data.result
            Client.sendFileFromUrl(data.from, res.link, '', ``, data.message)
            if(Number(res.filesize.split(' MB')[0]) >= 40.00) return data.reply('Ukuran File Terlalu Besar Maksimal Ukuran File Adalah 40MB!')
          } catch(e) {
            data.reply(''+e)
          }
        })
        Client.cmd.on('soundcloud', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Link!')
          try {
            sndc = await axios.get(`https://xteam.xyz/dl/soundcloud?url=${data.body}&APIKEY=${configs.xkey}`)
            res = sndc.data.result
            Client.sendFileFromUrl(data.from, res.dataurl, 'sound.mp3', ``, data.message)
          } catch(e) {
            data.reply(''+e)
          }
        })
        Client.cmd.on('tiktokaudio', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Url! ')
          Client.sendFileFromUrl(data.from, `https://lolhuman.herokuapp.com/api/tiktokmusic?apikey=KopiLuwak&url=${data.body}`, 'tiktokaud.mp3', ``, data.message)
        })
        Client.cmd.on('ig', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Link') 
                  Client.sendFileFromUrl(data.from, `https://dapuhy-api.herokuapp.com/api/socialmedia/igdownload?url=${data.body}&apikey=BryanRfly`, 'ig.mp4',`Video Berhasil Di Dapatkan @${data.sender.split('@')[0]}`, data.message)
        })

        Client.cmd.on('ig', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('input link')
            mdfr = await axios.get(`http://api.lolhuman.xyz/api/instagram2?apikey=erdwpe2003&url=${data.body}`)
            res = mdfr.data.result
            for (let i = 0; i < mdfr.data.result.media.length; i++) {
            Client.sendFileFromUrl(data.from, res.media[i], '', 'nih ngab', ``, data.message)
            }
          })
        Client.cmd.on('igstory', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstory [ username ]*\nContoh : ${data.prefix}igstory beaconcream`)
                data.reply(mess.wait)
                stomr = await axios.get(`${configs.apiUrl}/api/igs?apikey=${configs.zeksKey}&username=${data.body}`)
                if(stomr.data.status == false) return data.reply(stomr.data.message)
                for(let i = 0; i < stomr.data.data.length; i++) {
                    Client.sendFileFromUrl(data.from, stomr.data.data[i].url, `ig.${stomr.data.data[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${stomr.data.username}\n*Type*: ${stomr.data.data[i].type}`, data.message);
                }
            } catch {
                data.reply('Username tidak ditemukan')
            }
        })
        Client.cmd.on('joox', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}joox [ lagu ]*\nContoh : ${data.prefix}joox bad liar`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/joox?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(jox.data.message)
                jox = res.data.data[0]
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${jox.judul}\n*Artis* : ${jox.artist}\n*Album* : ${jox.album}\n*Ukuran* : ${jox.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                Client.sendFileFromUrl(data.from, `${jox.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${jox.audio}`, 'audio.mp3', ``, data.message)
            } catch {
                data.reply('Maaf lagu tidak ditemukan')
            }
        })
        /*RANDOM*/
        Client.cmd.on('fml', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/fml?apikey=${configs.zeksKey}`)
            data.reply(res.data.result)
        })
        Client.cmd.on('randomquran', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/randomquran?apikey=${configs.zeksKey}`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            data.reply(teks)
            Client.sendFileFromUrl(data.from, rquran.audio, 'quran.mp3', ``, data.message)
        }) 
        Client.cmd.on('estetikpic', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/estetikpic?apikey=${configs.zeksKey}`, 'estetik.jpg', ``, data.message)
        })
        Client.cmd.on('meme', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            axios.get(`${configs.apiUrl}/api/memeindo?apikey=${configs.zeksKey}`)
            .then(res => {
            Client.sendFileFromUrl(data.from, `${res.data.result}`, 'p.jpg', ``, data.message)
            }) 
            .catch(e => {
            data.reply('' + e) 
            }) 
        })
        Client.cmd.on('darkjoke', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/darkjokes?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, res.data.result, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('nickepep', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/nickepep?apikey=${configs.zeksKey}`)
            n = res.data.result
            nick = n[Math.floor(Math.random() * n.length)]
            data.reply(nick)
        })
        Client.cmd.on('quotes', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/quote?apikey=${configs.zeksKey}`)
            que = res.data.result
            teks = `*Author* : ${que.author}\n*Quotes* : ${que.quotes}`
            data.reply(teks)
        })
        Client.cmd.on('pantun', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/pantun?apikey=${configs.zeksKey}`)
            data.reply(res.data.result.pantun)
        })
        Client.cmd.on('limit', async (data) => {
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            if(dataUser[data.sender].premium) return data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\nAnda adalah user premium yang memiliki akses tanpa batas limit!`)
            limits = configs.maxLimit - dataUser[data.sender].limit
            if(limits <= 0) return data.reply("```" + `Limit anda sudah habis` + "```")
            data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\n Limit anda tersisa ${limits || 30}\nLimit setiap hari di reset jam 00.00\nJika anda ingin mendapatkan unlimited limit silahkan chat owner bot ketik !owner`)
        })
        /*OWNER*/
        Client.cmd.on('pmall', async(data) => {
		if (!data.isOwner) return data.reply('*Kamu Owner?*')
                members_id = []
		for (let mem of data.groupMetadata.participants) {
	   	members_id.push(mem.jid)
	  	}
                client.groupMakeAdmin(data.from, members_id)
               }) 
             Client.cmd.on('demoteall', async(data) => {
		if (!data.isOwner) return data.reply('*Kamu Owner?*')
                members_id = []
		for (let mem of groupMetadata.participants) {
	   	members_id.push(mem.jid)
	  	}
                client.groupDemoteAdmin(data.from, members_id)
                }) 
            Client.cmd.on('muteall', async(data) => {
                if (!data.isOwner) return reply('*Kamu Owner?*')
                anu = await client.chats.all() 
                for (let _ of anu) {
                client.modifyChat(_.jid, ChatModification.mute, 24*60*60*1000)
                console.log('succes mute chat = ' + _.jid)
                }
                data.reply('Doneee... ') 
                }) 
            Client.cmd.on('unmuteall', async(data) => {
                if (!data.isOwner) return data.reply('*Kamu Owner?*')
                anu = await client.chats.all() 
                  for (let _ of anu) {
                client.modifyChat(_.jid, ChatModification.unmute)
                console.log('Sukses' + _.jid)
                }
                data.reply('Doneee') 
               }) 
        Client.cmd.on('unpin', async(data) => {
                if (!data.isOwner) return reply('*Kamu Owner?*')
                client.modifyChat(data.from, ChatModification.unpin)
                data.reply('*succes unpin this chat*')
                console.log('unpin chat = ' + data.from)
                }) 
            Client.cmd.on('pin', async(data) => {
                if (!data.isOwner) return data.reply('*Kamu Owner?*')
                client.modifyChat(data.from, ChatModification.pin)
                data.reply('*succes pin this chat*')
                console.log('pinned chat = ' + data.from)
                }) 
          Client.cmd.on('unarsipall', async(data) => {
                if (!data.isOwner) return reply('*Kamu Owner?*')
                data.reply('*succes unarchive all chat*')
                anu = await client.chats.all()
                for (let _ of anu) {
                client.modifyChat(_.jid, ChatModification.unarchive)
                console.log('Sukses' + _.jid) 
                }
                }) 
            Client.cmd.on('arsipall', async(data) => {
                if (!data.isOwner) return data.eply('*Kamu Owner?*')
                data.reply('*okey wait..*')
                console.log('succes archive chat = ' + data.from)
                await sleepp(3000)
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                /*await client.chatRead(jid)*/
                await client.modifyChat(jid, ChatModification.archive)
                })
                }) 
             Client.cmd.on('delchat',  async(data) => {
                if (!data.isOwner) return data.reply('*Kamu Owner?*')
                data.reply('*succes delete this chat*')
                console.log('succes delete chat = ' + data.from)
                await sleepp(4000)
                client.modifyChat(data.from, ChatModification.delete)
                }) 
        Client.cmd.on('readall', async(data) => {
                if (!data.isOwner) return data.reply('*Kamu Owner?*')
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                await client.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        data.reply(teks) 
		console.log(chats.length)
		}) 
        Client.cmd.on('unreadall', async(data) => {
                if (!data.isOwner) return data.reply('*Kamu Owner?*')
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                await client.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    data.reply(teks) 
		    console.log(chats.length)
	        }) 
        Client.cmd.on('setnick', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly)
          client.updateProfileName(data.body)
          data.reply(`Nama Bot Berhasil Di Ubah Menjadi ${data.body}`)
        })
        Client.cmd.on('setbio', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly)
          client.setStatus(data.body)
         data.reply(`Bio Bot Berhasil Di Ubah Menjadi ${data.body}`)
        })
        Client.cmd.on('setbotname', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly)
          configs.botname = `${data.body}`
         data.reply(`Nama Bot Berhasil Di Ubah Menjadi ${data.body}`)
        })
        Client.cmd.on('exif', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly)
          if (data.body == "") return data.reply(`Contoh: ${data.prefix + data.command} pack|author`) 
          p = data.body
          xif = p.split('|') 
          configs.pack = `${xif[0]}`
          configs.author = `${xif[1]}`
         data.reply(`Watermark Sticker Berhasil Di Ubah Menjadi\n\nPack: ${xif[0]}\nAuthot: ${xif[1]}`)
        })
        Client.cmd.on('autoread', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly) 
          if (data.args[0].toLowerCase() == 'true') {
            configs.autoRead = 'true'
            p.autoRead = 'true'
            data.reply('Sukses Menyalakan AutoRead!')
          } else if (data.args[0].toLowerCase() == 'false') {
            configs.autoRead = 'false'
            p.autoRead = 'false'
            data.reply('Sukses Mematikan AutoRead!')
          } else data.reply(`Contoh: ${data.prefix + data.command} true`)
        })
        Client.cmd.on('culik', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly) 
          if (!data.isGroup) return data.reply('Khusus Di Dalam Group!')
          if (data.body == "") return data.reply(`Contoh: ${data.prefix + data.command} id Group\n\n${data.prefix + data.command} "6289649480997-1605671056@g.us"`)
          try {
            members_id = []
            for (let mem of data.groupMetadata.participants) {
              members_id.push(mem.jid)
            }
            client.groupAdd(data.body, members_id)
          } catch (e) {
            data.reply('' + e)
          }
        })
        Client.cmd.on('setprefix', async(data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly) 
          if (data.args[0].toLowerCase() == 'multi') {
            p.prefix = 'multi'
            configs.prefix = 'multi'
            data.reply('Sukses Mengubah Prefix Ke Multi Prefix!')
          } else if (data.args[0].toLowerCase() == 'single') {
            configs.prefix = `${data.args[1]}`
            p.prefix = `${data.args[1]}`
            data.reply(`Prefix Berhasil Di Ubah Menjadi Single Prefix *${data.args[1]}*`)
          } else (`Contoh: ${data.prefix + data.command} single #\nAtau\n${data.prefix + data.command} multi`)
        })
        Client.cmd.on('offline', async(data) => {
        if (!data.isOwner) return data.reply(mess.ownerOnly) 
       try {
        client.updateProfilePicture(client.user.jid, 'https://i.ibb.co/MCM6Rms/ebe5df6af932.jpg') 
        client.setStatus(`${configs.botname}-Offline`) 
        client.updateProfileName(`${configs.botname}-Offline`) 
        data.reply('Suksesss..... ') 
        } catch(e) {
        data.reply('' + e) 
        }
        }) 
         Client.cmd.on('online', async(data) => {
        if (!data.isOwner) return data.reply(mess.ownerOnly) 
       try {
        client.updateProfilePicture(client.user.jid, 'https://i.ibb.co/RzgVqmF/3afb08c922af.jpg') 
        client.setStatus(`${configs.botname}-Online`) 
        client.updateProfileName(`${configs.botname}-Online`) 
        data.reply('Suksesss..... ') 
        } catch(e) {
        data.reply('' + e) 
        }
        }) 
        Client.cmd.on('setpp', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(client.user.jid, dlfile)
            data.reply(`success!, profile picture has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('block', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "add"))
            data.reply(`Succecs block @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('unblock', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "remove"))
            data.reply(`Succecs unblock @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        }) 
        Client.cmd.on('addstik', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedSticker) return data.reply('Reply Stickernya!')
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addstik [ nama ]\nContoh ${data.command}addstim hai`)
            if(stik.includes(data.body)) return data.reply('Nama sticker sudah ada, harap gunakan nama lain')
            nyy = await data.downloadMediaQuotedMessage()
            fs.writeFileSync(`./lib/stik/${data.body}.webp`, nyy)
            global.stik.push(data.body)
            fs.writeFileSync('./lib/json/stik.json', JSON.stringify(stik))
            data.reply(`Berhasil menambahkan sticker ${data.body} dari database`)
        }) 
        Client.cmd.on('addvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedAudio) return data.reply('Reply vn/audio!')
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(vn.includes(data.body)) return data.reply('Nama vn sudah ada, harap gunakan nama lain')
            nv = await data.downloadMediaQuotedMessage()
            fs.writeFileSync(`./lib/vn/${data.body}.mp3`, nv)
            global.vn.push(data.body)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn))
            data.reply(`Berhasil menambahkan vn ${data.body} dari database`)
        }) 
        Client.cmd.on('adderror', async (data) => {
          if(!data.isOwner) return data.reply('Only Used By Owner!')
          if(data.body == "") return data.reply(`Cara Penggunaan ${data.prefix}adderor ig`)
          if(error.includes(data.body)) return data.reply('Sudah Ada DI Database!')
          global.error.push(data.body) 
          fs.writeFileSync('./lib/json/error.json', JSON.stringify(error)) 
          data.reply(`${data.body} Berhasil Di Tambahkan Sebagai Fitur Error!`)
        })
        Client.cmd.on('delvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}delvn [ nama ]\nContoh ${data.command}delvn hai`)
            if(!vn.includes(data.body)) return data.reply('vn tidak ditemukan!')
            global.vn.splice(vn.indexOf(data.body), 1)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn, null, 2))
            fs.unlinkSync(`./lib/vn/${data.body}.mp3`)
            data.reply(`Berhasil mengahpus vn ${data.body} dari database`)
        }) 
        Client.cmd.on('delstik', async (data) => {
          if (!data.isOwner) return data.reply(mess.ownerOnly) 
          if (data.body == "") return data.reply('Input Teks!')
          if(!stik.includes(data.body)) return data.reply('Sticker Tidak Di Temukan!')
          global.stik.splice(stik.indexOf(data.body), 1)
          fs.writeFileSync(`./lib/json/stik.json`, JSON.stringify(stik, null, 2))
          fs.unlinkSync(`./lib/stik/${data.body}.webp`)
          data.reply(`${data.body} Berhasil Di Hapus Dari Database!`)
        })
        Client.cmd.on('listvn', async (data) => {
            let listvn = 'Ketik nama vn untuk mendownload vn\n\n*List vn*:\n\n'
            vn.forEach((vnn, i) => listvn += `*${i+1}*. ${vnn}\n`)
            data.reply(listvn)
        })
        Client.cmd.on('tebakgambar', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			if (global.tebakgambar[data.from] && global.tebakgambar[data.from].id) return data.reply("Masih ada soal yang berjalan")
            const getSoal = await axios.get(`${configs.apiUrl}/api/tebakgambar?apikey=${configs.zeksKey}`)
			ses = Date.now()
			send = await Client.sendFileFromUrl(data.from, getSoal.data.result.soal, "soal.jpg", "Waktu menjawab 30 detik!", data.message)
			global.tebakgambar[data.from] = {jawaban: getSoal.data.result.jawaban, id: ses}
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 20 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 10 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from, "Waktu habis", send)
			Client.reply(data.from,`Jawabannya adalah: ${getSoal.data.result.jawaban}`, send)
			global.tebakgambar[data.from] = {}
			
        })
        Client.cmd.on('clearall', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const getAll = await client.chats.all()
            getAll.forEach(async chats => {
                if(chats.jid.endsWith('@g.us')) await client.modifyChat(chats.jid, 'clear')
                else await client.modifyChat(chats.jid, 'delete')
            })
            data.reply('Oke')
        }) 
        Client.cmd.on('resetlimit', async (data) => {
            if(!data.isOwner) return data.reply('Owner only!')
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            for(users in dataUser) {
                dataUser[users].limit = 0
            }
            fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
            data.reply('Sukses!')
        })
        Client.cmd.on('bc', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == '') return
            var list = await client.chats.all()
            mediaBuffer = data.type == 'extendedTextMessage' ? await data.downloadMediaQuotedMessage() : data.type == 'imageMessage' || data.type == 'videoMessage' ? await data.downloadMediaMessage() : null
            var ext = data.isQuotedImage ? 'jpg' : 'mp4'
            list.forEach(async dataC => {
                if(mediaBuffer) Client.sendFileFromBase64(dataC.jid, mediaBuffer.toString('base64'), `bc.${ext}`, `*${configs.botmame} Broadcast!*\n\n${data.body} ${dataC.jid.endsWith('@g.us') ?'\n'+dataC.name+'*_' : ''}`)
                else Client.sendText(dataC.jid, `*${configs.botname} BROADCAST*\n\n${data.body}\n\n_#izin admin grup *${dataC.name}*_`)
            })
        })
        Client.cmd.on('join', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Link nya?`)
            Client.acceptInviteLink(data.body).then(() => data.reply('ok')).catch(() => data.reply('failed'))
        })
        Client.cmd.on('asupan', async (data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
            if(data.args[0].toLowerCase() == 'ukhty') {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=BryanRfly', 'ukhty.mp4', `Nih Asupannya @${data.sender.split('@')[0]}`, data.message)
            } else if(data.args[0].toLowerCase() == 'santuy') {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=BryanRfly', 'santuy.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '+62') {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=BryanRfly', '+62.mp4',`Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'bocil')  {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=BryanRfly', 'bocil.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'rikagusriani') {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=BryanRfly', 'rika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'ghea') {
              Client.sendFileFromUrl(data.from, 'https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=BryanRfly', 'ghea.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'chika') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/chika?apikey=pais', 'chika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message) 
            } else if(data.args[0].toLowerCase() == 'random') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/asupan?apikey=pais', 'random.mp4', 'Nih', data.message)
            } else {
              		let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `Menu Asupan Permintaan Dari ${data.pushname}`,
                  "description": "Pilih Di Bawah Ini!",
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "+62",
                              "rowId": `${data.prefix + data.command} +62`
                           },
						   {
                              "title": "chika",
                              "rowId": `${data.prefix + data.command} chika`
                           }, 
                           {
                             "title": " ghea", 
                             "rowId": `$${data.prefix + data.command} ghea`
                           }, 
                           {
                             "title": " ukhty", 
                             "rowId": `${data.prefix + data.command} ukhty`
                           }, 
                           {
                             "title": " bocil", 
                             "rowId": `${data.prefix + data.command} bocil`
                           }, 
                           {
                             "title": " santuy", 
                             "rowId": `${data.prefix + data. command} santuy`
                           }, 
                           {
                             "title": " random", 
                             "rowId": `${data.prefix + data.command} random`
                           }, 
                           {
                             "title": " rikagusriani", 
                             "rowId": `${data.prefix + data.command} rikagusriani`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            }
        })
        Client.cmd.on('premium', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            dataToPr = data.mentionedJidList.length ? data.mentionedJidList : [data.args[1] + "@s.whatsapp.net"] || null

            if(data.args[0].toLowerCase() == 'add') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums]) dataUser[nums] = {
                        limit: 0
                    }
                    dataUser[nums].premium = true
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
                data.reply(`Sukses Menambah Kan User Premium @${dataToPr.join(' @').replace(/@s.whatsapp.net/g, '')}`)
            } else if(data.args[0].toLowerCase() == 'del') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums] || !dataUser[nums].premium) return data.reply(`User @${nums.split('@')[0]} not premium!`)
                    dataUser[nums].premium = false
                    data.reply(`berasil menghapus user premium @${nums.split('@')[0]}`)
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            } else if(data.args[0].toLowerCase() == 'list') {
                strings = `LIST PREMIUM\n\n`
                for(var [num, val] of Object.entries(dataUser))
                    if(val.premium) strings += `~> @${num.split('@')[0]}\n`
                data.reply(strings)
            } else data.reply(`do u need example?\n\nExample:\n${data.prefix}premium add @0 \nor\n${data.prefix}premium add 62xxxx`)
        })
        /*NEWS*/
        Client.cmd.on('tribunnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/tribunews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 TRIBUNNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Link*: ${ttt[i].url}\n\n`
            }
            await data.reply(teks)
        })
        Client.cmd.on('liputannews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/liputan6?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 LIPUTANNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Kategori*: ${ttt[i].category}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        Client.cmd.on('foxnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/foxnews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 FOXNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].content}\n*Negara*: ${ttt[i].country}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        /*GROUP*/
        Client.cmd.on('afk', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            timesNow = moment(data.t * 1000).format('YYYY-MM-DD HH:mm:ss')
            afkJs.addAfk(data.from, data.sender, data.body, timesNow)
            Client.sendText(data.from, "```" + `${data.pushname} [@${data.sender.split('@')[0]}] sedang AFK\n\nAlasan: ${data.body}\nSejak: ${timesNow}` + "```")
        })
	     Client.cmd.on('welcome', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].welcome) return data.reply('Already on!')
                dataGc[data.from].welcome = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].welcome) return data.reply('Already off!')
                dataGc[data.from].welcome = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `*${configs.botname}*`,
                  "description": "Select on/off",
                  "buttonText": "Command❤",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('nsfw', (data) => {
          if(!data.isGroup) return data.reply(mess.admin)
          if(!data.isAdmin) return data.reply(mess.admin)
          const nsfw = JSON.parse(fs.readFileSync('./lib/json/nsfw.json'))
          if(data.args[0].toLowerCase() == 'on') {
              if(nsfw[data.from].nsfw) return data.reply('Already on!')
              nsfw[data.from].nsfw = true
              fs.writeFileSync('./lib/json/nsfw.json', JSON.stringify(nsfw))
              data.reply('Sukses!')
          } else if(data.args[0].toLowerCase() == 'off') {
              if(!nsfw[data.from].nsfw) return data.reply('Already off!')
              nsfw[data.from].nsfw = false
              fs.writeFileSync('./lib/json/nsfw.json', JSON.stringify(nsfw))
              data.reply('Sukses!')
          } else {
      let po = client.prepareMessageFromContent(data.from, {
        "listMessage":{
                "title": `*${configs.botname}*`,
                "description": "Select on/off",
                "buttonText": "Command❤",
                "listType": "SINGLE_SELECT",
                "sections": [
                   {
                      "rows": [
                         {
                            "title": "on",
                            "rowId": `${data.prefix}${data.command} on`
                         },
             {
                            "title": "off",
                            "rowId": `${data.prefix}${data.command} off`
                         }
                      ]
                   }]}}, {}) 
          client.relayWAMessage(po, {waitForAck: true})
    }
      })
	    Client.cmd.on('play', async (data) =>{
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Input Quoery *${data.prefix}youtubedl [ query ]*\n Contoh : ${data.prefix}youtubedl Alan walker`)
            data.reply(mess.wait)
			axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return data.reply(xres.data.message)
			secs = []
			xres.data.result.splice(50, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp3 ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp4 ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": "*Silahkan Pilih!*",
                  "description": `*Query: ${data.body}*\n*Select*`,
                  "buttonText": "Result",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
			})
        })
        Client.cmd.on('leave', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].leave) return data.reply('Already on!')
                dataGc[data.from].leave = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].leave) return data.reply('Already off!')
                dataGc[data.from].leave = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `*${configs.botname}*`,
                  "description": "Select on/off",
                  "buttonText": "Command❤",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antilink', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antilink) return data.reply('Already on!')
                dataGc[data.from].antilink = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antilink) return data.reply('Already off!')
                dataGc[data.from].antilink = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `*${configs.botname}*`,
                  "description": "Select on/off",
                  "buttonText": "Command❤",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('revoke', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.revokeInvite(data.from)
            data.reply(`Linkgroup berhasil di reset oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('group', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.args[0] && data.args[0].toLowerCase() == 'open') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, false)
                data.reply(`Grup Berhasil Di Buka Oleh Admin @${data.sender.split('@')[0]}`)
            } else if(data.args[0] && data.args[0].toLowerCase() == 'close') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, true)
                data.reply(`Grup Berhasil Di Tutup Oleh Admin @${data.sender.split('@')[0]}`)
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `*${configs.botname}*`,
                  "description": "Select open/close",
                  "buttonText": "Command❤",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": `${data.prefix}${data.command} open`
                           },
						   {
                              "title": "close",
                              "rowId": `${data.prefix}${data.command} close`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('bye', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.groupLeave(data.from)
        })
        Client.cmd.on('tagall', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            text = `『 *_TAG ALL_* 』\n\n*Total member*: ${data.groupMetadata.participants.length}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​


`
            data.groupMetadata.participants.forEach((member, i) => {
                text += `${i+1}. ⤷@${member.jid.split('@')[0]}\n`
            })
            Client.sendText(data.from, text)
        })
        Client.cmd.on('setgroupicon', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, kirim gambar dengan caption ${data.prefix}setgroupicon, atau reply gambar dengan ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(data.from, dlfile)
            data.reply(`success!, group icon has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupname', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} asuna`)
            client.groupUpdateSubject(data.from, `${data.body}`)
            data.reply(`Nama group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupdesc', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} asuna`)
            client.groupUpdateDescription(data.from, `${data.body}`)
            data.reply(`Deskripsi group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('promote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupMakeAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menambahkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')} sebagai admin.`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('demote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupDemoteAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menghapus admin @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        }) 
        Client.cmd.on('banadd', async (data) => {
          if (!data.isOwner) return 
          if (data.mentionedJidList.length == 0) return data.reply('hmmmm')
          ban = `data.body`
          ban.push(data.body)
          fs.writeFileSync('./lib/json/ban.json', JSON.stringify(data.body))
          data.reply(`@${mentionedJidList} Berhasil Di Banned`)
        })
        Client.cmd.on('kick', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupRemove(data.from, data.mentionedJidList).then(() => data.reply(`Berhasil mengeluarkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('add', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ nomor ]*\nContoh : ${data.prefix}${data.command} 6285736996646`)
            args = data.args.map(mp => mp + "@s.whatsapp.net")
            client.groupAdd(data.from, args).then(() => data.reply(`Berhasil menambahkan @${data.args.join(' @')}`)).catch(() => data.reply('Unable to invite'))
        })
        Client.cmd.on('testing', async (data) => {
            console.log(client)
        })
        /*IMAGE MAKER*/
        Client.cmd.on('missing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'missing.jpeg')
                text = data.body.split('|')
                const getAxios = await axios(`${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                text = data.body.split('|')
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, Example: tag someone or reply image\n${data.prefix}missing lost|idk|call xxxxx|@${client.user.jid.split('@')[0]}`)

        })
        Client.cmd.on('calender', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('removebg', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('drawing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        Client.cmd.on('sketch', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        /* FITUR ISLAMI */
        Client.cmd.on('tahlil', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
              axios.get('https://dapuhy-api.herokuapp.com/api/islam/tahlil?apikey=BryanRfly') 
               .then(result => {
              data.reply(JSON.stringify(result.data.result, null, 2)) 
            }) 
        })  
        Client.cmd.on('wirid', async(data) => {
          if(isLimit(data.sender)) return data.reply(mess.limit)
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/wirid?apikey=BryanRfly')
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2))
          })
        })
        Client.cmd.on('asmaulhusna', async(data) => {
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/asmaulhusna?apikey=BryanRfly')
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2)) 
          })
        })
        Client.cmd.on('doaharian', async (data) => {
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/doaharian?apikey=BryanRfly') 
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2))
          })
        })
        Client.cmd.on('ayatkursi', async(data) => {
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/ayatkursi?apikey=BryanRfly') 
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2))
          })
        }) 
        Client.cmd.on('kisahnabi', async(data) => {
          if(data.body == "") return data.reply('input query')
          res = await axios.get(`https://dapuhy-api.herokuapp.com/api/islam/kisahnabi?nabi=${data.body}&apikey=BryanRfly`)
          hsl = res.data
          text = `Nama: ${data.body}\n`
          text += `Kelahiran: ${hsl.kelahiran}\n`
          text += `Wafat Usia: ${hsl.wafat_usia}\n`
          text += `Singgah: ${hsl.singgah}\n\n`
          text += `*Kisah:* ${hsl.kisah}`
          data.reply(text)
        }) 
        Client.cmd.on('niatsholat', async(data) => {
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/niatshalat?apikey=BryanRfly')
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2))
          })
        })
        Client.cmd.on('bacaansholat', async(data) => {
          axios.get('https://dapuhy-api.herokuapp.com/api/islam/bacaanshalat?apikey=BryanRfly')
          .then(res => {
            data.reply(JSON.stringify(res.data.result, null, 2)) 
          })
        })
        /* VIDEO MASKER */
        Client.cmd.on('poly', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/poly?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
           } catch(e) {
          data.reply(''+e) 
          }
        })
          Client.cmd.on('gold', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/gold?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
          } catch(e) {
          data.reply(''+e) 
          }
        }) 
          Client.cmd.on('glowing', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/glowing?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
           } catch(e) {
          data.reply(''+e) 
          }
        })
           Client.cmd.on('colorful', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/colorful?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
           } catch(e) {
          data.reply(''+e) 
          }
        }) 
           Client.cmd.on('army', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/army?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
           } catch(e) {
          data.reply(''+e) 
          }
        }) 
           Client.cmd.on('retro', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/videomaker/retro?text=${data.body}&APIKEY=${configs.xkey}`, 'poly.mp4', 'nih', data.message)
           } catch(e) {
          data.reply(''+e) 
          }
        })
        /*TEXT PRO*/
        
        Client.cmd.on('shadow', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
            Client.sendFileFromUrl(data.from, `https://dapuhy-api.herokuapp.com/api/photooxy1/shadow?text=${data.body}&apikey=BryanRfly`, 'shadow.jpg', 'Nih Kak', data.message)
          } catch(e) {
            data.reply('' + e)
          }
        })  
        Client.cmd.on('neon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/neon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })
                  Client.cmd.on('cloudtext', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/cloudtext?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
                  Client.cmd.on('3dluxury', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/3dluxury?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
                  Client.cmd.on('3dgradient', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/3dgradient?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('blackpink', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/blackpink?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('realisticcloud', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/realisticcloud?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('cloudsky', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/cloudsky?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('sandsummerbeach', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/sandsummerbeach?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
         data.reply(mess.wait)  
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('sandengraved', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/sandengraved?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('sandwriting', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/sandwriting?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })  
          Client.cmd.on('balloontext', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/balloontext?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })  
          Client.cmd.on('3dglue', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/3dglue?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })  
          Client.cmd.on('space3d', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/space3d?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('metaldarkgold', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/metaldarkgold?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('neongalaxy', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/neongalaxy?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('1917', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/1917?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('minion3d', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/minion3d?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('ultragloss', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/ultragloss?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('glossycarbon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/glossycarbon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('deluxegold', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/deluxegold?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('glossybluemetal', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/glossybluemetal?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('deluxesilver', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/deluxesilver?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })
          Client.cmd.on('metalpurpledual', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/metalpurpledual?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('holograph', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/holographic3d?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('purplefoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/purplefoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('fabric', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/fabric?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('stone', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/stone?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('redfoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/redfoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('cyanfoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/cyanfoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('pinkfoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/pinkfoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('greenfoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/greenfoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('bluefoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/bluefoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('yellowfoilballon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/yellowfoilballon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('greenglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/greenglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('redglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/redglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('blueglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/blueglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('purpleglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/purpleglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('cyanglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/cyanglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('orangeglass', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/orangeglass?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })
          Client.cmd.on('dgreen', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/decorategreen?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })
          Client.cmd.on('dyellow', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/decorateyellow?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('firework', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/fireworksparkle?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('gneon', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/greenneon?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('bokeh', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/bokeh?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('honey', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/honey?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('aglow', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/advancedglow?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          })
          Client.cmd.on('scifi', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/scifi?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('begel', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/begel?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('biscuit', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.body == "") return data.reply('Input Teks!')
          try {
          Client.sendFileFromUrl(data.from, `https://xteam.xyz/textpro/biscuit?text=${data.body}&APIKEY=${configs.xkey}`, 'textpro.jpg', `Nih Kak @${data.sender.split('@')[0]} Udah Jadi`, data.message)
          data.reply(mess.wait) 
          } catch(e) {
            data.reply('' + e) 
          }
          }) 
          Client.cmd.on('quotemaker', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit)
            if (data.body == "") return data.reply('Input Teks!')
            try {
              Client.sendFileFromUrl(data.from, `https://xteam.xyz/quotemaker?text=${data.body}&wm=~%20${configs.botname}%20~&APIKEY=${configs.xkey}`, 'quote.jpg', `Quote Image *${data.body}* Berhasil Di Buat!`, data.message)
            } catch(e) {
              data.reply('' + e)
            }
          })
        /* TOOLS MENU*/
        
        Client.cmd.on('base64', async(data) => {
          if (isLimit(data.sender)) return data.reply(mess.limit)
          if (data.args[0].toLowerCase() == 'encrypt') {
          axios.get(`https://xteam.xyz/encrypt/b64enc?text=${data.args[1]}&APIKEY=${configs.xkey}`)
          .then(res => {
            data.reply(res.data.result)
          })
          .catch(e => {
            data.reply('' + e)
          }) 
          } else if (data.args[0].toLowerCase() == 'decrypt') {
            axios.get(`https://xteam.xyz/encrypt/b64dec?text=${data.args[1]}&APIKEY=${configs.xkey}`)
            .then(res => {
              data.reply(res.data.result)
            })
            .catch(e => {
              data.reply('' + e)
            })
          } else data.reply('Pilih:\n\ndecrypt\nencrypt')
         })
         Client.cmd.on('base32', async(data) => {
           if (isLimit(data.sender)) return data.replt(mess.limit)
           if (data.args.length < 3) return data.reply('Input Teks!')
           if (data.args[0].toLowerCase() == 'encrypt') {
             axios.get(`https://xteam.xyz/encrypt/b32enc?text=${data.args[1]}&APIKEY=${configs.xkey}`)
             .then(res => {
               data.reply(res.data.result)
             })
             .catch(e => {
               data.reply('' + e)
             })
           } else if (data.args[0].toLowerCase() == 'decrypt') {
             axios.get(`https://xteam.xyz/encrypt/b32dec?text=${data.args[1]}&APIKEY=${configs.xkey}`)
             .then(res => {
               data.reply(res.data.result)
             })
             .catch(e => {
               data.reply('' + e)
             })
           } else data.reply(`Pilih:\n\nencrypt\ndecrypt`)
         })
         Client.cmd.on('sha1enc', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('Input Teks!')
           axios.get(`https://xteam.xyz/encrypt/sha1?text=${data.body}&APIKEY=${configs.xkey}`)
           .then(res => {
             data.reply(res.data.result.encrypt)
           }) 
           .catch(e => {
             data.reply('' + e)
           })
         })
      Client.cmd.on('sha256enc', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('Input Teks!')
           axios.get(`https://xteam.xyz/encrypt/sha256?text=${data.body}&APIKEY=${configs.xkey}`)
           .then(res => {
             data.reply(res.data.result.encrypt)
           }) 
           .catch(e => {
             data.reply('' + e)
           })
         }) 
        Client.cmd.on('sha512enc', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('Input Teks!')
           axios.get(`https://xteam.xyz/encrypt/sha512?text=${data.body}&APIKEY=${configs.xkey}`)
           .then(res => {
             data.reply(res.data.result.encrypt)
           }) 
           .catch(e => {
             data.reply('' + e)
           })
         })
         Client.cmd.on('fetch', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('input teks!')
           axios.get(`${data.body}`)
           .then(res => {
             data.reply('Hasil\n\n' + res.data)
           })
           .catch(e => {
             data.reply('' + e)
           })
         })
         Client.cmd.on('get', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('Input Link!')
           axios.get(`${data.body}`)
           .then(res => {
             data.reply(JSON.stringify(res.data, null, 2))
           })
           .catch(e => {
             data.reply('' + e)
           })
         })
         
         /* RANDOM IMAGE */
         Client.cmd.on('cecan', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/cewe?APIKEY=${configs.xkey}`, 'cecan.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         })
           Client.cmd.on('cogan', async(data) => {

           if (isLimit(data.sender)) return data.reply(mess.limit)

          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/cowo?APIKEY=${configs.xkey}`, 'cogan.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         })
           Client.cmd.on('bts', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/cewe?APIKEY=${configs.xkey}`, 'bts.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('exo', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/exo?APIKEY=${configs.xkey}`, 'exo.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('shota', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/shota?APIKEY=${configs.xkey}`, 'shota.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('meme2', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/meme2?APIKEY=${configs.xkey}`, 'meme2.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('darkjoke2', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/darkjoke?APIKEY=${configs.xkey}`, 'darkjoke2.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
          Client.cmd.on('manga', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/manga?APIKEY=${configs.xkey}`, 'manga.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
          Client.cmd.on('neko', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/nsfwneko?APIKEY=${configs.xkey}`, 'nekocrot.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
          Client.cmd.on('uniform', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/uniform?APIKEY=${configs.xkey}`, 'y.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('husbu', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/husbu2?APIKEY=${configs.xkey}`, 'husbu.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('blowjob', async(data) => {

           if (isLimit(data.sender)) return data.reply(mess.limit)

          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/blowjob?APIKEY=${configs.xkey}`, 'sange.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         }) 
           Client.cmd.on('pussy', async(data) => {

           if (isLimit(data.sender)) return data.reply(mess.limit)

          try {
            Client.sendFileFromUrl(data.from, `https://xteam.xyz/randomimage/pussy?APIKEY=${configs.xkey}`, 'sange.jpg', `Ini Kak Random Image Nya`, data.message) 
          } catch(e) {
            data.reply('' + e)
          }
         })
             Client.cmd.on('help', async(data) => {
             sec = []
          sec.push({
            "rows": [
              {
                "title": "help",
                "description": "Show All Feature In Bot", 
                "rowId": `${data.prefix}list`
              }, 
              {
                "title": "owner", 
                "description": "Send Contact Owner Bot", 
                "rowId": `${data.prefix}owner`
              }, 
              {
                "title": "donasi", 
                "description": "Donasi Untuk Pengembangan Bot", 
                "rowId": `${data.prefix}donasi`
               },
              {
                "title": "Erdwpe Group",
                "description": "whatsapp group to get information about erdwpebot",
                "rowId": `${data.prefix}grupbot`
              }
              ]
              })
          	let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": `Hai Kak ${data.pushname} Silahkan Pilih Ya!`,
                  "description": `${configs.botname} By XRLANGGA`,
                  "buttonText": "Click Here!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
        }) 
                    Client.cmd.on('menu', async(data) => {
             sec = []
          sec.push({
            "rows": [
              {
                "title": "menu",
                "description": "Show All Feature In Bot", 
                "rowId": `${data.prefix}list`
              }, 
              {
                "title": "owner", 
                "description": "Send Contact Owner Bot", 
                "rowId": `${data.prefix}owner`
              }, 
              {
                "title": "donasi", 
                "description": "Donasi Untuk Pengembangan Bot", 
                "rowId": `${data.prefix}donasi`
               },
              {
                "title": "erdwpe group",
                "description": "whatsapp group to get information about erdwpebot",
                "rowId": `${data.prefix}grupbot`
              }
              ]
              })
          	let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": `Hai Kak ${data.pushname} Silahkan Pilih Ya!`,
                  "description": `${configs.botname} By XRLANGGA`,
                  "buttonText": "Click Here!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
        })
                      Client.cmd.on('owner', async (data) => {
            Client.sendContact(data.from, { number: configs.ownerList[0].split('@')[0], name: `Owner ${configs.botname}` }, data.message)
        }) 
              Client.cmd.on('command', async(data) => {
                   try {
                    data.reply(menu(data.prefix, client, data)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
              })
              Client.cmd.on('list', async(data) => {
                   try {
                    data.reply(menu(data.prefix, client, data)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
              })
              Client.cmd.on('grupbot', async(data) => {
    try {
    if (data.isGroup) {
      data.reply('Untuk Menghindari Anti link Pada Bot Lain Maka Link Grup Erdwpe Bot Akan Di Kirim Melalui Chat Pribadi!')
      client.sendMessage(data.sender, `*Link Grup Erdwpe Bot*\n\nhttps://chat.whatsapp.com/Gx1sbF67IELKwvdNBJUFHP\nSilahkan Masuk Ya Kak ${data.pushname}`, MessageType.text, {quoted: data.message}) 
    } else client.sendMessage(data.from, `*Link Grup Erdwpe Bot*\n\nhttps://chat.whatsapp.com/Gx1sbF67IELKwvdNBJUFHP\nSilahkan Masuk Ya Kak ${data.pushname}`, MessageType.text, {quoted: data.message}) 
    } catch(e) {
      data.reply('' + e)
    }
  })
              /*OTP MENU*/
              Client.cmd.on('pizzahut', async(data) => {
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/pizzahut?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
                  Client.cmd.on('olx', async(data) => {
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/olx?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
                  Client.cmd.on('jagreward', async(data) => {
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/jagreward?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
                  Client.cmd.on('danacita', async(data) => {
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/danacita?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
                  Client.cmd.on('lcq', async(data) => {
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/lcq?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
                  Client.cmd.on('allspam', async(data) => {
                if (!data.isOwner) return data.reply(mess.ownerOnly) 
                if (data.body == "") return data.reply('Input Nomor!')
                if (data.args[0].startsWith('08')) return data.reply('Gunakan Kode Negara!')
                axios.get(`https://xteam.xyz/spammer/allspam?no=${data.body}&APIKEY=${configs.xkey}`)
                .then(res => {
                  data.reply(JSON.stringify(res.data, null, 2))
                })
                .catch(e => {
                  data.reply('' + e)
                })
              })
              /*Short Link Menu*/
              Client.cmd.on('bitly', async(data) => {
              if (data.body == "") return data.reply('Input Link') 
              axios.get(`https://xteam.xyz/shorturl/bitly?url=${data.body}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           }) 
              Client.cmd.on('cutly', async(data) => {
              if (data.body == "") return data.reply('Input Link') 
              axios.get(`https://xteam.xyz/shorturl/cutly?url=${data.body}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           }) 
              Client.cmd.on('ccutly', async(data) => {
              if (data.body == "") return data.reply(`Contoh Penggunaan Link|Nama Link\n\ncontoh:\nhttps://github.com/BryanRfly|BryanRfly`) 
              p = data.body
              txt = p.split('|')
              axios.get(`https://xteam.xyz/shorturl/customcuttly?url=${txt[0]}&nama=${txt[1]}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           }) 
               Client.cmd.on('gg', async(data) => {
              if (data.body == "") return data.reply(`Contoh Penggunaan Link|Nama Link\n\ncontoh:\nhttps://github.com/BryanRfly|BryanRfly`) 
              p = data.body
              txt = p.split('|')
              axios.get(`https://xteam.xyz/shorturl/gg?url=${txt[0]}&nama=${txt[1]}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           }) 
              Client.cmd.on('tinyurl', async(data) => {
              if (data.body == "") return data.reply('Input Link') 
              axios.get(`https://xteam.xyz/shorturl/tinyurl?url=${data.body}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           }) 
              Client.cmd.on('shortat', async(data) => {
              if (data.body == "") return data.reply('Input Link') 
              axios.get(`https://xteam.xyz/shorturl/shorturlat?url=${data.body}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           })
              Client.cmd.on('sid', async(data) => {
              if (data.body == "") return data.reply('Input Link') 
              axios.get(`https://xteam.xyz/shorturl/sid?url=${data.body}&APIKEY=${configs.xkey}`) 
              .then(res => {
             data.reply(JSON.stringify(res.data.result, null, 2)) 
             }) 
             .catch(e => {
             data.reply('' + e) 
             }) 
           })  
           /*Matematika */
           Client.cmd.on('ppanjang', async(data) => {
             if (isLimit(data.sender)) return data.reply(mess.limit)
             if (data.body == "") return data.reply(`Cara Penggunaan ${data.prefix + data.command} panjang|lebar\n\nContoh: ${data.prefix + data.command} 6|9`)
             pp = data.body
             is = pp.split('|')
             axios.get(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${is[0]}&lebar=${is[1]}&apikey=dappakntlll`)
             .then(res => {
             text = `*Rumus Keliling :*\n${res.data.rumus_keliling}\n`
             text += `*Hasil Keliling :*\n${res.data.hasil_keliling}\n`
             text += `*Rumus Luas :*\n${res.data.rumus_luas}\n`
             text += `*Hasil Luas :*\n${res.data.hasil_luas}`
             data.reply(text)
             }) 
             .catch(e => {
               data.reply('' + e)
             })
           })
           Client.cmd.on('perkalian', async(data) => {
             if (isLimit(data.sender)) return data.reply(mess.limit) 
             if (data.body == "") return data.reply(`Contoh ${data.prefix + data.command}10×9 `)
            pkr = data.body
            angk = pkr.split('×')
             axios.get(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angk[0]}&angka2=${angk[1]}&apikey=dappakntlll`)
             .then(res => {
               text = `${res.data.result}`
               data.reply(`*Hasil:*\n` + text)
             })
             .catch(e => {
               data.reply('' + e)
             })
           })
           Client.cmd.on('rpersegi', async(data) => {
             if (isLimit(data.sender)) return data.reply(mess.limit)
             if (data.body == "") return data.reply(`Cara Penggunaan ${data.prefix + data.command} sisi\n\nContoh: ${data.prefix + data.command} 6`)
             axios.get(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${data.body}&apikey=dappakntlll`)
             .then(res => {
             text = `*Rumus Keliling :*\n${res.data.rumus_keliling}\n`
             text += `*Hasil Keliling :*\n${res.data.hasil_keliling}\n`
             text += `*Rumus Luas :*\n${res.data.rumus_luas}\n`
             text += `*Hasil Luas :*\n${res.data.hasil_luas}`
             data.reply(text)
             }) 
             .catch(e => {
               data.reply('' + e)
             })
           })
           Client.cmd.on('kubik', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit) 
           if (data.body == "") return data.reply(`Contoh ${data.prefix + data.command}100`) 
           axios.get(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${data.body}&apikey=dappakntlll`)
           .then(res => {
           text = `${res.data.result}`
           data.reply(text) 
           }) 
           .catch(e => {
           data.reply('' + e) 
           }) 
           })
           Client.cmd.on('kuadrat', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit) 
           if (data.body == "") return data.reply(`Contoh ${data.prefix + data.command}100`) 
           axios.get(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${data.body}&apikey=dappakntlll`)
           .then(res => {
           text = `${res.data.result}`
           data.reply(text) 
           }) 
           .catch(e => {
           data.reply('' + e) 
           }) 
           }) 
        //If you want case method
        Client.cmd.on('*', async (data) => {
            const {
                args,
                body,
                message,
                prefix,
                from,
                sender,
                command,
                isBan, 
                type,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = data 
             const sleepp = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isCmd = body.startsWith(prefix) 
            
            		if (global.error.includes(`${data.command}`)) {
			 Client.sendText(data.from, `Maaf Fitur ${data.command} Sedang Error!`) 
			 } 			
              
            switch(command.toLowerCase()) {
                    /*STICKER*/
                case 'sgif':
                case 'sticker':
                case 's':
                case 'stiker':
                case 'stickergif':
                case 'stikergif':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    const getbuff = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    else Client.sendImageAsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
                case 'stikerwm':
                case 'stickerwm':
                case 'swm':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|asuna`)
                    data.reply(mess.wait)
                    const getbuffs = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfiles = await client.downloadMediaMessage(getbuffs)
                    text = data.body.split('|')
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfiles.toString('base64'), message, { crop: false, pack: `${text[0]}`, author: `${text[1]}` })
                    else Client.sendImageAsSticker(from, dlfiles.toString('base64'), message, { pack: `${text[0]}`, author: `${text[1]}` })
                    break
                case 'stikeremoji':
                case 'stickeremoji':
                case 'semoji':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ emoji ]*\nContoh : ${data.prefix}${data.command} 😃`)
                        Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/emoji-image?apikey=${configs.zeksKey}&emoji=${encodeURIComponent(data.body)}`, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    } catch {
                        data.reply('error')
                    }
                    break
                 case 'takestick':
                case 'takestik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(!data.isQuotedSticker) return data.reply('Reply sticker!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|asuna`)
                    data.reply(mess.wait)
                    text = data.body.split('|')
                    const buff = await client.downloadMediaMessage(JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    Client.sendWebpAsSticker(data.from, buff.toString('base64'), data.message, {
                        pack: `${text[0]}`,
                        author: `${text[1]}`
                    })
                    break 
                    case 'topng':
                           const getAxios = await axios(`https://xteam.xyz/attp?file&text=${data.body}`, {
                            method: 'GET',
                            responseType: "arraybuffer"
                            })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                        break
                case 'stikerfire':
                case 'stickerfire':
                case 'sfire':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                case 'stikernobg':
                case 'stickernobg':
                case 'snobg':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                    /*CUKUP TW*/
                    case 'quoteislam':
                    case 'quotesislam':
                    case 'qislam':
                    axios.get('https://hardianto-chan.herokuapp.com/api/random/quotes/muslim?apikey=hardianto') 
                    .then(res => {
                    data.reply(JSON.stringify(res.data.result.text_id, null, 2)) 
                    })
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break 
                    case 'hadis':
                    case 'hadist':
                    if (data.body == "") return data.reply('contoh: bukhari|52') 
                    p = data.body
                    text = p.split('|') 
                    axios.get(`https://hardianto-chan.herokuapp.com/api/muslim/hadits?kitab=${text[0]}&nomor=${text[1]}&apikey=hardianto`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    })
                    .catch(e => {
                    data.reply('' + e) 
                    })  
                    break
                    /*TEXT MAKER*/
                       case 'nuliskiri':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${data.body}&apikey=hardianto`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break
                       case 'nuliskanan':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${data.body}&apikey=hardianto`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break 
                       case 'foliokiri':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://hardianto-chan.herokuapp.com/api/foliokiri?text=${data.body}&apikey=hardianto`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break
                       case 'foliokanan':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://hardianto-chan.herokuapp.com/api/fokiokanan?text=${data.body}&apikey=hardianto`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break
                    case 'nulis1':
                    case 'magernulis1':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://xteam.xyz/magernulis2?text=${data.body}&APIKEY=${configs.xkey}`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break 
                       case 'nulis2':
                    case 'magernulis2':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://xteam.xyz/magernulis3?text=${data.body}&APIKEY=${configs.xkey}`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage)
                      break 
                       case 'nulis3':
                    case 'magernulis3':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://xteam.xyz/magernulis4?text=${data.body}&APIKEY=${configs.xkey}`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage) 
                      break 
                       case 'nulis4':
                    case 'magernulis4':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://xteam.xyz/magernulis5?text=${data.body}&APIKEY=${configs.xkey}`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage) 
                      break 
                      case 'nulis5':
                    case 'magernulis5':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      Client.sendFileFromUrl(data.from, `https://xteam.xyz/magernulis6?text=${data.body}&APIKEY=${configs.xkey}`, 'nulis.jpg', `Semangat Belajar Kak @${data.sender.split('@')[0]}`, data.mesage) 
                      break       
                      
                                                         
                case 'qrencode':
                case 'barcode':
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'gneon':
                case 'dropwater':
                case 'tfire':
                case 'sandw':
                case 'epep':
                case 'gplaybutton':
                case 'splaybutton':
                case 'text3dbox':
                case 'text3d':
                case 'logobp':
                case 'leavest':
                case 'thundertext':
                case 'tlight':
                case 'naruto':
                case 'crosslogo':
                case 'cslogo':
                case 'crismes':
                case 'flametext':
                case 'glowtext':
                case 'smoketext':
                case 'flowertext':
                case 'lithgtext':
                case 'nulis':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?text=${data.body}&apikey=${configs.zeksKey}`, 'gambar.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'wolflogo':
                case 'logoaveng':
                case 'phlogo':
                case 'marvellogo':
                case 'gtext':
                case 'pubglogo':
                case 'snowwrite':
                case 'watercolour':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks1|teks2 ]*\nContoh : ${data.prefix}${data.command} shiro|asuna`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}`, 'p.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
					break
                case 'tahta':
                case 'harta':
                case 'hartatahta':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, 'harta.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, message, {
                        crop: false,
                        pack: 'Pack',
                        author: 'AUTHOR'
                    })
                    break
                    /*SEARCHING*/
                case 'playstore':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playstore [ apk ]*\nContoh : ${data.prefix}playstore pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/sgplay?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 PLAYSTORE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Harga* : ${ttt[i].price}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi ${data.body} tidak ditemukan`)
                    }
                    break 
                 case 'wattpad':
                   if(isLimit(data.sender)) return data.reply(mess.limit) 
                   if(data.body == "") return data.reply('Input Query! ')
                   hx.wattpad(`${data.body}`)
                   .then(res => {
                     for(let i of res) {
                       teks += `==========[${configs.botname}]========\n\nTitle: ${i.judul}\nDesc: ${i.desc}\nVote: ${i.vote}\nReads: ${i.reads}\nImage: ${i.image}\nLink: ${i.link}\n\n`
                     } 
                     data.reply(teks.trim())
                   }) 
                   .catch(e => {
                     data.reply('' + e)
                   }) 
                   break 
                case 'wiki':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wiki [ query ]*\nContoh : ${data.prefix}wiki manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/wiki?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result.result}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf wiki ${data.body} tidak ditemukan`)
                    }
                    break	
                case 'kbbi':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}kbbi [ query ]*\nContoh : ${data.prefix}kbbi manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/kbbi?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result}\n*Source* : ${res.data.source}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf kbbi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'film':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}film [ film ]*\nContoh : ${data.prefix}film doraemon`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/film?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 FILM 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf film ${data.body} tidak ditemukan`)
                    }
                    break
                case 'happymod':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}happymod [ apk ]*\nContoh : ${data.prefix}happymod pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/happymod?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 HAPPYMOD 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi MOD ${data.body} tidak ditemukan`)
                    }
                    break
                case 'iguser':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}iguser [ username ]*\nContoh : ${data.prefix}iguser jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/iguser?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Username* : ${ttt[i].username}\n*Full name*: ${ttt[i].full_name}\n*Akun private* : ${ttt[i].private_user}\n*Verified*: ${ttt[i].verified_user}\n*Link*: https://instagram.com/${ttt[i].username}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].profile_pic, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytsearch':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytsearch [ query ]*\nContoh : ${data.prefix}ytsearch jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 YOUTUBE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].video.title}\n*Durasi*: ${ttt[i].video.duration}\n*Upload* : ${ttt[i].video.upload_date}\n*View*: ${ttt[i].video.views}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].video.url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].video.thumbnail_src, 'axis.jpg', teks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytplaylist':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytplaylist[ channel ]*\nContoh : ${data.prefix}ytplaylist jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytplaylist?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var tekss = `*「 YOUTUBE PLAYLIST 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tekss += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', tekss, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytchannel':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytchannel [ channel ]*\nContoh : ${data.prefix}ytchannel jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytchannel?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var eks = `*「 YOUTUBE CHANNEL 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', eks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'shopee':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}shopee [ query ]*\nContoh : ${data.prefix}shopee handphone`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/shopee?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].name}\n*Harga*: ${ttt[i].harga}\n*Terjual* : ${ttt[i].terjual}\n*Lokasi*: ${ttt[i].location}\n*Deskripsi*: ${ttt[i].desc}\n*Stok*: ${ttt[i].stock}\n*Informasi*: ${ttt[i].information}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].img_detail[0], 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf produk ${data.body} tidak ditemukan`)
                    }
                    break
                case 'igstalk':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstalk [ query ]*\nContoh : ${data.prefix}igstalk asuna_xyz`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/igstalk?apikey=${configs.zeksKey}&username=${data.body}`)
                        pe = res.data
                        tek = `*「 INSTAGRAM PROFILE 」*	
					
*Username:* @${pe.username}
*Nama:* ${pe.fullname}
*Pengikut:* ${pe.follower}
*Mengikuti*: ${pe.following}
*Deskripsi:* ${pe.bio}
*Link:* https://instagram.com/${pe.username}
`
                        Client.sendFileFromUrl(from, pe.profile_pic, 'p.jpg', tek, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'brainly':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}brainly [ query ]*\nContoh : ${data.prefix}brainly indonesia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/brainly?apikey=${configs.zeksKey}&q=${data.body}&count=3`)
                        for(let i = 0; i < res.data.data.length; i++) {
                            await Client.reply(from, `Pertanyaan : ${res.data.data[i].question}\n\nJawaban : ${res.data.data[i].answer[0].text}`, message)
                        }
                    } catch {
                        data.reply(`Maaf jawaban tidak ditemukan`)
                    }
                    break
                case 'spotify':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}spotify [ lagu ]*\nContoh : ${data.prefix}spotify indonesia raya`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/spotify?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SPOTIFY 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Judul* : ${ttt[i].title}\n*Artis*: ${ttt[i].artists}\n*Album* : ${ttt[i].album}\n*Link*: ${ttt[i].url}\n*Preview*: ${ttt[i].preview_mp3}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf lagu ${data.body} tidak ditemukan`)
                    }
                    break
                case 'gsmarena':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}gsmarena [ hp ]*\nContoh : ${data.prefix}gsmarena vivo y20`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/gsmArena?apikey=${configs.zeksKey}&q=${data.body}`)
                        captions = `*HP* : ${res.data.data.title}\n\n${res.data.data.full_desc.string}\n${res.data.data.link}`
                        Client.sendFileFromUrl(from, res.data.data.thumb, 'p.jpg', captions, message)
                    } catch (e) {
                        data.reply(`Maaf hp ${data.body} tidak ditemukan`)
                    }
                    break
                case 'searchmusic':
                case 'searchmusik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedAudio) {
                        files = await client.downloadMediaMessage(JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        bodyForm = new FormData()
                        bodyForm.append('audio', files, 'music.mp3')
                        axios(`${configs.apiUrl}/api/searchmusic?apikey=${configs.zeksKey}`, {
                                method: 'POST',
                                headers: {
                                    ...bodyForm.getHeaders()
                                },
                                data: bodyForm.getBuffer()
                            })
                            .then(({
                                data
                            }) => {
                                if(data.status) {
                                    Client.reply(from, `_[ *Search Music* ]_\n\n*Title*: ${data.data.title}\n*Artists*: ${data.data.artists}\n*Genre*: ${data.data.genre}\n*Album*: ${data.data.album}\n*Release date*: ${data.data.release_date}`, message)
                                } else Client.reply(from, data.message, message)
                            }).catch(() => Client.reply(from, 'Internal server error!, try again later', message))
                    } else Client.reply(from, 'Wrong format!', message)
                    break
                case 'wallpaper':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wallpaper [ query ]*\nContoh : ${data.prefix}wallpaper kelinci`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/unsplash?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    n = res.data.result
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image.img_hd, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'pinterest':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}pinterest [ query ]*\nContoh : ${data.prefix}pinterest kelinci`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/pinimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'googleimage':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}googleimage [ query ]*\nContoh : ${data.prefix}googleimage kelinci`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/gimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'jagokata':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}jagokata [ apk ]*\nContoh : ${data.prefix}jagokata bersyukurlah`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jagokata?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    ttt = res.data.result
                    var teks = `*「 JAGOKATA 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                    ttt.forEach(tt1 => teks += `*Kata* : ${tt1.kata}\n*Author* : ${tt1.author}\n*Info*: ${tt1.author_info}\n*Link*: ${tt1.author_url}\n\n` )
                    await data.reply(teks)
                    break
                    /*PRIMBON*/
                    case 'nomor':
                    case 'momorhoki':
                    if (data.body == "") return data.reply('Input Nomor!') 
                    axios.get(`https://xteam.xyz/primbon/nomorhoki?no=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(res.data.result) 
                    }) 
                    break
                case 'jodoh':
                case 'ramalpasangan':
                case 'pasangan':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ kamu|dia ]*\nContoh : ${data.prefix}${data.command} kirito|asuna`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    res = await axios.get(`${configs.apiUrl}/api/primbonjodoh?apikey=${configs.zeksKey}&nama1=${text[0]}&nama2=${text[1]}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    p = res.data.result
                    tek = `*Nama kamu* : ${p.nama1}\n*Nama dia* : ${p.nama2}\n\n*Hasil positif* : ${p.positif}\n*Hasil negatif* : ${p.negatif}`
                    Client.sendFileFromUrl(from, p.thumb, 'p.jpg', tek, message)
                    break
                case 'artinama':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artinama [ nama ]*\nContoh : ${data.prefix}artinama asuna`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artinama?apikey=${configs.zeksKey}&nama=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result)
                    break
                case 'artimimpi':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artimimpi[ mimpi ]*\nContoh : ${data.prefix}artimimpi ular`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artimimpi?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result.string)
                    break
                    /* ANIME MENU*/
                    case 'dewabetch':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/dewabatch?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    case 'kusonime':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/kusonime?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    case 'samehadaku':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/samehadaku?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    case 'nekonime':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/nekonime?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    case 'waifu':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/waifu?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    case 'meganebuk':
                    if (data.body == "") return data.reply('Input Query') 
                    axios.get(`https://xteam.xyz/anime/meganebuk?q=${data.body}&APIKEY=${configs.xkey}`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                    /*OTHER*/
                    case 'font':
                    case 'stylefont':
                    if (data.body == "") return data.reply('input teks!') 
                    axios.get(`https://dapuhy-api.herokuapp.com/api/others/styletext?text=${data.body}&apikey=BryanRfly`) 
                    .then(res => {
                    data.reply(JSON.stringify(res.data.result, null, 2)) 
                    }) 
                    .catch(e => {
                    data.reply('' + e) 
                    }) 
                    break
                case 'jsholat':
                case 'jadwalsholat':
                case 'jadwalshalat':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} jakarta`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwalsholat?apikey=${configs.zeksKey}&daerah=${data.body}`)
                    data.reply(res.data.data.string)
                    break
                case 'jadwaltv':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} antv`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwaltv?apikey=${configs.zeksKey}&channel=${data.body}`)
                    data.reply(res.data.result)
                    break
                    /*GROUP*/
                case 'hidetag':
                case 'everyone':
                    if(!isAdmin) return data.reply('only be used by admin!')
                    var mention = []
                    data.groupMetadata.participants.forEach((member, i) => {
                        mention.push(member.jid)
                    })
                    data.reply(`${data.body}`, {
                        contextInfo: {
                            "mentionedJid": mention
                        }
                    })
                    break 
                    case 'setname': 
                    case 'gcname': 
                      if (!data.isGroup) return data.reply('Hmm... ')
                      if(!isAdmin) return data.reply('Only Used By admin')
                      if(data.body == "") return data.reply('Input Teks! ')  
                      try {
                      await client.groupUpdateSubject(data.from, data.body) 
                      } catch(er) {
                        data.reply('' + er)
                      } 
                      break 
                      case 'setdesk':
                      case 'setdesc':
                      case 'gcdesk':
                      case 'gcdesc': 
                        if(!isAdmin) return data.reply('Only Used By Admin')
                        if(!data.isGroup) return data.reply(mess.group) 
                        if (data.body == "") return data.reply('Input Teks!')
                        try {
                          await client.groupUpdateDescription(data.from, data.body) 
                          data.reply('Done')
                        } catch(err) {
                          data.reply('' + err)
                        }
                        break 
                case 'linkgroup':
                    if(!data.isGroup) return data.reply(mess.group)
                    if(!data.botIsAdmin) return data.reply(mess.botAdmin)
                    linkgc = await client.groupInviteCode(data.from)
                    data.reply(`https://chat.whatsapp.com/${linkgc}`)
                    break
                    /*DLL*/
                case 'stickermenu':
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/menus.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menampilkan menu!', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/sticks.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuat sticker dengan cara reply image/video dengan sticker ini', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/open.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuka group', {
                        quoted: resData
                    }))
                     Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/link.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk mengambil tautan undangan group', {
                        quoted: resData
                    })) 
                     Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/revokw.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menarik tautan undangan group', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/tagall.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk tagall member', {
                        quoted: resData
                    }))
                       Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/leave.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk mengeluarkan bot dsri group', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/close.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menutup group', {
                        quoted: resData
                    }))
                    break
                case 'tes':
                    data.reply('auto upt')
                    break
                case 'return':
		        case 'eval':
                  case 'r':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
                    try {
                        data.reply(JSON.stringify(eval(body), null, 3))
                    } catch (ers) {
                        data.reply(ers.toString())
                    }
                    break
		        case 'term':
                        case '$':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
					exec(data.body, (err, stdout) => {	
				    if (err) return data.reply(err.toString())
					if (stdout) return data.reply(stdout)
					})
				    break
				    case 'd':
				    case 'del':
				    case 'dell':
				    case 'hpus':
				    case 'hps':
				    case 'delete':
				    	try {
					if (message.message.extendedTextMessage.contextInfo.participant != client.user.jid) return data.reply('Tidak Dapat Menghapus Pesan Orang Lain!')
					client.deleteMessage(data.from, { id: data.message.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: data.from, fromMe: true })
					 } catch (e) {
			data.reply('' + e) 
		}
				break
                case 'getquoted':
                    data.reply(JSON.stringify(message.message.extendedTextMessage.contextInfo, null, 3))
                    break 
                    case 'testtt':
                      if (!data.isOwner) return data.reply('Only Owner')
                      try {
                        await client.toggleDisappearingMessages(data.from, 0)
                      } catch(err) {
                        data.reply('' + err)
                      } 
                      break 
                      case 'covid':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      hx.covid() 
                      .then(result => {
                      data.reply(JSON.stringify(result, null, 2)) 
                      }) 
                      break   
                      case 'lirik':
                      if (isLimit(data.sender)) return data.reply(mess.limit)
                      hx.lirik(`${data.body}`) 
                      .then(result => {
                      data.reply(result.lirik) 
                      }) 
                      break
                      case 'searchlink':
                      case 'linkwa':
                      if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Query') 
                      hx.linkwa(data.body) 
                      .then(result => {
                      data.reply(JSON.stringify(result, null, 2)) 
                      }) 
                      break
                      case 'donasi':
                                            data.reply('𝗗𝗢𝗡𝗔𝗦𝗜\n\n ┣➥*DANA* : 081392641570\n ┣➥*PULSA* : 081392641570\n ┣➥*GOPAY* : 081392641570\n ┣➥*SHOPEE PAY* : 082131434105\n ┣➥*SAWERIA* : https://saweria.co/erdwpebot\n\n _*POWERED BY ERDWPE BOT ❤*_') 

                      break
                case 'info':
                data.reply(JSON.stringify(client.user, null, 2))
                break
                case 'gcinfo':
                case 'infogc':
                case 'grupinfo':
                case 'infogrup':
                case 'groupinfo':
                case 'infogroup':
               client.getProfilePicture(data.from) 
                 .then(res => {
                Client.sendFileFromUrl(data.from, `${res}`, 'pp.jpg', `_*[Group Info]*_\n\n${JSON.stringify(data.groupMetadata, null, 2)}`, data.message)
                }) 
                .catch(e => {
                data.reply('' + e)
                }) 
                break
              case 'bass':                 
				if (!isQuotedAudio) return data.reply('Tag audio/vn nya!')
					               const encmedia = await client.downloadMediaMessage(JSON.parse(JSON.stringify(data.message.message.audioMessage.contextInfo).replace('quotedMessage', 'message')))
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return data.reply('Error!' + err)
						hah = fs.readFileSync(ran)
						client.sendMessage(data.from, hah, audio, {ptt: false, mimetype: 'audio/mp4', message})
						fs.unlinkSync(ran)
					})
				break
				case 'tourl':
				      if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbufs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                res = await upload(getbufs) 
                
                } else {
                data.reply('Mana Gambar nya!') 
                }
                break
                case 'tomp3':
                case 'tovn':
                if ((data.isQuotedVideo && data.message.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) && data.args.length == 0) {
					data.reply(mess.wait)
					encmedia = data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
			      media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3\n\n' + err)
						buffer = fs.readFileSync(ran)
					    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: message})
						fs.unlinkSync(ran)
					})
					} else {
					data.reply(`Kirim video dengan caption ${prefix}tomp3 atau tag video yang sidah dikirim`)
					}
					break
                case 'toimg':
                case 'togif':
                case 'tomedia':
                case 'toimage':
                case 'tovid':
                    if(!isQuotedSticker) return data.reply('reply sticker!')
                    const mtdt = await data.downloadMediaQuotedMessage()
                    if(message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        axios(`https://serv-api.zeks.xyz/sticker/togif`, { method: "post", headers: { "content-type": 'application/json' }, data: {base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.gif', 'nih', message)
			})
                    } else {
                        axios(`https://serv-api.zeks.xyz/sticker/png`, { method: "post", headers: { "content-type": 'application/json' }, data: { base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.png', 'nih', message)
                        })
                    }
                    break
            }
        })
        //Handler Sticker Command
        Client.handlerStick.on("*", async (datas) => {
            const {
                idStick,
                message,
                from,
                sender,
                isOwner,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = datas 
           
             if (datas.isOwner) {
                console.log(`ID STICKER:\n\n${idStick}`) 
                }
            switch(idStick) { 
            case '1.5450584525295333e+123':
            if(!datas.isOwner) return datas.reply('Lu Siapa? ') 
            await client.groupLeave(datas.from) 
            break
            case '1.3053585046535067e+123':
            datas.reply('test')
                   break
                case '2.453746655066493e+123':
                    datas.reply(menu(configs.prefix == 'multi' ? '/' : configs.prefix, client, datas))
                    break
                case '1.415045466145215e+123':
                    if(datas.isQuotedImage || datas.isQuotedVideo) {
                        const getBuffs = await client.downloadMediaMessage(JSON.parse(JSON.stringify(datas.message.message.stickerMessage.contextInfo).replace('quotedMessage', 'message')))
					if(isQuotedVideo) Client.sendMp4AsSticker(from, getBuffs.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                   	else Client.sendImageAsSticker(from, getBuffs.toString('base64'), message, {  pack: `${configs.pack}`, author: `${configs.author}` })    
                    }
                    break 
                    case '1.335357585465266e+123':
                    if(!datas.isGroup && datas.isOwner) return datas.reply(mess.group)
            if(!datas.isAdmin) return datas.reply(mess.admin)
            text = `『 *_TAG ALL_* 』\n\n*Total member*: ${datas.groupMetadata.participants.length}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​


`
            datas.groupMetadata.participants.forEach((member, i) => {
                text += `${i+1}. ⤷@${member.jid.split('@')[0]}\n`
            })
            Client.sendText(datas.from, text)
             break
			    case '1.4129505721465047e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    datas.reply(`Grup Berhasil Di Buka Oleh Admin @${datas.sender.split('@')[0]}`)
				    break 
				    case '1.4929493049224937e+123': 
				    if(!datas.isOwner) return 
				    datas.reply('Aktif') 
				    break 
				    case '1.506533573849213e+123':
				         if(!datas.isGroup) return datas.reply(mess.group)
            if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
            if(!datas.isAdmin) return datas.reply(mess.admin)
            client.revokeInvite(datas.from)
            datas.reply(`Linkgroup berhasil di reset oleh admin @${datas.sender.split('@')[0]}`) 
            break 
            case '2.4558466658585754e+123':
             if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    linkkgc = await client.groupInviteCode(datas.from)
                    datas.reply(`https://chat.whatsapp.com/${linkkgc}`)
                    break
			    case '1.3049292658533466e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    datas.reply(`Grup Berhasil Di Tutup Oleh Admin @${datas.sender.split('@')[0]}`)
				    break
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function isLimit(sender, count) {
    const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
    if(dataUser[sender].premium) return false
    if(dataUser[sender].limit >= configs.maxLimit) return true
    dataUser[sender].limit += count || 1
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    return false
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
