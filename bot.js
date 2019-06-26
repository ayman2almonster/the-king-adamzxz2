const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "%";

var bot = new Eris("BOT_TOKEN");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();


client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) { // 
        if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///الامر
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

