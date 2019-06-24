const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "%";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === '￦𝐄𝐋𝐶𝐎𝑴𝙀');
 
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","「 🆉🆇🆉」"));
    });


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///ÇáÇãÑ
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});

client.on("message", message => {
var prefix = "%" // ÇáÈÑíÝßÓ
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) { // 
        if(!message.channel.guild) return message.reply('**? ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  تم مسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

client.on('message', message => { //ping
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });


client.login(process.env.BOT_TOKEN);
