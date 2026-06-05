import Router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./features/auth/authContext.jsx";
import { Toaster } from "sonner";
import { ChatProvider } from "./features/chat/chatContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <Toaster richColors position="top-right" />
          <RouterProvider router={Router} />
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

