import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Pembuat Bot `, `Call/Spam Block`, `โจdikirafaelsimarmata@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://linktr.ee/AkioBot`, `nothing`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp`, `Spam/Call Block`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://linktr.ee/AkioBot`, `๐๐จ๐ญ ๐๐ฒ ๐๐ข๐ค๐ข`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `Halo kak @${m.sender.split(`@`)[0]} Itu Nomornya Jan Di Call/Spam Yak Nanti Di Block`, wm, 'Menu', '.menu', 'Donasi', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
