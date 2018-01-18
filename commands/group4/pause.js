const ytdl = require("ytdl-core");
const { Command } = require("discord.js-commando");
const streamOptions = { seek: 0, volume: 0.2 };

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "pause",
      group: "group4",
      memberName: "pause",
      description: "pauses the current song",
      examples: ["pause"]
    });
  }

  run(msg) {
    if (msg.member.voiceChannel) {
      console.log("Current song paused by " + msg.member.user.username);
      const voiceConnection = this.client.voiceConnections.get(msg.guild.id);
      const dispatcher = voiceConnection.player.dispatcher;
      msg.say("Pausing the current song");
      dispatcher.pause();
    }
  }
};
