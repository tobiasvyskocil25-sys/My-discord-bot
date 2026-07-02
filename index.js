const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = "1429676248942116984";

const IMAGE_URL = "https://cdn.discordapp.com/attachments/1458148044083040316/1521966720384761876/69A092FB-6165-42D6-B4BC-4598C1AC8592.jpg";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  const channel = await member.guild.channels.fetch(WELCOME_CHANNEL_ID);
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor(0xffb6c1)
    .setTitle("❀ Fall Wonderland ❀")
    .setDescription(
`Hiii!

╭── ❀ Fall Wonderland ❀ ──╮  
Welcome ${member}  
➜ Read the rules  
➜ Pick your roles  
➜ Have fun & stay respectful  
♡ Enjoy your stay ♡  
╰────────────────────╯`
    )
    .setImage(IMAGE_URL)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: "Welcome to the server!" });

  channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
