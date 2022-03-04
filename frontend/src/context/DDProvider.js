import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DDContext = createContext();

const DDProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    // 'error'
    // 'info'
    // 'success'
    // 'warning'
    type: "success",
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <DDContext.Provider
      value={{
        user,
        setUser,
        alert,
        setAlert,
        loading,
        setLoading,
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
