require('dotenv').config();
const {Telegraf} = require('telegraf');// Telegraf va a ayudar con la interacción con la api de telegram...
const token = process.env.BOT_TOKEN; //token generado en telegram...

const bot = new Telegraf(token);

bot.start((ctx) => {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.update)
    //ctx.reply('welcome ' + ctx.from.first_name)
    ctx.reply(`Welcome ${ctx.from.first_name}. You have send a message`)
})

bot.help((ctx) => {
    ctx.reply('help')
})


bot.settings((ctx) => {
    ctx.reply('settings')
})

/* bot.command('mycommands', (ctx) => { //crea un commando personalizado...
    ctx.reply('my custom command!')
}) */

bot.command(['mycommands', 'mycommand','MyCommand', 'MYCOMMAND', 'test'], (ctx) => { //crea un commando personalizado...
    ctx.reply('my custom command!')
})

bot.hears('computer', ctx => {
    ctx.reply('Hello')
})

/* bot.on('text', ctx => { //para escuchar un evento de texto...
  ctx.reply('you are texting')
})
 */
bot.on('sticker', ctx => {
    ctx.reply('you like stickers')
})

bot.mention('BotFather', ctx => {
    ctx.reply('You have mentioned somebody')
})

bot.phone('+55 41 4545-5454', ctx => {
    ctx.reply('This is a telephone number')
})

bot.hashtag('development', ctx => {
    ctx.reply('development hashtag')
})
bot.launch(); //lanza/inicia el servicio que estaría escuchando las interacciones de los usuarios...
