


interface SidebarButtonProps {
    img: string;
    user_name: string;
    
    // handleClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}



export const SidebarButton = (props:SidebarButtonProps) => {
    return (
        <>
                <button className="flex border items-center rounded-xl  mb-2 p-2 gap-3  bg-secondary-400 w-11/12">
                    <img
                      src={props.img}
                      alt="profilepic"
                      className="w-[60px]"
                    />
                    <div>
                      <h3 className="text-white"> {props.user_name} </h3>
                      <p className="text-secondary-100"> Offline </p>
                    </div>
                  </button>
        </>
    )
}

