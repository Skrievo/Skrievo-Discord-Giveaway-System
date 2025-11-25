# Giveaway System Bot

A professional and customizable Discord **Ticket & Giveaway System Bot**, built with clean structure, environment-based configuration, and full English support.  
This README provides installation steps, configuration details, and usage instructions for deploying the bot on your server.

---

## 🚀 Features

### 🎟️ Ticket System
- Create tickets with category-based organization  
- Auto-generated ticket channels  
- Ticket logging & archiving  
- Supporter-only commands for handling tickets  
- Status color support (red = new, yellow = in progress, green = finished)

### 🎉 Giveaway System
- Fully automated giveaway creation  
- Join/leave buttons  
- Winner picking, rerolling, and no-participation detection  
- Professionally styled embeds  
- Custom messages, timers, and prize descriptions  

### ⚙️ Config System
- Full English configuration  
- Bot avatar, name, colors, activities, and commands  
- Permissions based on role IDs  
- Optional database support  
- Environment variable support via `.env`

---

## 📦 Installation

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Create a `.env` File
Inside your project folder, create a `.env` file:

```
TOKEN=yourbottoken
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_NAME=yourdbname
```

---

## 🛠 Configuration

All settings are located in:

```
config.js
```

Here is the English version of the config:

```js
const config = {}
require('dotenv').config()

config.debug = true

config.guildid = ""

config.bot = {
    token: process.env.TOKEN,
    name: "Ticket System",
    color: "#2b2b2b",
    avatar: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png",
    command: "giveaway",
    activitys: [
        {
            name: 'through the matrix',
            type: 'Watching',
            status: 'online'
        },
        {
            name: 'with your feelings',
            type: 'Playing',
            status: 'dnd'
        },
    ],
    intervall: 10 * 1000
}

config.datastore = {
    database: false,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
}

config.perms = ["1140432433641160905", "1140462979993833585"]

config.winnermesasge = "{winners} Congratulations! You won **{prize}**! Please open a ticket in <#1131279615881650300> to claim your reward!"
config.nowinnermessage = "Nobody participated in the giveaway for **{prize}**."
config.rerollemesasge = "Giveaway rerolled! The new winner is: {newwinner}! {oldwinner} has been removed."
config.noentry = "No entries"
config.ended = "Ended before"

config.giveawayembed = {
    title: "{prize}",
    description: "{description}",
    color: "#FFFFFF",
    author: {
        name: "Giveaway",
        iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png"
    },
    footer: {
        text: "Codebotz",
        iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png"
    },
    timestamp: true,
    fields: [
        {
            name: "Ends in",
            value: "{end}",
            inline: true
        },
        {
            name: "Hosted by",
            value: "{host}",
            inline: true
        },
        {
            name: "Winner",
            value: "{winners}",
            inline: true
        }
    ]
}

config.giveawaybutton = {
    label: "Join Giveaway ({entries})",
    style: "Primary",
    emoji: "🎉"
}

config.giveawayleavebutton = {
    label: "Leave Giveaway",
    style: "Danger",
    emoji: "❌"
}

module.exports = config;
```

---

## ▶️ Running the Bot

Start the bot using:

```bash
node .
```

---

## 📂 Project Structure

```
/src
   /commands
   /events
   /systems
config.js
index.js
README.md
.env
```
---

## ❤️ Credits

Developed by **werbistdu.gg**  
