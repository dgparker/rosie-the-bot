// Import discord.js commando module
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const TOKEN = require('./config');

const token = TOKEN;

// Import youtube downloader module
const ytdl = require('ytdl-core');

// Create new instance of discord.js commando
const client = new CommandoClient({
  commandPrefix: '!',
  unknownCommandResponse: true,
  disableEveryone: true,
  owner: '125450395563720704'
});

// register custom command groups
client.registry
  .registerGroups([
    ['group1', 'Our First Command Group'],
    ['group2', 'Our Second Command Group'],
    ['group3', 'Our Third Command Group'],
    ['group4', 'Our Fourth Command Group']
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
  console.log('Logged in!');
});

client.login(token);
