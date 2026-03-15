<div align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/Gemini_AI-1A73E8?style=for-the-badge&logo=google&logoColor=white" alt="Gemini">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</div>

# AI Text Editor — Limpeza e Tratamento para TTS

Uma aplicação Web que atua como um editor inteligente de texto, criada especialmente focar em correção ortográfica, pontuação, organização de parágrafos e melhoria da legibilidade global de textos não estruturados e degravações (transcrições automáticas, PDFs desordenados, falas brutas).

Esse projeto foi concebido pensando inicialmente na esteira de tratamento da informação antes da geração de voz via IA (TTS), preparando textos perfeitos e foneticamente coerentes para a criação de audiobooks!

## 🚀 Como Funciona

A aplicação possui um Core (`main.py`) com FastAPI que integra de forma direta e assíncrona com o **Google GenAI** (Modelo: `gemini-2.5-flash`).

As regras exatas do que o LLM deve fazer com o seu texto estão parametrizadas e documentadas no arquivo [`skill.md`](skill.md) – que atua nativamente como o *System Prompt* (Instrução Dinâmica) da IA. Ou seja: você muda as regras ali e o comportamento do Web App muda instantaneamente.

## 🛠️ Tecnologias
- **Backend**: Python, FastAPI, Uvicorn, SDK de Geração de IA do Google (`google-genai`).
- **Frontend**: Vanilla HTML / CSS (`Glassmorphism Premium UI`) / Vanilla JS.
- **Configuração**: `python-dotenv` para gerenciamento seguro da chave.

## ⚙️ Interface
Interface em "Glassmorphism" construída com *glow orbs* estéticos e animada inteiramente em CSS puro. Suporta renderização dinâmica (Markdown via API HTTP Fetcher). 

## 📦 Como Instalar e Rodar

1. **Baixar o repositório** e abri-lo na sua máquina Windows.
2. Inserir sua credencial:
   - Abra o arquivo `.env` e coloque sua chave de API válida ao lado do `=` (sem aspas):
     `GEMINI_API_KEY=AIzaSySuaChaveAqui`
3. Executar o **`run.bat`**:
   - Dê um duplo-clique no arquivo! Ele faz todo o processo sozinho:
     - Cria o ambiente virtual (`venv`)
     - Instala as dependências de roteamento e de IA (`requirements.txt`)
     - Inicia o servidor local automaticamente!
4. **Abrir no Navegador**:
   - Acesse `http://localhost:8000` e cole seu texto sujo na esquerda.

## 📂 Arquitetura de Pastas

```text
/tratamento-texto
│
├── static/                 # Todos os arquivos que o FastAPI devolve ao navegador
│   ├── index.html          # O Corpo Semântico da Página
│   ├── styles.css          # Estilização Neon + Glassmorphism Layout
│   └── app.js              # Fetch à API para injetar o output na caixa esquerda.
│
├── main.py                 # O servidor REST. Hospeda o front e orquestra a chamada de IA.
├── requirements.txt        # Dependências de bibliotecas de Python do projeto.
├── run.bat                 # Script super simples para Windows fazer deploy e on-boarding local.
├── skill.md                # ❤️ O Cérebro da Operação. É lido em runtime pelo main.py.
├── .env                    # Suas chaves de ambiente secreto (Não commitar).
└── .gitignore              # Lista de exclusão do git.
```

---
Feito de desenvolvedor para desenvolvedor. ☕
