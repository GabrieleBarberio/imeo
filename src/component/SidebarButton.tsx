interface SidebarButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  img: string;
  user_name?: string;

  // handleClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SidebarButton = (props: SidebarButtonProps) => {
  return (
    <>
      <button
        className="flex  items-center gap-3 min-w-[400px] p-3 bg-secondary-400 border border-borderColor rounded-xl "
        onClick={props.handleClick}
      >
        <img src={props.img} alt="profilepic" className="w-[60px]" />
        <div className=" flex flex-col items-start">
          <h3 className="text-white"> {props.user_name} </h3>
          <p className="text-secondary-100 items-start">Offline</p>
        </div>
      </button>
    </>
  );
};
