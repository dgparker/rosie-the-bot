const ytdl = require("ytdl-core");
const { Command } = require("discord.js-commando");

const streamOptions = { seek: 0, volume: 0.2 };
// const broadcast = this.client.createVoiceBroadcast();

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "play",
      group: "group4",
      memberName: "dm",
      description: "Plays the provided youtube video",
      examples: ["play https://www.youtube.com/watch?v=b-J95fYuVz4"],
      args: [
        {
          key: "url",
          prompt: "Provide the url of the youtube video you want me to play",
          type: "string"
        }
      ]
    });
  }

  run(msg, { url }) {
    console.log("Started playing youtube video " + url);
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel
        .join()
        .then(connection => {
          console.log("joined channel " + msg.member.voiceChannel.name);
          let stream = ytdl(url, streamOptions);
          let broadcast = this.client.createVoiceBroadcast();
          broadcast.playStream(stream);
          const dispatcher = connection.playBroadcast(broadcast);
          dispatcher.setVolume(0.1);
        })
        .catch(console.log);
    } else {
      msg.say("You must first be in a voice channel for me to play you a song");
      console.log("unable to play song because user wasn't in a channel");
    }
  }
};
