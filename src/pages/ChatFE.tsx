import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";


//!!** scrivo array con i messaggi e poi fai ritornare col map usando il bubble

const messaggi = [
  {
    _id: '64c7f225454147828a86a31d', // ID di mongo Che salva in automatico nella collection 
    from: '64e3859b7776ebe094c812da', // Davide
    to: '64c7f225454147828a86a31d', // Gabriele
    is_read: false, 
    content: "Ciao Gabriele come stai? E' finito il lavoro su IMEO?",
  },

  {
    _id: '64c7f225454147828a86a31d',
    from: '64c7f225454147828a86a31d', //Gabriele 
    to: '64e3859b7776ebe094c812da', // Davide
    is_read: false, 
    content: "Ciao Davide tutto bene tu? Manca da fare solo la renderizzazione dei messaggi!",
  },

  {
    _id: '64c7f225454147828a86a31d',
    from: '64e3859b7776ebe094c812da', //Davide
    to: '64c7f225454147828a86a31d', //Gabriele
    is_read: false, 
    content: "Okay perfetto, creiamo un array di oggetti che simulano la visualizzazione dei messaggi cosi da avere una prova okay? Mentre la landing page?",
  },
  {
    _id: '64c7f225454147828a86a31d',
    from: '64c7f225454147828a86a31d',//Gabriele
    to: '64e3859b7776ebe094c812da', //Davide
    is_read: false, 
    content: "Va benissimo, che dati inserisco nell'array di messaggi? Oltre a chi inviato ed il testo anche il visualizzato? Per la landing page manca solo il responsive ",
  },
  {
    _id: '64c7f225454147828a86a31d',
    from: '64e3859b7776ebe094c812da', //Davide
    to: '64c7f225454147828a86a31d', //Gabriele
    is_read: false, 
    content: "Nell'array inserisci : ID di mongo automatico, FROM di chi invia il messaggio, TO per chi è destinato, IS_READ se è stato letto o meno ed un contenuto che simula la chat ",
  },
  {
    _id: '64c7f225454147828a86a31d',
    from: '64e3859b7776ebe094c812da', //Gabriele
    to: '64c7f225454147828a86a31d', //Davide
    is_read: false, 
    content: "Okay perfetto vado a farlo, cinque minuti e ci sono. A dopo!",
  },
  {
    _id: '64c7f225454147828a86a31d',
    from: '64e3859b7776ebe094c812da', //Davide
    to: '64c7f225454147828a86a31d', //Gabriele
    is_read: false, 
    content: "Perfetto a dopo, buon lavoro!  ",
  },

  

]



export const ChatFE = () => {
    //in delle utility
 
  

  // const handleSendMessage = (text: string) => {
  //   const message: Message = { author, text };
  //   socket.emit("chatMessage", message);
  // };

  return (
    <>
      <div className="flex bg-blacky-300">
        <Sidebar />
        <div className="w-[75%]">
          <Header /> 
        </div>
      </div>
    </>
  );
};
