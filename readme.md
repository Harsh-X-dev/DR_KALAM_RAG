
# 🕊️ Dr. Kalam RAG

> A conversational AI that lets you talk with the wisdom of Dr. A.P.J. Abdul Kalam — powered by Retrieval-Augmented Generation.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat-square&logo=vercel)](https://dr-kalam-rag.vercel.app)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini-4285F4?style=flat-square&logo=google&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20DB-brightgreen?style=flat-square)

## 🔍 What is this?

Dr. Kalam RAG is an AI chatbot built using the RAG (Retrieval-Augmented Generation) architecture. It uses vectorized knowledge from Dr. Kalam's books, speeches, and quotes stored in Pinecone, retrieved at query time, and passed to Google Gemini to generate contextually accurate, in-character responses.

## ✨ Features

- 💬 Ask questions and get answers in Dr. Kalam's voice and philosophy
- 🧠 RAG pipeline — retrieves relevant context before generating responses
- ⚡ Fast responses via Gemini API
- 🌐 Deployed and accessible via Vercel

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

## 🌐 Live Demo

👉 [dr-kalam-rag.vercel.app](https://dr-kalam-rag.vercel.app)



