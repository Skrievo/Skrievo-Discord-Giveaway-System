const config = {}
require('dotenv').config()

config.debug = true

// Discord Server ID
config.guildid = ""

// BOT SETTINGS
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

    intervall: 10 * 1000 // 10 seconds
}

// DATABASE SETTINGS
config.datastore = {
    database: false,
    // ⚠️ CHANGE VALUES IN THE .env FILE ⚠️
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
}

// PERMISSION ROLES
config.perms = ["1140432433641160905", "1140462979993833585"]

// GIVEAWAY MESSAGES
config.winnermesasge = "{winners} Congratulations! You have won **{prize}**! Please open a ticket here <#1131279615881650300> to claim your prize!"
config.nowinnermessage = "Nobody participated in the giveaway for **{prize}**! <:cdbz_sad:1140616627726061598>"
config.rerollemesasge = "Giveaway rerolled! The new winner is: {newwinner}, congratulations! {oldwinner} has been removed!"
config.noentry = "No participants"
config.ended = "Ended before"

// GIVEAWAY EMBED TEMPLATE
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
        // {
        //     name: "Entries",
        //     value: "{entries}",
        //     inline: true
        // },
        {
            name: "Winner(s)",
            value: "{winners}",
            inline: true
        }
    ]
}

// GIVEAWAY BUTTON
config.giveawaybutton = {
    label: "Join Giveaway ({entries})",
    style: "Primary",
    emoji: "🎉"
}

// LEAVE GIVEAWAY BUTTON
config.giveawayleavebutton = {
    label: "Leave Giveaway",
    style: "Danger",
    emoji: "❌"
}

module.exports = config;
