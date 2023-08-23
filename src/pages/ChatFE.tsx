import { Sidebar } from "../component/Sidebar"
import { Header } from "../component/HeaderChat"

export const ChatFE = () => {
    return(
        <>
        
        <div className="flex w-4/4">
            <Sidebar />
            <Header />
        </div>
        </>
    )
}