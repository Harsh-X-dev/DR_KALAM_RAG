import Router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./features/auth/authContext.jsx";
import { Toaster } from "sonner";
import { ChatProvider } from "./features/chat/chatContext.jsx";
function App() {
  return (
    <AuthProvider>
      <ChatProvider>
      <Toaster richColors position="top-right" />
      <RouterProvider router={Router} className="bg-white dark:bg-black"/>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;
