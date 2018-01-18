const ytdl = require("ytdl-core");
const { Command } = require("discord.js-commando");

module.exports = class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "resume",
      group: "group4",
      memberName: "resume",
      description: "resume the current song",
      examples: ["resume"]
    });
  }

  run(msg) {
    if (msg.member.voiceChannel) {
      console.log("current song resumed by " + msg.member.user.username);
      const voiceConnection = this.client.voiceConnections.get(msg.guild.id);
      const dispatcher = voiceConnection.player.dispatcher;
      msg.say("Resuming the current song.");
      dispatcher.resume();
    }
  }
};
