import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Landing } from "../features/landing/pages/Landing.jsx";
import { Dashboard } from "../features/dashboard/pages/Dashboard.jsx";
import { Login } from "../features/auth/pages/Login.jsx";
import { Register } from "../features/auth/pages/Register.jsx";
import { ChatBox } from "../features/chat/pages/ChatBox.jsx";
import { Chat } from "../features/chat/pages/Chat.jsx";
import { About } from "../features/dashboard/component/About.jsx";
import { KnowledgeBase } from "../features/knowledgeBase/pages/KnowledgeBase.jsx";
import { Protected } from "../features/auth/component/protected.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Protected />}>
        <Route element={<Dashboard />}>
          <Route path="chat" element={<ChatBox />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="knowledge-base" element={<KnowledgeBase />} />
        </Route>
      </Route>
    </>,
  ),
);

export default Router;
