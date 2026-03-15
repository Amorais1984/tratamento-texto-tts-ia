import os
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv() # Carrega as variáveis de ambiente do .env
from google.genai import types

app = FastAPI()

# Função para pegar o cliente dinamicamente
def get_client():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        return None
    try:
        return genai.Client(api_key=api_key)
    except Exception as e:
        print(f"Aviso GenAI: {e}")
        return None

class TextRequest(BaseModel):
    text: str

# Lendo a skill que atua como prompt de sistema
def get_system_prompt():
    try:
        with open("skill.md", "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "Atue como um editor de texto, focando em organização, clareza e correção ortográfica/pontuação."

@app.post("/api/process")
async def process_text(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="O texto de entrada não pode ser vazio.")
    
    client = get_client()
    if client is None:
        # Mock de retorno se não houver API key configurada
        return {"processed_text": f"## Texto Recebido (Modo Offline)\n\nO sistema não conseguiu encontrar a variável `GEMINI_API_KEY`.\n\nPor favor, garanta que no terminal em que você iniciou o servidor o comando `set GEMINI_API_KEY=sua_chave` foi executado corretamente antes de rodar o script (ou no Powershell: `$env:GEMINI_API_KEY=\"sua_chave\"`).\n\n--- Texto enviado ---\n\n{request.text}"}

    system_instruction = get_system_prompt()
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=f"Por favor, edite e organize o seguinte texto conforme as regras da skill:\n\n{request.text}",
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.3, # Baixa temperatura para manter a fidelidade e focar na formatação
            )
        )
        return {"processed_text": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Montando a pasta estática para o Frontend
app.mount("/", StaticFiles(directory="static", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
