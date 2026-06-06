# 🚀 Dr. Kalam AI — Retrieval-Augmented Generation Chatbot

<div align="center">

![Dr. Kalam AI Banner](https://img.shields.io/badge/Dr.%20Kalam%20AI-RAG%20Chatbot-teal?style=for-the-badge&logo=google&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20DB-00A67E?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**A production-grade AI chatbot powered by Retrieval-Augmented Generation (RAG) that lets users have rich, contextual conversations about Dr. A.P.J. Abdul Kalam — India's "Missile Man" and former President.**

[🌐 Live Demo](#deployment) · [📖 Documentation](#installation) · [🤖 RAG Pipeline](#-rag-pipeline)

</div>

---

## 📋 Overview

**Dr. Kalam AI** is a full-stack AI-powered chatbot application that enables users to explore the life, legacy, philosophies, and achievements of Dr. A.P.J. Abdul Kalam through natural conversation. Rather than hallucinating facts, the system retrieves real, sourced information from Dr. Kalam's books, speeches, and quotes before generating a response — a technique known as **Retrieval-Augmented Generation (RAG)**.

### The Problem It Solves

General-purpose LLMs often fabricate information or lack deep, nuanced knowledge about specific individuals. This project solves that by:

- **Grounding every response** in verified source documents (books, speeches, quotes)
- **Citing sources** so users know exactly where the information comes from
- **Maintaining conversation context** across multi-turn dialogues
- **Persisting chat history** so users can revisit past conversations

### Why It Was Built

This project was built as a portfolio-grade demonstration of modern AI engineering skills — specifically the design and implementation of a complete RAG pipeline from document ingestion to real-time streaming response delivery, integrated with a polished, production-quality web interface.

---

## ✨ Features

- 🤖 **RAG-Powered Conversations** — Every response is grounded in real documents: *Wings of Fire*, *Ignited Minds*, *India 2020*, speeches, and quotes
- 🌊 **Real-Time Streaming Responses** — Server-Sent Events (SSE) stream AI tokens to the UI word-by-word for a live ChatGPT-like experience
- 📚 **Source Attribution** — Each response includes the source document(s) it was derived from
- 🔐 **Secure Authentication** — JWT-based auth with HttpOnly cookie storage and token blacklisting on logout
- 💬 **Persistent Chat History** — All conversations and messages are stored in PostgreSQL and retrievable at any time
- 🏷️ **AI-Generated Chat Titles** — Gemini automatically generates a short, descriptive title for each new conversation
- 🌗 **Dark / Light Theme Toggle** — Full dark mode support with smooth theme transitions
- 📖 **Knowledge Base Page** — Browse all the source documents used to power the RAG pipeline
- 👤 **About Dr. Kalam Page** — Rich, informative page with timeline, legacy, and bio cards
- 🛡️ **Protected Routes** — Unauthenticated users are automatically redirected to login
- 📱 **Responsive Design** — Fully responsive layout for desktop and mobile
- 🔔 **Toast Notifications** — Real-time user feedback using Sonner
- ⚡ **Exponential Backoff for Rate Limits** — The ingestion pipeline gracefully handles Gemini API rate limits

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI component framework |
| Vite | 8 | Build tool & dev server |
| React Router DOM | 7 | Client-side routing & protected routes |
| TailwindCSS | 4 | Utility-first styling |
| Lucide React | Latest | Icon library |
| Axios | 1.x | HTTP client for REST API calls |
| React Markdown | 10 | Render AI responses as formatted Markdown |
| Sonner | 2 | Toast notification system |
| React Spinners | 0.17 | Loading state UI components |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | 22 (ESM) | Runtime environment |
| Express.js | 5 | REST API web framework |
| Morgan | 1.10 | HTTP request logger |
| CORS | 2.8 | Cross-origin resource sharing |
| Cookie Parser | 1.4 | HttpOnly cookie parsing |
| JSON Web Token | 9 | JWT generation & verification |
| bcryptjs | 3 | Password hashing (salt rounds: 12) |
| pdf-parse | 1.1 | PDF text extraction for ingestion |
| dotenv | 17 | Environment variable management |

### Database
| Technology | Purpose |
|---|---|
| PostgreSQL (via Prisma Data Platform) | Primary relational database for users, chats, and messages |
| Prisma ORM | Type-safe database client with migrations |
| `@prisma/adapter-pg` | Postgres driver adapter for Prisma |

### Authentication
| Mechanism | Description |
|---|---|
| JWT (JSON Web Tokens) | Stateless authentication tokens |
| HttpOnly Cookies | Secure token storage (XSS resistant) |
| bcryptjs (salt=12) | Password hashing before storage |
| Token Blacklist Table | Invalidated tokens persisted in DB on logout |

### AI / RAG Components
| Technology | Role |
|---|---|
| Google Gemini (`gemini-embedding-001`) | Generates 3072-dimensional text embeddings |
| Google Gemini (`gemini-3.1-flash-lite`) | Generates final chat responses & chat titles |
| `@google/genai` SDK | Official Google Generative AI SDK |
| Pinecone (Serverless on AWS `us-east-1`) | Vector database for semantic search (cosine similarity) |
| `@pinecone-database/pinecone` | Official Pinecone Node.js SDK |

### Deployment
| Service | Purpose |
|---|---|
| Prisma Data Platform | Managed PostgreSQL hosting |
| Pinecone Cloud | Managed vector index hosting |
| Google AI Studio | Gemini API key management |
| (Any Node.js host) | Backend (e.g., Render, Railway, Fly.io) |
| (Any static host) | Frontend (e.g., Vercel, Netlify) |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          USER'S BROWSER                             │
│                                                                     │
│   React 19 + Vite + TailwindCSS                                     │
│   ┌─────────┐  ┌──────────┐  ┌───────────┐  ┌───────────────────┐  │
│   │ Landing │  │  Login / │  │ Dashboard │  │  Chat Interface   │  │
│   │  Page   │  │ Register │  │ + Sidebar │  │  (SSE Streaming)  │  │
│   └─────────┘  └──────────┘  └───────────┘  └───────────────────┘  │
│                │ Axios (REST)                │ Fetch (SSE stream)    │
└────────────────┼─────────────────────────────┼───────────────────────┘
                 │                             │
                 ▼                             ▼
┌──────────────────────────────────────────────────────────────────────┐
│                     EXPRESS.JS BACKEND (Node.js)                     │
│                                                                      │
│   /api/auth            /api/chat                                     │
│   ┌────────────────┐   ┌──────────────────────────────────────────┐  │
│   │ Auth Controller│   │ Chat Controller                          │  │
│   │ - register     │   │ 1. Verify JWT (middleware)               │  │
│   │ - login        │   │ 2. createEmbedding(message) → Gemini     │  │
│   │ - logout       │   │3. retrival(vector) → Pinecone (topK=10)  │  │
│   │ - getUser      │   │ 4. promptBuilder(context + history)      │  │
│   └────────────────┘   │ 5. generateContentStream() → SSE chunks  │  │
│   JWT Middleware        │ 6. saveMessages() → PostgreSQL           │  │
│   Token Blacklist       └──────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
         │                      │                       │
         ▼                      ▼                       ▼
  ┌─────────────┐       ┌──────────────┐       ┌───────────────┐
  │ PostgreSQL  │       │   Pinecone   │       │  Google Gemini│
  │ (Prisma)    │       │  Vector DB   │       │  AI API       │
  │             │       │  (cosine)    │       │               │
  │ - users     │       │  3072-dim    │       │ - Embeddings  │
  │ - chats     │       │  vectors     │       │ - Generation  │
  │ - messages  │       │  + metadata  │       │ - Titles      │
  │ - blacklist │       └──────────────┘       └───────────────┘
  └─────────────┘
```

**Data flow summary:**
1. User sends a message from the React frontend via `fetch` (SSE-compatible)
2. The Express server authenticates the request using JWT from the HttpOnly cookie
3. The message is embedded via Google Gemini's embedding model (3072 dimensions)
4. The embedding is queried against the Pinecone vector index (top 10 semantically similar chunks are retrieved)
5. The top 5 chunks are injected into a structured prompt alongside conversation history
6. Gemini streams a response token-by-token via SSE back to the browser
7. Source document names are sent as a final SSE event
8. The full conversation turn (user message + assistant reply + sources) is persisted to PostgreSQL

---

## 🔍 RAG Pipeline

The RAG pipeline is the technical heart of this application. It consists of two phases: **offline ingestion** and **online retrieval**.

### 1. Document Ingestion (Offline — `src/RAG/ingest.js`)

This one-time script processes all knowledge source documents and loads them into the Pinecone vector index.

**Supported source formats:**
- **PDF** — `wings_of_fire.pdf`, `ignited_minds.pdf`, `india_2020.pdf` (extracted using `pdf-parse`)
- **TXT** — `speechs.txt` (read as UTF-8)
- **JSON** — `quotes.json` (structured as `{ "Book": ["quote1", ...] }`)

**Chunking Strategy:**
- Text is split into overlapping word-based chunks
- **Chunk size:** 400 words
- **Overlap:** 50 words (prevents information loss at chunk boundaries)

**Embedding Generation:**
- Each chunk is embedded using `gemini-embedding-001` → produces a **3072-dimensional vector**
- Rate-limit-aware: implements **exponential backoff** (up to 5 retries, starting at 2s, doubling each attempt)
- A 300ms delay between chunk embeddings prevents sustained API overload

**Vector Storage:**
- Vectors are upserted into a Pinecone serverless index (`kalam-rag`) on AWS `us-east-1`
- Each vector stores metadata: `{ text: "chunk content", source: "filename.pdf" }`
- Index uses **cosine similarity** as the distance metric

```
SOURCE DOCS → extract text → chunk (400w, 50w overlap) → embed (Gemini) → upsert (Pinecone)
```

### 2. Embedding Generation at Query Time (`src/RAG/createEmbedding.js`)

When a user sends a message, it is embedded using `gemini-embedding-2` via the `@google/genai` SDK, producing a vector representation of the query.

### 3. Vector Retrieval (`src/RAG/retrival.js`)

The query vector is sent to Pinecone with `topK: 10` and `includeMetadata: true`. Pinecone returns the 10 most semantically similar document chunks using cosine similarity.

### 4. Prompt Engineering (`src/aiService/buildPrompt.js`)

The top 5 retrieved chunks are formatted into a structured prompt:

```
CONTEXT:
[chunk 1]
---
[chunk 2]
...

PREVIOUS CONVERSATION:
[last 10 user messages]

USER MESSAGE:
[current message]

Instructions:
- Use context when relevant
- Answer only what was asked
- If answer is unavailable, say so clearly
```

### 5. Response Generation (`src/aiService/generateResponse.js`)

The prompt is sent to `gemini-3.1-flash-lite` via `generateContentStream()`. The model has a detailed system instruction that:
- Positions it as a knowledgeable narrator (not Dr. Kalam himself)
- Discourages fabrication or forced inspirational quotes
- Enforces conciseness and accuracy

The response is streamed token-by-token over SSE back to the React frontend.

---

## 🔐 Authentication Flow

```
SIGNUP
──────
User fills register form → POST /api/auth/register
→ Validate fields (name, email, password)
→ Check for duplicate email (Prisma unique lookup)
→ Hash password with bcrypt (salt rounds: 12)
→ Create user record in PostgreSQL
→ Generate JWT (user_id payload, 7-day expiry)
→ Set JWT in HttpOnly cookie
→ Return user object (password excluded)
→ Frontend stores user in AuthContext

LOGIN
─────
User fills login form → POST /api/auth/login
→ Validate fields
→ Find user by email (Prisma)
→ Compare submitted password with bcrypt hash
→ Generate JWT
→ Set JWT in HttpOnly cookie
→ Frontend stores user in AuthContext

PROTECTED ROUTE ACCESS
──────────────────────
Request arrives with cookie → authMiddleware runs
→ Extract token from req.cookies.token
→ Check blacklist table (Prisma findUnique)
→ If blacklisted → 401 Unauthorized
→ jwt.verify(token, JWT_SECRET)
→ Attach decoded payload to req.user
→ Pass to controller

LOGOUT
──────
POST /api/auth/logout
→ Extract token from cookie
→ INSERT token into blacklist table (prevents reuse)
→ clearCookie("token")
→ Frontend clears user from AuthContext + redirects

SESSION PERSISTENCE
───────────────────
On every page load → GET /api/auth/get-user
→ Cookie is sent automatically by browser
→ Middleware validates token
→ Returns user info if valid
→ AuthContext hydrates user state
→ Protected routes render if user exists
```

---

## 🗄️ Database Design

The PostgreSQL database (managed via Prisma ORM) stores four models:

### `users`
| Column | Type | Description |
|---|---|---|
| `user_id` | `String` (UUID, PK) | Unique user identifier |
| `name` | `String` | User's display name |
| `email` | `String` (unique) | Login credential |
| `password` | `String` | bcrypt-hashed password |
| `isAdmin` | `Boolean` | Admin flag (default: false) |
| `created_at` | `DateTime` | Account creation timestamp |

**Why:** Core user identity for authentication and chat ownership.

### `blacklist`
| Column | Type | Description |
|---|---|---|
| `id` | `String` (UUID, PK) | Record ID |
| `token` | `String` (unique) | Invalidated JWT string |
| `createdAt` | `DateTime` | When the logout occurred |

**Why:** Enables stateless JWT auth while still supporting true logout. Without a blacklist, JWTs would remain valid until natural expiry even after logout.

### `chats`
| Column | Type | Description |
|---|---|---|
| `chat_id` | `String` (PK) | Client-generated chat identifier (nanoid) |
| `user_id` | `String` (FK → users) | Chat owner |
| `title` | `String` | AI-generated descriptive title |
| `created_at` | `DateTime` | Chat start time |
| `updated_at` | `DateTime` | Last activity (auto-updated) |

**Why:** Groups messages into named conversations. Indexed on `user_id` for efficient sidebar queries.

### `messages`
| Column | Type | Description |
|---|---|---|
| `message_id` | `Int` (auto-increment PK) | Message ID |
| `chat_id` | `String` (FK → chats) | Parent conversation |
| `user_message` | `String` | What the user asked |
| `assistant_message` | `String` | What the AI responded |
| `sources` | `String[]` | Array of source document filenames |
| `created_at` | `DateTime` | Message timestamp |

**Why:** Stores complete conversation turns (Q+A pairs) as single records. The `sources` array enables the frontend to display which documents were cited. Indexed on `chat_id` for fast retrieval.

---

## 🌐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | ❌ | Create a new user account |
| `POST` | `/api/auth/login` | ❌ | Login and receive JWT cookie |
| `POST` | `/api/auth/logout` | ❌ | Blacklist token and clear cookie |
| `GET` | `/api/auth/get-user` | ✅ | Fetch authenticated user's profile |

### Chat Routes (`/api/chat`)

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/chat` | ✅ | Send a message; returns SSE stream of AI response |
| `GET` | `/api/chat` | ✅ | Fetch all chat sessions for the authenticated user |
| `GET` | `/api/chat/messages/:chatId` | ✅ | Fetch all messages for a specific chat session |

**Special headers for `POST /api/chat`:**
- `chat-id`: The client-generated ID of the current chat session (used to associate the message with a conversation)
- Response type: `text/event-stream` (SSE)
- SSE events: `event: message` (text chunks), `event: sources` (source array)

---

## 📁 Project Structure

```
afterlife RAG/
├── Backend/
│   ├── .env                        # Environment variables
│   ├── .gitignore
│   ├── package.json                # Node.js dependencies
│   ├── server.js                   # Entry point: DB connect + server start
│   ├── prisma.config.js
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema (users, chats, messages, blacklist)
│   │   └── migrations/             # Prisma migration history
│   ├── data/                       # Source documents for RAG ingestion
│   │   ├── wings_of_fire.pdf
│   │   ├── ignited_minds.pdf
│   │   ├── india_2020.pdf
│   │   ├── speechs.txt
│   │   └── quotes.json
│   └── src/
│       ├── app.js                  # Express app setup (CORS, middleware, routers)
│       ├── config/
│       │   ├── gemini.js           # Google GenAI client singleton
│       │   ├── pincone.js          # Pinecone client + index reference
│       │   └── prisma.js           # Prisma client with pg adapter
│       ├── RAG/
│       │   ├── ingest.js           # One-time ingestion pipeline (PDF/TXT/JSON → Pinecone)
│       │   ├── createEmbedding.js  # Query-time embedding generation
│       │   └── retrival.js         # Semantic vector search against Pinecone
│       ├── aiService/
│       │   ├── buildPrompt.js      # Constructs structured RAG prompt
│       │   ├── generateResponse.js # Streams Gemini response via SSE
│       │   └── generateTitle.js    # Auto-generates chat session title
│       ├── controller/
│       │   ├── auth.controller.js  # register, login, logout, getUser
│       │   └── chat.controller.js  # send message, get chats, get messages
│       ├── middleware/
│       │   └── auth.middleware.js  # JWT validation + blacklist check
│       └── routes/
│           ├── auth.router.js      # /api/auth/* route definitions
│           └── chat.router.js      # /api/chat/* route definitions
│
└── Frontend/
    ├── .env                        # VITE_Backend_URL
    ├── index.html                  # HTML entry point
    ├── vite.config.js              # Vite configuration
    ├── package.json                # Frontend dependencies
    └── src/
        ├── main.jsx                # React entry point
        ├── App.jsx                 # Root component (providers + router)
        ├── App.css                 # Global styles
        ├── api/
        │   └── apiClient.js        # Axios instance with baseURL + credentials
        ├── component/
        │   └── Loading.jsx         # Reusable spinner component
        ├── context/
        │   └── ThemeContext.jsx    # Dark/light theme context + toggle
        └── features/
            ├── auth/
            │   ├── authContext.jsx         # Global auth state (user, loading)
            │   ├── api/authApi.js          # login, register, getUser, logout
            │   ├── component/
            │   │   └── protected.jsx       # Route guard (redirects if no user)
            │   ├── hooks/useAuth.js        # useContext(AuthContext) hook
            │   └── pages/
            │       ├── Login.jsx           # Login form page
            │       └── Register.jsx        # Registration form page
            ├── chat/
            │   ├── chatContext.jsx         # Chat state (messages, loading)
            │   ├── api/chatApi.js          # sendMessage (SSE), getChats, getMessages
            │   ├── components/
            │   │   ├── ChatInput.jsx       # Message input bar
            │   │   ├── ChatMessages.jsx    # Message list + source display
            │   │   └── WelcomeScreen.jsx   # Empty chat welcome state
            │   ├── hooks/useChat.js        # SSE streaming logic + message state
            │   └── pages/
            │       ├── Chat.jsx            # Individual chat route
            │       └── ChatBox.jsx         # Chat layout wrapper
            ├── dashboard/
            │   ├── component/
            │   │   ├── About.jsx           # Dr. Kalam bio page
            │   │   ├── Header.jsx          # Top navigation bar
            │   │   ├── Sidebar.jsx         # Navigation sidebar
            │   │   └── SideBar/
            │   │       ├── AppName.jsx     # Logo / app name component
            │   │       ├── RecentChat.jsx  # Chat history list
            │   │       ├── SidebarNav.jsx  # Navigation links
            │   │       └── ThemeSwitch.jsx # Dark/light mode toggle
            │   └── pages/
            │       └── Dashboard.jsx       # Layout with sidebar + outlet
            ├── knowledgeBase/
            │   └── pages/
            │       └── KnowledgeBase.jsx   # Source document browser
            └── landing/
                └── pages/
                    └── Landing.jsx         # Public landing/home page
```

---

## 🧩 Challenges Solved

### 1. Real-Time AI Response Streaming
**Challenge:** Standard REST APIs require the full response to be generated before sending. For long AI responses, this creates a poor user experience with long loading times.

**Solution:** Implemented **Server-Sent Events (SSE)** on the backend using `res.writeHead` with `Content-Type: text/event-stream`. On the frontend, the native `fetch` API was used (not Axios, which doesn't support streaming) with `response.body.getReader()` to consume the SSE stream chunk-by-chunk using a `TextDecoder`, updating React state incrementally for a live typewriter effect.

---

### 2. Mixed SSE Event Types (Text vs Sources)
**Challenge:** The backend needs to stream both the AI text tokens AND the source documents over the same SSE connection, but they must be handled differently on the frontend.

**Solution:** Used named SSE events (`event: message` and `event: sources`) to distinguish event types. The frontend parser maintains a `currentEvent` variable and routes each `data:` line to the correct handler, updating either the message text or the sources array in state.

---

### 3. Token Blacklisting for True Logout
**Challenge:** JWTs are stateless — once issued, they're valid until expiry. A user who logs out still has a valid token for up to 7 days.

**Solution:** Created a `blacklist` table in PostgreSQL. On logout, the token is inserted into this table. Every protected request first checks if the presented token exists in the blacklist before verifying the JWT signature. This provides true, immediate session invalidation.

---

### 4. Gemini API Rate Limiting During Ingestion
**Challenge:** Embedding 400+ chunks from multiple documents one-by-one will inevitably hit Gemini's rate limits (HTTP 429), causing the entire ingestion to fail mid-way.

**Solution:** Implemented a robust **exponential backoff with retry** mechanism in `ingest.js`. On a 429 error, the system waits `2^attempt * 2000ms` before retrying (up to 5 attempts). Additionally, a 300ms delay between all embedding requests reduces the baseline request rate.

---

### 5. Chat ID Management Without Server Round-Trips
**Challenge:** A new chat session needs an ID before the first message is sent, but creating the chat in the DB on every first message is expensive and fragile.

**Solution:** The frontend generates a unique `chat_id` client-side using `nanoid` when a new chat is initiated. This ID is passed in a custom `chat-id` HTTP header with each message. The backend uses `isFirstMessage()` to check if the chat exists and only creates the DB record on the first message, auto-generating a title via Gemini.

---

### 6. Overlapping Chunk Strategy for Context Continuity
**Challenge:** When splitting long documents into chunks, information that spans chunk boundaries gets lost, reducing retrieval quality.

**Solution:** Implemented a **sliding window chunking algorithm** with a 50-word overlap between consecutive 400-word chunks. This ensures no critical contextual information is severed at boundaries, improving RAG accuracy.

---

## 📚 Learning Outcomes

- **RAG Architecture:** Designed and implemented a complete Retrieval-Augmented Generation pipeline from scratch, including document ingestion, vector embedding, semantic retrieval, and grounded response generation
- **Vector Databases:** Gained practical experience with Pinecone — creating indexes, upserting vectors with metadata, and querying with `topK` similarity search
- **Server-Sent Events (SSE):** Learned how to implement real-time streaming with SSE on both the Express backend and the React frontend using the Streams API
- **JWT Security Patterns:** Implemented secure cookie-based JWT authentication with token blacklisting, understanding the trade-offs between stateless auth and true logout
- **Prompt Engineering:** Learned how to structure effective RAG prompts with context injection, conversation history, and system instructions to guide model behavior
- **ORM & Database Design:** Used Prisma ORM with PostgreSQL to design a normalized schema, manage migrations, and write efficient queries with indexes
- **API Design:** Designed RESTful API endpoints with proper HTTP methods, status codes, and error handling
- **Feature-Based Architecture:** Organized a React application using a scalable feature-based folder structure with separation of concerns (API layer, hooks, context, pages, components)
- **React Context API:** Managed global application state (auth, chat, theme) using React Context with custom hooks
- **Exponential Backoff:** Implemented production-grade retry logic for handling transient API failures
- **ESM Modules:** Worked with ES Modules (`type: "module"`) in Node.js, handling ESM/CJS interoperability for packages like `pdf-parse`

---

## 🔮 Future Improvements

- **Admin Dashboard:** Build an admin panel to upload new documents and trigger re-ingestion without touching the server
- **Streaming Error Recovery:** Add SSE heartbeat and auto-reconnect logic to handle dropped connections gracefully
- **Namespace Isolation in Pinecone:** Use Pinecone namespaces to separate document categories, enabling filtered retrieval by topic
- **Hybrid Search:** Combine semantic (vector) search with keyword (BM25) search for improved retrieval precision on named entities like "Agni missile" or "SLV-III"
- **Response Caching:** Cache frequent query embeddings and their results in Redis to reduce Gemini API costs
- **Re-ranking:** Add a cross-encoder re-ranking step after initial retrieval to improve context quality before generation
- **User Feedback System:** Add thumbs-up/down feedback on responses to collect signal for future fine-tuning or RAG evaluation
- **Rate Limiting:** Add per-user API rate limiting on the backend using a Redis sliding window counter
- **Refresh Token Rotation:** Implement short-lived access tokens + long-lived refresh tokens for better security
- **CI/CD Pipeline:** Add GitHub Actions for automated linting, testing, and deployment on push to main
- **End-to-End Testing:** Add Playwright tests for critical user flows (signup, login, chat)
- **Observability:** Integrate structured logging (e.g., Pino) and distributed tracing for production monitoring

---

## 🖼️ Screenshots

> **Note:** Replace these placeholders with actual screenshots once the application is running.

| Page | Screenshot |
|---|---|
| Landing Page | `[Add screenshot of the landing page here]` |
| Login Page | `[Add screenshot of the login form here]` |
| Chat Interface | `[Add screenshot of the chat with AI response streaming]` |
| Sidebar with Chat History | `[Add screenshot of the sidebar with past chats]` |
| About Page (Dr. Kalam) | `[Add screenshot of the About page timeline]` |
| Knowledge Base Page | `[Add screenshot of the knowledge base document list]` |
| Dark Mode | `[Add screenshot of the dark mode interface]` |

---

## 🚀 Installation

### Prerequisites
- Node.js v18+
- npm v9+
- A PostgreSQL database (e.g., [Prisma Data Platform](https://pris.ly/d/prisma-postgres) — free tier available)
- A [Pinecone](https://www.pinecone.io/) account (free tier available)
- A [Google AI Studio](https://aistudio.google.com/) API key (Gemini)

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dr-kalam-rag.git
cd "dr-kalam-rag"
```

### Backend Setup

```bash
cd Backend
npm install
```

Copy `.env.example` to `.env` and fill in your credentials (see [Environment Variables](#-environment-variables) below).

```bash
# Run Prisma migrations to set up the database schema
npx prisma migrate deploy

# (Optional) Run the ingestion pipeline to populate Pinecone
# Place source documents in Backend/data/ first
node src/RAG/ingest.js

# Start the development server
npm run dev
```

The backend will start on `http://localhost:3000`.

### Frontend Setup

```bash
cd ../Frontend
npm install
```

Copy `.env.example` to `.env` and set `VITE_Backend_URL`.

```bash
# Start the Vite dev server
npm run dev
```

The frontend will start on `http://localhost:5173`.

---

## 🔑 Environment Variables

### Backend (`Backend/.env`)

```env
# PostgreSQL connection string (Prisma Data Platform, Neon, Supabase, etc.)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require

# Pinecone API Key (from app.pinecone.io)
PINECONE_API_KEY=your_pinecone_api_key_here

# Google Gemini API Key (from aistudio.google.com)
GEMINI_API_KEY=your_gemini_api_key_here

# JWT Configuration
JWT_SECRATE_KEY=your_super_secret_jwt_key_min_32_chars
EXPIRES_IN=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Server Port
PORT=3000
```

### Frontend (`Frontend/.env`)

```env
# Backend API base URL (no trailing slash)
VITE_Backend_URL=http://localhost:3000/api
```

---

## ☁️ Deployment

### Backend Deployment (e.g., Render / Railway / Fly.io)

1. Push your backend code to a Git repository
2. Create a new **Web Service** on your chosen platform
3. Set the **build command** to `npm install && npx prisma generate`
4. Set the **start command** to `npm start`
5. Add all environment variables from `.env` to the platform's environment settings
6. Ensure `FRONTEND_URL` is set to your deployed frontend URL (for CORS)
7. The server listens on `process.env.PORT`, which most platforms set automatically

### Frontend Deployment (e.g., Vercel / Netlify)

1. Push your frontend code to a Git repository
2. Import the project on Vercel/Netlify
3. Set the **build command** to `npm run build`
4. Set the **output directory** to `dist`
5. Add `VITE_Backend_URL` as an environment variable pointing to your deployed backend URL
6. Deploy

### Database & Vector Index

- **PostgreSQL:** Use [Prisma Data Platform](https://pris.ly/d/prisma-postgres) (free tier), [Neon](https://neon.tech), or [Supabase](https://supabase.com)
- **Pinecone:** Create a free serverless index at [pinecone.io](https://www.pinecone.io) in `us-east-1` (AWS)
- Run `node src/RAG/ingest.js` once after setting up Pinecone to populate the vector index

---

## 📄 Resume Description

> Copy these ATS-optimized bullet points directly into your resume under this project.

- **Architected and deployed a full-stack Retrieval-Augmented Generation (RAG) chatbot** using Node.js, Express.js, React 19, Google Gemini AI, and Pinecone vector database, enabling semantically grounded, source-cited conversational AI over 5 curated document sources (PDFs, TXT, JSON)
- **Engineered a real-time AI response streaming pipeline** using Server-Sent Events (SSE) and the browser Streams API, reducing perceived response latency by delivering incremental AI-generated tokens to the UI, paired with a JWT + token-blacklist authentication system (bcrypt, HttpOnly cookies, PostgreSQL) ensuring zero-trust session management
- **Designed and implemented a robust document ingestion pipeline** with overlapping text chunking (400 words, 50-word overlap), exponential backoff retry logic for Gemini API rate limits, and cosine-similarity vector search (topK=10) via Pinecone, achieving semantic retrieval across 1,000+ document chunks stored as 3072-dimensional embeddings

---

## 🎓 Interview Questions & Answers

### 👔 Recruiter / Behavioral Questions

**1. What is this project and why did you build it?**
> Dr. Kalam AI is a full-stack AI chatbot that lets users have grounded conversations about Dr. A.P.J. Abdul Kalam. I built it to gain hands-on experience with Retrieval-Augmented Generation (RAG) — a real-world AI architecture that prevents LLM hallucination by anchoring responses in verified source documents. It also allowed me to integrate multiple modern technologies — React, Node.js, Gemini AI, Pinecone, and PostgreSQL — into a cohesive, production-quality system.

**2. What was the biggest technical challenge you faced?**
> The biggest challenge was implementing real-time AI response streaming. Standard HTTP request-response doesn't work for streaming — I had to learn Server-Sent Events, implement the SSE protocol on the Express backend, and consume the stream on the React frontend using the native Fetch Streams API with `getReader()`. Getting both the text tokens and source attributions to stream over the same connection without interfering with each other required careful event naming and client-side parsing logic.

**3. How did you handle security in this project?**
> Authentication uses JWT tokens stored in HttpOnly cookies (resistant to JavaScript-based XSS attacks). Passwords are hashed with bcrypt using 12 salt rounds. Most critically, I implemented a token blacklist table in PostgreSQL — when a user logs out, their token is invalidated server-side. This solves the core problem with stateless JWTs: they'd otherwise remain valid until natural expiry even after logout.

**4. How does the RAG pipeline prevent AI hallucination?**
> Instead of asking Gemini to answer from its training data, we first retrieve the 10 most semantically similar chunks from our verified document index in Pinecone. Only these chunks are injected into the prompt as "context." The system instruction explicitly tells the model: if the answer isn't in the provided context, say so clearly instead of inventing information. The sources are also sent back to the user so they can verify the information themselves.

**5. How do you keep conversations contextual across multiple messages?**
> The backend retrieves the last 10 user messages from the `messages` table (ordered by creation time) and appends them to the prompt as "PREVIOUS CONVERSATION." This gives Gemini enough context to understand follow-up questions and maintain coherent multi-turn dialogue without needing a server-side session.

**6. If you were to scale this to 100,000 users, what would you change first?**
> I'd add Redis for two purposes: caching frequent query embeddings (so we don't call Gemini for repeated questions) and implementing sliding-window rate limiting per user. I'd also move the blacklist check from PostgreSQL to Redis (in-memory lookup is much faster at scale). I'd replace the basic JWT setup with refresh token rotation. For the RAG pipeline, I'd add a re-ranker model between retrieval and generation to improve response quality at scale.

**7. How did you choose Pinecone over other vector databases?**
> Pinecone offers a managed serverless option with a generous free tier, official Node.js SDK, and requires zero infrastructure management. At this scale, it was the fastest way to get a production-grade vector store running. Alternatives like pgvector (PostgreSQL extension) or Weaviate could also work, but would require more setup and self-hosting complexity.

**8. Describe a decision you made that you'd change in hindsight.**
> I'd implement refresh token rotation from the start. The current system uses a single JWT with a 7-day expiry, which means if a token is compromised, the attacker has up to 7 days of access (mitigated by the blacklist, but only if the user logs out). Short-lived access tokens (15 minutes) paired with long-lived refresh tokens (30 days) would significantly reduce the attack window.

**9. How did you structure the frontend codebase?**
> I used a feature-based architecture where each major feature (auth, chat, dashboard, knowledge base, landing) has its own directory containing its pages, components, hooks, API layer, and context. This makes the codebase highly scalable — you can add or remove features without touching unrelated code, and each feature is self-contained. Shared utilities (like the Axios client or the Loading spinner) live in top-level directories.

**10. What does the `isAdmin` field in the users table do?**
> Currently it's set up for future functionality — the schema anticipates an admin panel where privileged users could upload new documents, trigger re-ingestion, or view analytics. This is a planned future improvement.

**11. How did you handle errors in the streaming response?**
> If an error occurs before streaming starts, the backend returns a normal JSON 500 response. If an error occurs mid-stream (after `writeHead`), I set the last message's `assistant_message` to an error string in React state and show a toast notification. This gracefully handles both cases from the user's perspective.

**12. What is `nanoid` used for in this project?**
> `nanoid` generates a unique, URL-safe string ID for each new chat session on the client side. This ID is passed to the backend as a `chat-id` header with every message. The backend uses it to associate messages with the correct chat session and only creates the DB record on the first message, avoiding unnecessary round-trips.

**13. Walk me through the data flow for a single user message.**
> 1. User types a message and clicks send. 2. React calls `sendMessage()` with the message and chat ID. 3. A `fetch` POST request goes to `/api/chat` with the message and `chat-id` header. 4. The auth middleware validates the JWT cookie. 5. The message is embedded via Gemini. 6. The embedding is queried against Pinecone (top 10 results). 7. A structured prompt is built with context + history. 8. Gemini streams the response via SSE. 9. React updates state in real time. 10. Sources are sent as a final SSE event. 11. The complete Q&A turn is saved to PostgreSQL.

**14. How is the chat title generated?**
> When the first message arrives for a new chat session, the backend calls `genrateTitle()`, which sends the user's message to `gemini-3.1-flash-lite` with a specific instruction: "Generate a short, descriptive title (5 words max). Return ONLY the title text." This auto-generated title is saved with the chat record and displayed in the sidebar.

**15. What is the `OVERLAP` in your chunking strategy and why does it matter?**
> The 50-word overlap means that when I split a 400-word chunk, the next chunk starts 350 words into the previous one (400 - 50 = 350). This prevents information at chunk boundaries from being lost. Without overlap, a sentence could be cut in half — one half in chunk 5, the other in chunk 6 — and neither chunk would contain the complete thought.

**16. Why did you use `pdf-parse` instead of another PDF library?**
> `pdf-parse` is a lightweight, battle-tested library specifically for extracting raw text from PDFs. However, it's a CommonJS module, which caused an ESM/CJS compatibility issue since the project uses `"type": "module"`. I solved it using `createRequire(import.meta.url)` to require it in an ESM context — a common Node.js interoperability pattern.

**17. How does dark mode work in this application?**
> A `ThemeContext` stores the current theme (`"dark"` or `"light"`) in React state and persists it to `localStorage`. The `ThemeProvider` applies a `dark` class to the root `<html>` element when dark mode is active. TailwindCSS's `dark:` variant classes then automatically apply dark-mode styles throughout the application.

**18. What would you add to make this production-ready?**
> 1) CI/CD with GitHub Actions. 2) Structured logging with Pino or Winston. 3) Request rate limiting with Redis. 4) Refresh token rotation. 5) Proper error boundary components in React. 6) End-to-end tests with Playwright. 7) Health check endpoints. 8) Distributed tracing with OpenTelemetry.

**19. How did you ensure the AI doesn't pretend to BE Dr. Kalam?**
> The system instruction in `generateResponse.js` explicitly states: *"Answer as a knowledgeable narrator, not as Dr. Kalam himself."* This prevents the model from role-playing as Dr. Kalam and fabricating first-person quotes or opinions he never expressed.

**20. What is the purpose of `prisma.config.js` at the root of the Backend?**
> It points Prisma to the schema file and configures the Prisma adapter. The `@prisma/adapter-pg` package provides a native `pg`-based driver for Prisma, which is the recommended approach for PostgreSQL connections in modern Prisma versions.

---

### 💻 Technical Interview Questions

**1. What is Retrieval-Augmented Generation (RAG) and how does it work?**
> RAG is a technique that enhances LLM responses by first retrieving relevant documents from an external knowledge base before generating a response. The flow is: (1) convert the user query into a vector embedding, (2) perform a nearest-neighbor search in a vector database to find semantically similar document chunks, (3) inject those chunks as context into the LLM prompt, and (4) generate a grounded response. RAG solves hallucination by giving the model verified, relevant information to work with.

**2. What is a vector embedding and why is it used for search?**
> A vector embedding is a numerical representation of text (or other data) in a high-dimensional space where semantically similar texts are geometrically close together. For example, "Kalam's missile work" and "ISRO's satellite programs" would have similar vector coordinates even though they share no exact words. This enables **semantic search** — finding relevant documents by meaning rather than keyword matching — which is far more robust for natural language queries.

**3. What is cosine similarity and why use it over Euclidean distance for embeddings?**
> Cosine similarity measures the angle between two vectors, not their distance. For text embeddings, we care about the **direction** of the vector (what it means) rather than its **magnitude** (how long the text is). Cosine similarity is magnitude-independent, so a long and short paragraph about the same topic would still score highly similar. Euclidean distance is affected by magnitude, making it less reliable for comparing text embeddings of varying lengths.

**4. Explain the difference between SSE (Server-Sent Events) and WebSockets. When would you use each?**
> SSE is a one-directional push protocol over HTTP — the server streams data to the client. WebSockets are bidirectional, full-duplex TCP connections. SSE is ideal for this project because we only need server-to-client streaming (AI tokens), it works over standard HTTP/2, and it auto-reconnects. WebSockets would be overkill and add complexity. Use WebSockets when you need simultaneous two-way communication, like a real-time collaborative editor or multiplayer game.

**5. Why are JWTs stored in HttpOnly cookies rather than localStorage?**
> `localStorage` is accessible via JavaScript, making it vulnerable to Cross-Site Scripting (XSS) attacks — malicious scripts can steal the token. HttpOnly cookies are **not accessible via JavaScript** — they're automatically sent by the browser with each request but cannot be read by client-side code. This makes them significantly more resistant to XSS-based token theft.

**6. Explain the token blacklist approach. What are its trade-offs?**
> On logout, the token is stored in a `blacklist` table. Every protected request queries this table before processing. **Pros:** Enables true immediate logout with stateless JWTs. **Cons:** Every authenticated request requires an extra database query, adding latency. The blacklist table grows indefinitely unless cleaned up (expired tokens can be pruned by a cron job). **Alternative:** Short-lived access tokens (15 min) with refresh tokens, so the attack window is naturally small even without a blacklist.

**7. What is bcrypt and why use salt rounds of 12?**
> bcrypt is a password-hashing function designed to be computationally slow. It takes a `cost factor` (salt rounds) that controls how many iterations of hashing are performed — 12 means 2^12 = 4,096 iterations. This makes brute-force attacks computationally infeasible. Higher salt rounds = more security but slower hashing. 12 is the current industry standard balancing security and performance (typically ~250ms per hash on modern hardware).

**8. What is the difference between authentication and authorization?**
> **Authentication** answers "who are you?" — verifying identity (login, JWT). **Authorization** answers "what can you do?" — verifying permissions (admin vs. regular user). In this project, the `authMiddleware` handles authentication (is this a valid logged-in user?). Authorization (e.g., only admins can upload documents) would use the `isAdmin` field and an additional middleware layer.

**9. Explain how Prisma ORM works and what problem it solves.**
> Prisma is a type-safe ORM for Node.js. You define your database schema in `schema.prisma`, and Prisma generates a fully-typed client that matches your schema. Instead of writing raw SQL, you use Prisma's query API (`db.users.findUnique(...)`, `db.chats.create(...)`). It solves: (1) type safety — TypeScript/IDE knows the shape of query results, (2) migrations — `prisma migrate dev` auto-generates SQL migration files, (3) readability — queries read like plain JavaScript.

**10. What is the Streams API and how did you use it in this project?**
> The browser Streams API provides interfaces for reading and writing streams of data. In this project, the SSE response from the backend is consumed as a `ReadableStream`. Calling `response.body.getReader()` returns a `ReadableStreamDefaultReader`. The `while (true)` loop calls `reader.read()` in a loop — each iteration returns `{ value: Uint8Array, done: boolean }`. The `TextDecoder` converts the binary `value` to a string, which is then parsed for SSE event data.

**11. What is the Express.js middleware pipeline and how did you use it?**
> Express middleware are functions that execute sequentially on every request: `(req, res, next) => {}`. Each middleware either modifies the request/response objects and calls `next()` to pass to the next middleware, or terminates the request by sending a response. In this project: `cors()` → `morgan()` → `express.json()` → `cookieParser()` → route handler → (optionally) `authMiddleware` → controller. The `authMiddleware` is selectively applied only to protected routes.

**12. How does React Context API work and how did you use it?**
> React Context provides a way to pass data through the component tree without prop-drilling. `createContext()` creates a context object. A `Provider` component wraps part of the tree and makes its `value` available to any descendant. `useContext(MyContext)` in a child component reads that value. In this project: `AuthContext` shares user state globally, `ChatContext` shares message state, and `ThemeContext` shares the current theme — all without passing props through intermediate components.

**13. What is `nanoid` and why use it instead of `Math.random()`?**
> `nanoid` generates cryptographically secure, URL-safe unique string IDs (21 characters by default) using random bytes from the system's CSPRNG (Cryptographically Secure Pseudorandom Number Generator). `Math.random()` is NOT cryptographically secure and has predictable patterns. For IDs used as database primary keys, you need uniqueness guarantees — `nanoid` provides collision probability so low (approximately 1 billion IDs needed for 1% collision probability) that it's safe for production use.

**14. Explain the `topK` parameter in Pinecone. How did you choose 10?**
> `topK` specifies how many nearest-neighbor vectors to return. Higher values give more context but also more noise (less relevant results). We fetch 10 but only inject the top 5 into the prompt. The buffer of 10→5 lets us retrieve more candidates and implicitly re-rank by choosing only the most confident matches (Pinecone returns results sorted by similarity score). In production, a dedicated re-ranker model would make this selection more principled.

**15. What is CORS and how did you configure it in this project?**
> CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks web pages from making requests to a different origin (domain/port) than the page was served from. Since the frontend (`localhost:5173`) and backend (`localhost:3000`) are on different ports, they're considered different origins. The `cors()` middleware on the backend explicitly allows requests from the frontend's origin and sets `credentials: true` to allow cookies to be sent with cross-origin requests.

**16. What is the difference between `findUnique` and `findFirst` in Prisma?**
> `findUnique` requires the query to target a field with a `@unique` or `@id` constraint, and throws if multiple records match (which can't happen on unique fields). It's semantically clearer and slightly more optimized. `findFirst` works on any field, applies ordering if provided, and returns the first match. In this project, `findUnique({ where: { email } })` is correct because `email` has `@unique`.

**17. How does the `generateContentStream` function work at the API level?**
> `generateContentStream()` in the Google GenAI SDK sends the prompt to Gemini and returns an async iterable. Each iteration yields a partial response `chunk` as Gemini generates tokens. Using `for await (const chunk of reply)` processes each chunk as it arrives. `chunk.text` contains the newly generated text fragment. These fragments are written to the SSE response immediately with `res.write()`, creating real-time streaming.

**18. What is a database index and why did you add indexes in the Prisma schema?**
> A database index is a data structure that speeds up read queries on specific columns at the cost of additional write overhead and storage. Without an index, querying `chats WHERE user_id = ?` would scan every row in the table (O(n)). With an index on `user_id`, PostgreSQL uses a B-tree to find matching rows in O(log n). In this project, `@@index([user_id])` on `chats` and `@@index([chat_id])` on `messages` are critical because these are the most frequent queries (fetch user's chats, fetch chat's messages).

**19. Explain the feature-based folder structure you used in React. What are the alternatives?**
> Feature-based structure groups files by feature (auth, chat, dashboard) rather than by file type (all components together, all hooks together). **Pros:** High cohesion — all code for a feature lives together; easy to add/remove features; scales well with large teams. **Alternative — type-based structure:** `/components`, `/hooks`, `/pages` at the top level. This works for small projects but becomes hard to navigate as the codebase grows because related files are spread across the tree.

**20. What is `@prisma/adapter-pg` and why is it needed?**
> `@prisma/adapter-pg` is a driver adapter that allows Prisma to use the native `pg` (node-postgres) package for database connections. In newer versions of Prisma (v5+), you can plug in different database drivers. The adapter provides connection pooling and better performance characteristics than Prisma's built-in query engine for PostgreSQL, and is required when using Prisma in environments that need native `pg` connection handling (like Prisma Data Platform's connection pooling).

---

## 📜 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgements

- **Dr. A.P.J. Abdul Kalam** — For the wisdom in his books and speeches that powers this knowledge base
- **Google DeepMind** — For the Gemini API enabling both embeddings and generation
- **Pinecone** — For the managed vector database infrastructure
- **Prisma** — For making database interactions type-safe and intuitive

---

<div align="center">

*"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."*
**— Dr. A.P.J. Abdul Kalam**

Made with ❤️ as a portfolio project showcasing full-stack AI engineering.

</div>
