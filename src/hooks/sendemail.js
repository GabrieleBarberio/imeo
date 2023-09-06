// importo nodemailer
const nodemail = require("nodemailer");

import User from "../../ImeoServer/db/models/User";

const {EMAIL, PASS} = process.env

// metto i dati del mio host
const transporter = nodemail.createTransport({
  host: "gmail",
  secure: true,
  auth: {
    user: `${EMAIL}`,
    pass: `${PASS}`,
  },
});

// qui creo il contenuto della email
async function main() {
  const info = await transporter.sendMail({
    from: `davidesimone1996@gmail.com`,
    to: `daveesimone@gmail.com`,
    subject: "Welcome in Imeo",
    text: "Benvenuto in IMEO, il viaggio inizia! Carissimo ** qui l'username che l'utente ha messo **, con questa email ti confermaimo l'avvenuta registrazione ad IMEO. Comincia subito la tua avventura cominciando a chattare sulla nostra app. Il team di IMEO!",
    html: "",
  });
  console.log("Message Sent" + info.messageId);
}

main()
