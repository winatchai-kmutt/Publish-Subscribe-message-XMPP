const xmpp = require("simple-xmpp");

// Ophat send a message to Aim

// Messsage from terminal
const message = process.argv[2];

const send = async () => {
  xmpp.send("aim@localhost", `👻|${message} `);
  console.log(`sending success`);
};

xmpp.on("online", (data) => {
  console.log(`${data.jid.user} online now 🟢`);
  send();
});

xmpp.on("error", (error) => {
  console.log(`something went wrong: ${error}`);
});

xmpp.on("chat", (from, message) => {
  messageArray = message.split("|");
  console.log(`${messageArray[0]} ${from.split("/")[0]} : ${messageArray[1]}`);
});

xmpp.connect({
  jid: "ophat@localhost",
  password: "password",
  host: "localhost",
  port: 5222,
});
