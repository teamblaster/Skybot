module.exports.ping = function(client) {
  return {
    embed: {
      color: '3447003',
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: '핑',
      fields: [{
            name: Math.round(client.ping) + 'ms',
            value: "핑은 봇이 돌아가는 서버에서 측정되었습니다."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Starlight#7528 All rights reversed"
        }
    }
  }
}

module.exports.uptime = function (client) {
  var day = Math.floor((client.uptime) / 24 / 60 / 60 / 1000)
  var temp = day * 24 * 60 * 60 * 1000
  var hour = Math.floor((client.uptime) / 60 / 60 / 1000)
  temp += hour * 60 * 60 * 1000
  var min = Math.floor((client.uptime - temp) / 60 / 1000)
  temp += min * 60 * 1000
  var sec = Math.floor((client.uptime - temp) / 1000)
  temp += sec * 1000
  var ms = client.uptime - temp

  return {
    embed: {
      color: '3447003',
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: '업타임',
      fields: [{
        name:  day + '일 ' + hour + '시간 ' + min + '분 ' + sec + '.' + ms + '초',
        value: "핑은 봇이 돌아가는 서버에서 측정되었습니다."
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Starlight#7528 All rights reversed"
      }
    }
  }
}