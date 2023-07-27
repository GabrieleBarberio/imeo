import LeftSidebar from "../component/chat/LeftSidebar";
import Chat from "../component/chat/Chat";
import UserProfile from "../component/chat/MainUserItem";

export const ChatPage = () => {
  return (
    <div className="home-page__content messages-page">
      {/* Left Sidebar */}
      <div className="container-fluid h-100">
        <div className="row px-0 h-100">
          <div className="col-12 col-md-4 col-lg-5 col-xl-3 px-0 messages-page__list-scroll">
            <LeftSidebar />
          </div>
          <div className="chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1">
            <Chat />
          </div>
          <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-sm-5 px-lg-4 user-profile">
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
