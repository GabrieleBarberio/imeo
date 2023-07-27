import img from "../assets/appScreen.png";

import { CallBtn } from "./CallBtn";

export const CallToAction = () => {
  return (
    <>
      <div className="w-[85%] mx-auto flex flex-col">
        <div className="flex gap-5 ">
          <div className="w-[50%]">
            <img
              className="rounded-[1.5rem] w-[100%]"
              src={img}
              alt="immmagine dell'applicazione"
            />
          </div>

          <div className=" w-[50%] text-indigo-50 justify-between text-opacity-80 items-center flex flex-col ">
            <h1 className="font-title text-6xl font-bold  text-purple-500 text-opacity-80">
              Collabora ovunque
            </h1>
            <span className="block font-paragraph  text-2xl break-words">
              Abbiamo pensato per te e il tuo team uno spazio dedicato a voi.
              <br />
              Semplice, affidabile, organizzato, efficente: lo spazio di lavoro
              di cui hai davvero bisogno.
            </span>
            <span className="font-handwrite text-emerald-500 text-xl inline-block">
              Live Editor, Instant Message, Menage the Role!
            </span>
            <CallBtn text="Entra in IMEO!" link="/login" />
          </div>
        </div>
      </div>
    </>
  );
};
