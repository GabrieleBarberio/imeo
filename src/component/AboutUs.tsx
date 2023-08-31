
import role from "../assets/teamRole.png";
import GabrieleBarberio from "../assets/gabriele-transparent.png";
import DavideSimone from "../assets/davide-transparent.png";
import JonnaGeronimo from "../assets/jonna-transparent.png";
import EdoardoRicca from "../assets/edoardo-transparent.png";
import DanieleLupo from "../assets/daniele-transparent.png";

function AboutUs() {
  return (
    <>
      <div className="max-w-mww mx-auto py-64 relative z-10 mww:px-0 px-12">
        <h3 className="text-center text-3xl font-bold text-[#FFFFFF] mb-24">
          ABOUT US
        </h3>
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center py-8 px-4 rounded-[104px] border-[6px] border-[#4B2B6A] bg-[#1E0E1F94]">
            <div className="w-32 h-32">
              <img
                className="max-w-full h-auto rounded-[54px] border-4 border-[#4B2B6A]"
                src={GabrieleBarberio}
                alt="Picture of a member"
              />
            </div>
            <h2 className="text-3xl font-bold my-8 text-[#D9D9D9]">
              Gabriele Barberio
            </h2>
            <div>
              <img src={role} />
            </div>
            <span className="text-xl font-bold my-8 text-[#D9D9D9]">
              Studente di Develhope appassionato
              <br />
              di arte, storia, cucina e innovazione.
            </span>
            <div className="mt-16 mb-4">
              <span className="text-2xl font-bold text-[#FFFFFF80]">
                @GabrieleBarberio
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 px-4 rounded-[104px] border-[6px] border-[#4B2B6A] bg-[#1E0E1F94]">
            <div className="w-32 h-32">
              <img
                className="w-full h-full object-contain rounded-[54px] border-4 border-[#4B2B6A]"
                src={DavideSimone}
                alt="Picture of a member"
              />
            </div>
            <h2 className="text-3xl font-bold my-8 text-[#D9D9D9]">
              Davide Simone
            </h2>
            <div>{/* role banner */}</div>
            <span className="text-xl font-bold my-8 text-[#D9D9D9]">
              Studente della classe FS13 di DevelHope,
              <br />
              amante della musica e del Web3.0
            </span>
            <div className="mt-16 mb-4">
              <span className="text-2xl font-bold text-[#FFFFFF80]">
                @DavideSimone
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 px-4 rounded-[104px] border-[6px] border-[#4B2B6A] bg-[#1E0E1F94]">
            <div className="w-32 h-32">
              <img
                className="w-full h-full object-contain rounded-[54px] border-4 border-[#4B2B6A]"
                src={JonnaGeronimo}
                alt="Picture of a member"
              />
            </div>
            <h2 className="text-3xl font-bold my-8 text-[#D9D9D9]">
              Jonna Geronimo
            </h2>
            <div>{/* role banner */}</div>
            <span className="text-xl font-bold my-8 text-[#D9D9D9]">
            Mediatrice culturale e  studentessa <br />a Develhope,  con un debole per l'arte,<br /> le digital humanities,  il game design <br/> e il caffè che scorre nelle vene.
            </span>
            <div className="mt-16 mb-4">
              <span className="text-2xl font-bold text-[#FFFFFF80]">
                @JonnaGeronimo
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 px-4 rounded-[104px] border-[6px] border-[#4B2B6A] bg-[#1E0E1F94]">
            <div className="w-32 h-32">
              <img
                className="max-w-full h-auto rounded-[54px] border-4 border-[#4B2B6A]"
                src={EdoardoRicca}
                alt="Picture of a member"
              />
            </div>
            <h2 className="text-3xl font-bold my-8 text-[#D9D9D9]">
              Edoardo Ricca
            </h2>
            <div>{/* role banner */}</div>
            <span className="text-xl font-bold my-8 text-[#D9D9D9]">
              Studente di Develhope appassionato
              <br />
              di arte, storia, cucina e innovazione.
            </span>
            <div className="mt-16 mb-4">
              <span className="text-2xl font-bold text-[#FFFFFF80]">
                @GabrieleBarberio
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 px-4 rounded-[104px] border-[6px] border-[#4B2B6A] bg-[#1E0E1F94]">
            <div className="w-32 h-32">
              <img
                className="w-full h-full object-contain rounded-[54px] border-4 border-[#4B2B6A]"
                src={DanieleLupo}
                alt="Picture of a member"
              />
            </div>
            <h2 className="text-3xl font-bold my-8 text-[#D9D9D9]">
              Daniele Lupo
            </h2>
            <div>{/* role banner */}</div>
            <span className="text-xl font-bold my-8 text-[#D9D9D9]">
              Studente di Develhope appassionato
              <br />
              di arte, storia, cucina e innovazione.
            </span>
            <div className="mt-16 mb-4">
              <span className="text-2xl font-bold text-[#FFFFFF80]">
                @GabrieleBarberio
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
