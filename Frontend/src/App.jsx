import Router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./features/auth/authContext.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <AuthProvider>
      <Toaster richColors position="top-right" />
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

export default App;
