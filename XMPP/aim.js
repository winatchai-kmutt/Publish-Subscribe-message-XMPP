const xmpp = require("simple-xmpp");

// Aim recive a message from Ophat

// Messsage from terminal
const message = process.argv[2];

const send = async () => {
  xmpp.send("ophat@localhost", `👽|${message} `);
};

xmpp.on("online", (data) => {
  console.log(`${data.jid.user} online now 🟢`);
});

xmpp.on("error", (error) => {
  console.log(`something went wrong: ${error}`);
});

xmpp.on("chat", (from, message) => {
  messageArray = message.split("|");
  console.log(`${messageArray[0]} ${from.split("/")[0]} : ${messageArray[1]}`);
});

xmpp.connect({
  jid: "aim@localhost",
  password: "password",
  host: "localhost",
  port: 5222,
});
