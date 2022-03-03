import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DDContext = createContext();

const DDProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if(userInfo){
      setNotification(userInfo?.user?.notifications, ...notification)
      // console.log(notification)
    }
    if (!userInfo) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <DDContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats, 
        setChats,
        notification,
        setNotification
      }}
    >
      {children}
    </DDContext.Provider> 
  );
};

export const DDState = () => {
  return useContext(DDContext);
};

export default DDProvider;
