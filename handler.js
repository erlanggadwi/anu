const moment = require('moment-timezone'); 
const os = require('os')
const speed = require('performance-now')
const menu = (prefix, client, data) => { 
  let yo = client.user
	let p = 0
	const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad1(hrs) + ':' + pad1(mins) + ':' + pad1(secs)
                }
            const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
    var ramadhan2k21 = new Date("januari 1, 2022 00:00:00").getTime() 

var now = new Date().getTime()
var hitungMundur = ramadhan2k21 - now 


function secondsToHms(d) {
    d = Number(d);
    var w = Math.floor(d / 36000 / 2400);
    var h = Math.floor(d / 3600 / 360 / 6);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var wDisplay = w > 0 ? w + (w == 1 ? " Hari,," : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam,, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik": " Detik") : "";
    return wDisplay + hDisplay + mDisplay + sDisplay; 
} 
	return `Hai ${data.pushname} ( @${data.sender.split('@')[0]} ), Semoga Hari Mu Menyenangkan!
		
   
  - - - *MENU ERDWPEBOT* - - - 
  
- - - *Fun Menu (Group):* - - -

-⌛ *${p+=1}.* ${prefix}group 
-⌛ *${p+=1}.* ${prefix}antilink 
-⌛ *${p+=1}.* ${prefix}welcome 
-⌛ *${p+=1}.* ${prefix}leave 
-⌛ *${p+=1}.* ${prefix}setgroupicon 
-⌛ *${p+=1}.* ${prefix}setgroupname 
-⌛ *${p+=1}.* ${prefix}setgroupdesc 
-⌛ *${p+=1}.* ${prefix}hidetag 
-⌛ *${p+=1}.* ${prefix}promote 
-⌛ *${p+=1}.* ${prefix}demote 
-⌛ *${p+=1}.* ${prefix}kick 
-⌛ *${p+=1}.* ${prefix}add 
-⌛ *${p+=1}.* ${prefix}getpp 
-⌛ *${p+=1}.* ${prefix}tagall
-⌛ *${p+=1}.* ${prefix}linkgroup
-⌛ *${p+=1}.* ${prefix}revoke
-⌛ *${p+=1}.* ${prefix}leave 
-⌛ *${p+=1}.* ${prefix}gcdesk 
-⌛ *${p+=1}.* ${prefix}gcname 
-⌛ *${p+=1}.* ${prefix}gcinfo

- - - *Asupan* - - - 

-✨ *${p+=1}.* ${prefix}asupan +62
-✨ *${p+=1}.* ${prefix}asupan bocil
-✨ *${p+=1}.* ${prefix}asupan ukhty
-✨ *${p+=1}.* ${prefix}asupan santuy
-✨ *${p+=1}.* ${prefix}asupan ghea
-✨ *${p+=1}.* ${prefix}asupan rikagusriani

- - - *Islamic* - - -

-☪️ *${p+=1}.* ${prefix}hadis
-☪️ *${p+=1}.* ${prefix}tahlil
-☪️ *${p+=1}.* ${prefix}wirid
-☪️ *${p+=1}.* ${prefix}asmaulhusna
-☪️ *${p+=1}.* ${prefix}ayatkursi
-☪️ *${p+=1}.* ${prefix}doahrian
-☪️ *${p+=1}.* ${prefix}nisahnabi
-☪️ *${p+=1}.* ${prefix}niatsholat
-☪️ *${p+=1}.* ${prefix}jsholat
-☪️ *${p+=1}.* ${prefix}bacaansholat

- - - *Downloader:* - - -

-☀ *${p+=1}.* ${prefix}play 
-☀ *${p+=1}.* ${prefix}playvid 
-☀ *${p+=1}.* ${prefix}youtubedl 
-☀ *${p+=1}.* ${prefix}ytmp3 
-☀ *${p+=1}.* ${prefix}ytmp4 
-☀ *${p+=1}.* ${prefix}igstory 
-☀ *${p+=1}.* ${prefix}ig 
-☀ *${p+=1}.* ${prefix}tiktok 
-☀ *${p+=1}.* ${prefix}tiktoknowm 
-☀ *${p+=1}.* ${prefix}ytplay 
-☀ *${p+=1}.* ${prefix}playyt 
-☀ *${p+=1}.* ${prefix}joox 
-☀ *${p+=1}.* ${prefix}mediafire 
-☀ *${p+=1}.* ${prefix}soundcloud 
-☀ *${p+=1}.* ${prefix}tiktokaudio 

- - - *Video Maker* - - -

-🎥 *${p+=1}.* ${prefix}poly 
-🎥 *${p+=1}.* ${prefix}bold 
-🎥 *${p+=1}.* ${prefix}army 
-🎥 *${p+=1}.* ${prefix}retro 
-🎥 *${p+=1}.* ${prefix}colorful  
-🎥 *${p+=1}.* ${prefix}glowing 

- - - *Tools Menu* - - -

-⚙️ *${p+=1}.* ${prefix}base64 decrypt 
-⚙️ *${p+=1}.* ${prefix}base64 encrypt 
-⚙️ *${p+=1}.* ${prefix}base32 decrypt 
-⚙️ *${p+=1}.* ${prefix}base32 encrypt 
-⚙️ *${p+=1}.* ${prefix}sha1enc 
-⚙️ *${p+=1}.* ${prefix}sha256enc 
-⚙️ *${p+=1}.* ${prefix}sha512enc 
-⚙️ *${p+=1}.* ${prefix}fetch 
-⚙️ *${p+=1}.* ${prefix}ssweb 
-⚙️ *${p+=1}.* ${prefix}font
-⚙️ *${p+=1}.* ${prefix}get 

- - - *Otp Menu* - - - 

-✉️ *${p+=1}.* ${prefix}pizzahut
-✉️ *${p+=1}.* ${prefix}olx
-✉️ *${p+=1}.* ${prefix}danacita
-✉️ *${p+=1}.* ${prefix}jegreward
-✉️ *${p+=1}.* ${prefix}lcq
-✉️ *${p+=1}.* ${prefix}allspam

- - - *Url Shortener* - - - 

-🧷️ *${p+=1}.* ${prefix}gg
-🧷️ *${p+=1}.* ${prefix}sid
-🧷 ️*${p+=1}.* ${prefix}bitly
-🧷 ️*${p+=1}.* ${prefix}cutly
-🧷 ️*${p+=1}.* ${prefix}shortat
-🧷️ *${p+=1}.* ${prefix}ccutly
-🧷️ *${p+=1}.* ${prefix}tinyurl

- - - *Random Image* - - - 

-🖼️ *${p+=1}.* ${prefix}cecan
-🖼️ *${p+=1}.* ${prefix}neko
-🖼️ *${p+=1}.* ${prefix}manga
-🖼️ *${p+=1}.* ${prefix}uniform
-🖼️ *${p+=1}.* ${prefix}cogam
-🖼️ *${p+=1}.* ${prefix}meme2
-🖼️ *${p+=1}.* ${prefix}husbu
-🖼️ *${p+=1}.* ${prefix}shota
-🖼️ *${p+=1}.* ${prefix}bts
-🖼️ *${p+=1}.* ${prefix}exo
-🖼️ *${p+=1}.* ${prefix}blowjob
-🖼️ *${p+=1}.* ${prefix}pussy

- - - *Anime Zone* - - - 

-💫 *${p+=1}.* ${prefix}waifu
-💫 *${p+=1}.* ${prefix}nekonime
-💫 *${p+=1}.* ${prefix}dewabetch
-💫 *${p+=1}.* ${prefix}kusonime
-💫 *${p+=1}.* ${prefix}samehadaku

- - - *Sticker* - - -

-✙ *${p+=1}.* ${prefix}stickerwm 
-✙ *${p+=1}.* ${prefix}takestick 
-✙ *${p+=1}.* ${prefix}toimg 
-✙ *${p+=1}.* ${prefix}togif 
-✙ *${p+=1}.* ${prefix}semoji 
-✙ *${p+=1}.* ${prefix}ttp 
-✙ *${p+=1}.* ${prefix}attp 
-✙ *${p+=1}.* ${prefix}stickerfire
-✙ *${p+=1}.* ${prefix}stickernobg
-✙ *${p+=1}.* ${prefix}stickergif
-✙ *${p+=1}.* ${prefix}sticker

- - - *Edukasi:* - - -

-❐ *${p+=1}.* ${prefix}nulis 
-❐ *${p+=1}.* ${prefix}nulis1 
-❐ *${p+=1}.* ${prefix}nulis2 
-❐ *${p+=1}.* ${prefix}nulis3 
-❐ *${p+=1}.* ${prefix}nulis4 
-❐ *${p+=1}.* ${prefix}nulis5 
-❐ *${p+=1}.* ${prefix}nuliskiri
-❐ *${p+=1}.* ${prefix}nuliskanan
-❐ *${p+=1}.* ${prefix}foliokiri
-❐ *${p+=1}.* ${prefix}foliokanan
-❐ *${p+=1}.* ${prefix}brainly 
-❐ *${p+=1}.* ${prefix}wattpad 
-❐ *${p+=1}.* ${prefix}lirik 
-❐ *${p+=1}.* ${prefix}covid 
-❐ *${p+=1}.* ${prefix}kbbi 
-❐ *${p+=1}.* ${prefix}wiki 

- - - *Searching:* - - -

-❐ *${p+=1}.* ${prefix}linkwa 
-❐ *${p+=1}.* ${prefix}playstore 
-❐ *${p+=1}.* ${prefix}happymod 
-❐ *${p+=1}.* ${prefix}iguser 
-❐ *${p+=1}.* ${prefix}igstalk 
-❐ *${p+=1}.* ${prefix}ytsearch 
-❐ *${p+=1}.* ${prefix}ytplaylist 
-❐ *${p+=1}.* ${prefix}ytchannel 
-❐ *${p+=1}.* ${prefix}shoope 
-❐ *${p+=1}.* ${prefix}spotify 
-❐ *${p+=1}.* ${prefix}gsmarena 
-❐ *${p+=1}.* ${prefix}searchmusic 
-❐ *${p+=1}.* ${prefix}wallpaper 
-❐ *${p+=1}.* ${prefix}pinterest 
-❐ *${p+=1}.* ${prefix}googleimage 
-❐ *${p+=1}.* ${prefix}jagokata 

- - - *Primbon:* - - -

-☂ *${p+=1}.* ${prefix}jodoh
-☂ *${p+=1}.* ${prefix}nomor
-☂ *${p+=1}.* ${prefix}artinama 
-☂ *${p+=1}.* ${prefix}artimimpi 

- - - *Random:* - - -

-☂ *${p+=1}.* ${prefix}fml
-☂ *${p+=1}.* ${prefix}randomquran
-☂ *${p+=1}.* ${prefix}meme
-☂ *${p+=1}.* ${prefix}darkjoke
-☂ *${p+=1}.* ${prefix}pantun
-☂ *${p+=1}.* ${prefix}nickepep
-☂ *${p+=1}.* ${prefix}quotes
-☂ *${p+=1}.* ${prefix}qislam
-☂ *${p+=1}.* ${prefix}estetikpic

- - - *Text Maker:* - - -

-☂ *${p+=1}.* ${prefix}quotemaker 
-☂ *${p+=1}.* ${prefix}shadow 
-☂ *${p+=1}.* ${prefix}neon 
-☂ *${p+=1}.* ${prefix}cloudtext 
-☂ *${p+=1}.* ${prefix}3dluxury 
-☂ *${p+=1}.* ${prefix}shadow 
-☂ *${p+=1}.* ${prefix}3dgradient 
-☂ *${p+=1}.* ${prefix}blackpink 
-☂ *${p+=1}.* ${prefix}realisticcloud 
-☂ *${p+=1}.* ${prefix}sandwriting 
-☂ *${p+=1}.* ${prefix}balloontext 
-☂ *${p+=1}.* ${prefix}3dglue 
-☂ *${p+=1}.* ${prefix}space3d 
-☂ *${p+=1}.* ${prefix}metaldarkgold 
-☂ *${p+=1}.* ${prefix}neongalaxy 
-☂ *${p+=1}.* ${prefix}1917
-☂ *${p+=1}.* ${prefix}minion3d 
-☂ *${p+=1}.* ${prefix}ultragloss 
-☂ *${p+=1}.* ${prefix}glossycarbon 
-☂ *${p+=1}.* ${prefix}deluxegold 
-☂ *${p+=1}.* ${prefix}deluxesilver 
-☂ *${p+=1}.* ${prefix}glossybluemetal  
-☂ *${p+=1}.* ${prefix}metalpurpledual 
-☂ *${p+=1}.* ${prefix}holograph 
-☂ *${p+=1}.* ${prefix}purplefoilballon
-☂ *${p+=1}.* ${prefix}redfoilballon
-☂ *${p+=1}.* ${prefix}cyanfoilballon
-☂ *${p+=1}.* ${prefix}pinkfoilballon
-☂ *${p+=1}.* ${prefix}greenfoilballon
-☂ *${p+=1}.* ${prefix}bluefoilballon
-☂ *${p+=1}.* ${prefix}yellowfoilballon
-☂ *${p+=1}.* ${prefix}rabric 
-☂ *${p+=1}.* ${prefix}stone
-☂ *${p+=1}.* ${prefix}greenglass
-☂ *${p+=1}.* ${prefix}redglass
-☂ *${p+=1}.* ${prefix}blueglass
-☂ *${p+=1}.* ${prefix}purpleglass
-☂ *${p+=1}.* ${prefix}cyanglass
-☂ *${p+=1}.* ${prefix}orangeglass
-☂ *${p+=1}.* ${prefix}dgreen
-☂ *${p+=1}.* ${prefix}dyellow
-☂ *${p+=1}.* ${prefix}firework
-☂ *${p+=1}.* ${prefix}gneon
-☂ *${p+=1}.* ${prefix}bokeh
-☂ *${p+=1}.* ${prefix}honey
-☂ *${p+=1}.* ${prefix}aglow
-☂ *${p+=1}.* ${prefix}scifi
-☂ *${p+=1}.* ${prefix}begel
-☂ *${p+=1}.* ${prefix}biscuit
-☂ *${p+=1}.* ${prefix}wolflogo 
-☂ *${p+=1}.* ${prefix}logoaveng 
-☂ *${p+=1}.* ${prefix}phlogo 
-☂ *${p+=1}.* ${prefix}marvellogo 
-☂ *${p+=1}.* ${prefix}gtext 
-☂ *${p+=1}.* ${prefix}pubglogo 
-☂ *${p+=1}.* ${prefix}snowwrite 
-☂ *${p+=1}.* ${prefix}watercolour 
-☂ *${p+=1}.* ${prefix}harta 
-☂ *${p+=1}.* ${prefix}thundertext 
-☂ *${p+=1}.* ${prefix}flametext 
-☂ *${p+=1}.* ${prefix}glowtext 
-☂ *${p+=1}.* ${prefix}smoketext 
-☂ *${p+=1}.* ${prefix}lithgtext 
-☂ *${p+=1}.* ${prefix}flowertext 
-☂ *${p+=1}.* ${prefix}bneon 
-☂ *${p+=1}.* ${prefix}matrix 
-☂ *${p+=1}.* ${prefix}breakwall 
-☂ *${p+=1}.* ${prefix}gneon 
-☂ *${p+=1}.* ${prefix}dropwater 
-☂ *${p+=1}.* ${prefix}tfire 
-☂ *${p+=1}.* ${prefix}sandw 
-☂ *${p+=1}.* ${prefix}epep 
-☂ *${p+=1}.* ${prefix}gplaybutton 
-☂ *${p+=1}.* ${prefix}splaybutton 
-☂ *${p+=1}.* ${prefix}text3dbox 
-☂ *${p+=1}.* ${prefix}text3d 
-☂ *${p+=1}.* ${prefix}logobp 
-☂ *${p+=1}.* ${prefix}leavest 
-☂ *${p+=1}.* ${prefix}tlight 
-☂ *${p+=1}.* ${prefix}naruto 
-☂ *${p+=1}.* ${prefix}crosslogo 
-☂ *${p+=1}.* ${prefix}cslogo 
-☂ *${p+=1}.* ${prefix}crismes 
-☂ *${p+=1}.* ${prefix}bokeh  

- - - *Image Maker:* - - -

-✎ *${p+=1}.* ${prefix}missing 
-✎ *${p+=1}.* ${prefix}calender 
-✎ *${p+=1}.* ${prefix}drawing 
-✎ *${p+=1}.* ${prefix}sketch 

- - - *Lain Lain:* - - -

-✎ *${p+=1}.* ${prefix}removebg 
-✎ *${p+=1}.* ${prefix}qrencode 
-✎ *${p+=1}.* ${prefix}barcode 
-✎ *${p+=1}.* ${prefix}jadwalsholat 
-✎ *${p+=1}.* ${prefix}jadwaltv 
-✎ *${p+=1}.* ${prefix}tebakgambar

- - - *Info:* - - -

-✎ *${p+=1}.* ${prefix}stickermenu
-✎ *${p+=1}.* ${prefix}owner
-✎ *${p+=1}.* ${prefix}limit
-✎ *${p+=1}.* ${prefix}info
-✎ *${p+=1}.* ${prefix}listvn

- - - *owner:* - - -

-✔️ *${p+=1}.* ${prefix}pin
-✔️ *${p+=1}.* ${prefix}unpin
-✔️ *${p+=1}.* ${prefix}pmall
-✔️ *${p+=1}.* ${prefix}culik
-✔️ *${p+=1}.* ${prefix}demoteall
-✔️ *${p+=1}.* ${prefix}delchat
-✔️ *${p+=1}.* ${prefix}arsipall
-✔️ *${p+=1}.* ${prefix}unarsipall
-✔️ *${p+=1}.* ${prefix}muteall
-✔️ *${p+=1}.* ${prefix}unmuteall
-✔️ *${p+=1}.* ${prefix}offline
-✔️ *${p+=1}.* ${prefix}online
-✔️ *${p+=1}.* ${prefix}setnick
-✔️ *${p+=1}.* ${prefix}setbotname
-✔️ *${p+=1}.* ${prefix}exif
-✔️ *${p+=1}.* ${prefix}setprefix
-✔️ *${p+=1}.* ${prefix}autoread
-✔️ *${p+=1}.* ${prefix}setbio
-✔️ *${p+=1}.* ${prefix}setpp 
-✔️ *${p+=1}.* ${prefix}eval 
-✔️ *${p+=1}.* ${prefix}term 
-✔️ *${p+=1}.* ${prefix}block 
-✔️ *${p+=1}.* ${prefix}unblock 
-✔️ *${p+=1}.* ${prefix}join 
-✔️ *${p+=1}.* ${prefix}bc 
-✔️ *${p+=1}.* ${prefix}addvn 
-✔️ *${p+=1}.* ${prefix}delvn 
-✔️ *${p+=1}.* ${prefix}premium add 
-✔️ *${p+=1}.* ${prefix}premium del 
-✔️ *${p+=1}.* ${prefix}premium list
-✔️ *${p+=1}.* ${prefix}clearall
-✔️ *${p+=1}.* ${prefix}resetlimit
-✔️ *${p+=1}.* ${prefix}adderror
-✔️ *${p+=1}.* ${prefix}dellerror
-✔️ *${p+=1}.* ${prefix}addstik
-✔️ *${p+=1}.* ${prefix}delstik

 _*Bot Info*_
        
    - Runtime : ${formater1(uptime1)} - 
    - Speed : ${latensip.toFixed(4)} Second -
    - Nama : ${yo.name} - 
    - Device : ${yo.phone.device_manufacturer}  - 
    - Model : ${yo.phone.device_model}  - 
    - WA Ver : ${yo.phone.wa_version}  - 
    - MCC : ${yo.phone.mcc}  -
    - MNC : ${yo.phone.mnc}  - 
    - OS : ${yo.phone.os_version}  - 
    - Owner : wa.me/6281392641570  -
    - Instagram : https://instagram.com/erdwpebot - 
    - Platform : ${os.platform()}  - 
    - Version : ${os.version}  - 
    - Host : ${os.hostname()} -
    
    -  Total Fitur: 290 -
    -  Fitur Error : ${global.error.length}  -
    
      SUPPORT: 
       @${6281392641570}
       @${0}

`
}

const ingfo = `Made With JavaScript By MySelf
`


const mess = {
             wait: 'Tunggu Permintaan Sedang Dalam Proses',
			 group: 'Perintah Khusus Grup! ',
			 admin: 'Khusus Admin Grup!',
			 botAdmin: 'Bot Harus Menjadi Admin Grup!',
			 limit: 'Upss!!..\n\nLimit Request Kamu Sudah Habis, Limit Akan Di Reset Pada Pukul 00.00 Wib',
			 ownerOnly: 'Khusus Owner Bot!!'
}

module.exports = {
	menu,
	ingfo,
	mess
}
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
                                            data.reply('𝗗𝗢𝗡𝗔𝗦𝗜\n\n ┣➥*DANA* : 081392641570\n ┣➥*
