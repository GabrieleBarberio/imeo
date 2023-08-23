import { Sidebar } from "../component/Sidebar"
import { Header } from "../component/HeaderChat"

export const ChatFE = () => {
    return(
        <>
        
        <div className="flex w-4/4 bg-blacky-300">
            <Sidebar />
            <div className="w-3/4">
                <Header />
                <div className="bg-blacky-300">

                <div className="flex flex-end justify-center items-end relative">
                    <input className="w-4/5 border-none p-3 rounded-lg bg-secondary-400 absolute  bottom-[-400px]"
                           type="text" 
                           placeholder="Scrivi un messaggio"
                           />     
                </div>                                        

                </div>
            </div>            
        </div>
        </>
    )
}