# Discord Music Bot

The perfect music bot for your Discord server! 🎶

## Features

### Highlights

* Simple & easy to use 🤘
* Audio filters (bassboost) 🎸
* YouTube, Facebook and Vimeo support 🌌
* Slash Commands support 🤖
* Play in multiple servers at the same time 🚗

### Commands

Here are all the available commands in the bot!

|   Name    |       Description        | Options  |
|:----------|:------------------------:|---------:|
| **/play** | Play a song from youtube | \<query> |
|:-----|:-----------:|--------:|

|:-----|:-----------:|--------:|

|:-----|:-----------:|--------:|

|:-----|:-----------:|--------:|

|:-----|:-----------:|--------:|


## About

The project uses the following libraries:

* **[Androz2091/discord-player](https://github.com/Androz2091/discord-player)** library for the core music features
* **[discordjs](https://github.com/discordjs/discord.js)** for all the other requests to the Discord API
* **[@discordjs/voice](https://github.com/discordjs/voice)** for all the **voice** requests to the Discord API
* **[@discordjs/opus](https://github.com/discordjs/opus)** as the opus library
* **[FFMPEG](https://ffmpeg.org)** to encode the stream

## Installation

### Manual
* Install [FFMPEG](https://ffmpeg.org).
* Clone the repository. (`git clone https://github.com/Androz2091/discord-music-bot`)
* Copy the `.env.example` file as `.env` and fill it.
 - `DISCORD_CLIENT_ID` is the ID of your Discord BOT
 - `DISCORD_CLIENT_TOKEN` is the token of your Discord BOT
* Install the dependencies. (`yarn install` or `npm install`)
* Start the bot! (`yarn start` or `npm start` or `node .`)

### Docker 
* Copy the `.env.example` file as `.env` and fill it.
```sh
docker build . -t discord-music-bot
docker run -d --env-file .env discord-music-bot 
```

### Example with docker-compose
```
version: '2'

services:
  bot:
    build: .
    environment:
      DISCORD_CLIENT_ID: ""
      DISCORD_CLIENT_TOKEN: ""
      DISCORD_CLIENT_PUBKEY: ""
      DISCORD_GUILD_ID: ""
```
