const Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login("NDMzNzY4NTAyNjI5NzYxMDM0.DbAp6w.6s5Au-5UyIpt286e4FyEFKquFFk");

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
            }
    //help commande ici juste en bas 
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("MELBOT")
            .setDescription("voici toute les commande du bot:")
            .addField("/help"," Page d'aide", true) //cette commande tu dois la reproduire et changer les noms pour le help ^^
            .addField("Ma chaîne (Ce n'ai pas une commande)","Clic juste sur ma chaîne et tu seras redirigé vers Mon compte youtube => [Ma chaîne](https://www.youtube.com/channel/UC26zo_BXMCm5rVavSXauJYg)", true)
            .addField("/mute + mentions","Cette commande permet mute un membre (PROCHAINEMENT) ", true)
            .addField("/ban + mentions","Cette commande permet de bannir un membre", true)
            .setColor("0x#FF4000")
            .setFooter("By MelDib CoC")
        message.channel.sendEmbed(embed);
    } //fin du para
     if(message.content.startsWith(prefix +'ban')){
    if (message.channel.type === "dm") return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission d'utiliser cette commande dans ce serveur.**").catch(console.error);
    if(message.mentions.users.size === 0) {
      return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
    }
    let banMember = message.guild.member(message.mentions.users.first());
    if(!banMember) {
      return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("**:x: Je n'ai pas la permission pour ban...**").catch(console.error);
      
    }
             
    banMember.ban().then(member => {
        message.channel.send(`**${member.user.tag}** est banni :eyes:`)
            });
          }
});