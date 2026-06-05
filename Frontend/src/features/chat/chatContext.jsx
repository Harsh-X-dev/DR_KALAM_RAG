import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState([]);

  return (
    <ChatContext.Provider value={{ loading, setLoading, message, setMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
