const Discord = require('discord.js')
const client = new Discord.Client()
const token = require('./lib/config/token')
const config = require('./lib/config')
const prefix = config.prefix
const logger = require('./lib/logger')
const embed = require('./lib/embed')

client.on('ready', () => {
  console.log('봇 시작됨');
  logger.info('bot ready')
  client.user.setActivity(prefix + '도움')
});

client.on('message', message => {
  if(message.author.bot) return;

  var channel = message.channel
  var author = message.author
  var content = message.content

  if (message.content.startsWith(prefix + '핑')) {
    channel.send(embed.ping(client))
    logger.info(author.id + ' : ping')
  } else if (message.content.startsWith(prefix + '업타임')) {
    message.channel.send(embed.uptime(client))
    logger.info(message.author.id + ' : uptime')
  } else if (message.content.startsWith(prefix + '도움')) {
    message.channel.send(embed.help(client, prefix))
  } else if (message.content == (prefix + '재시작')){
    if (message.author.id == '352755226224361482') {
      logger.debug('restarting...')
      logger.info('restarting...\n\n')
      process.exit(0)
    } else {
      message.reply('명령어 접근이 거부되었습니다.')
      logger.debug(message.author.id + ' : restart denied')
      logger.info(message.author.id + ' : restart denied')
    }
  } else if (message.content.startsWith(`${prefix}기능도움`)) {
    message.channel.send(embed.help_func(client, prefix))
  }
});

client.login(token.token);