# 🕊️ Dr. Kalam RAG

> A REST API that retrieves and generates responses grounded in the wisdom of
> Dr. A.P.J. Abdul Kalam — ready to power your own chatbot or application.

[![Live Demo](https://img.shields.io/badge/API-Vercel-black?style=flat-square&logo=vercel)](https://dr-kalam-rag.vercel.app)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini-4285F4?style=flat-square&logo=google&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20DB-brightgreen?style=flat-square)

## 🔍 What is this?

Dr. Kalam RAG is a production-ready RAG (Retrieval-Augmented Generation) API.
It uses vectorized knowledge from Dr. Kalam's books, speeches, and quotes stored
in Pinecone — retrieved at query time and passed to Google Gemini to generate
contextually accurate, in-character responses.

Integrate it into any frontend or service to build your own Dr. Kalam chatbot.

## ✨ Features

- 🔌 Clean REST API — drop it into any frontend or service
- 🧠 RAG pipeline — retrieves relevant context before generating responses
- ⚡ Fast responses via Gemini API
- 🌐 Deployed on Vercel

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| LLM | Google Gemini API |
| Vector DB | Pinecone |
| Deployment | Vercel |

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A Google Gemini API key
- A Pinecone account + index

### Installation

```bash
git clone https://github.com/Harsh-X-dev/DR_KALAM_RAG.git
cd DR_KALAM_RAG
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=your_index_name
```

### Run Locally

```bash
node server.js
```

## 📡 API Usage

```http
POST /api/ask
Content-Type: application/json

{
  "question": "What is your vision for India's youth?"
}
```

Response:

```json
{
  "answer": "..."
}
```

## 🌐 Live API

👉 [dr-kalam-rag.vercel.app](https://dr-kalam-rag.vercel.app)
