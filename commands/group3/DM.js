const { Command } = require("discord.js-commando");

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "dm",
      group: "group3",
      memberName: "dm",
      description: "Sends a message to the user you mention.",
      examples: ["dm @User Hi there!"],
      args: [
        {
          key: "user",
          prompt: "Which user do you want to send the DM to?",
          type: "user"
        },
        {
          key: "content",
          prompt: "What would you like the content of the message to be?",
          type: "string"
        }
      ]
    });
  }

  run(msg, { user, content }) {
    console.log("Sent a DM to user " + user.username);
    return user.send(content);
  }
};
