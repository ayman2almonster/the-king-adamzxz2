const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "%";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //��� �� ������ ��� �����
    .setTitle('��� ����!')
    .setDescription('����� �� ��������')
    .addField('``���� �����``:',"" +  Sal.user.id, true)
    .addField('``��� �����``', Sal.user.discriminator, true)
    .addField('``�� ������� ��``', Sal.user.createdAt, true)
    .addField(' ??  ��� ���',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', ' (?????????????)') // ��� �� ��� ����� ��� ���� ���� ���
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///�����
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: ��� ������� ���������**`); 
 message.delete(); 
};     
});

client.on("message", message => {
var prefix = "%" // ��������
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) { // 
        if(!message.channel.guild) return message.reply('**? ��� ��� ��� ����� ��������� ��� **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  �� ���� ���� ������ ���� �����**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``���� ��� ����� ``",
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

client.on('message' , message => {
if(message.content === '*help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
***__��� �� �����__***
**
????????????? {?����� �����?} ?????????????
? %bc ? �������� 
? %clear ? ��� �����
? %ping ? ���� ������� �������
????????????? {? By Ayman ALmonster ?} ?????????????
**
`);
}
})