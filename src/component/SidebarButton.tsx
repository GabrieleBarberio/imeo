//  @ts-nocheck
interface SidebarButtonProps {
  img: string;
  user_name: string;

  // handleClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SidebarButton = (props: SidebarButtonProps) => {
  return (
    <>
      <button
        className="flex  items-center gap-3 min-w-[400px] p-3 bg-secondary-400 border border-borderColor rounded-xl hover:bg-primary-300"
        onClick={props.handleClick}
      >
        <img src={props.img} alt="profilepic" className="w-[60px]" />
        <div className=" flex flex-col items-start">
          <h3 className="text-white"> {props.user_name} </h3>
          <p className="text-secondary-100 items-start">Offline</p>
        </div>

        
        
          {/* <span class="inline-flex items-center justify-center p-2 mr-2 ml-2 text-xs font-bold text-white bg-secondary-100 rounded-xl">
            Nuovo Messaggio!
          </span> */}
        
      </button>
    </>
  );
};
