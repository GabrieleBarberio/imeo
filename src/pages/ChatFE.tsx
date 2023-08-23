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
                    
                                        

                </div>
            </div>            
        </div>
        </>
    )
}