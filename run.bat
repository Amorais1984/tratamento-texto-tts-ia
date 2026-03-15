@echo off
echo ===================================================
echo     Iniciando o Editor de Texto Inteligente...
echo ===================================================

if not exist venv (
    echo [INFO] Criando ambiente virtual bash...
    python -m venv venv
)

echo [INFO] Ativando ambiente virtual...
call venv\Scripts\activate.bat

echo [INFO] Instalando dependencias do projeto...
python -m pip install --upgrade pip
pip install -r requirements.txt

echo.
echo =========================================================================
echo  NOTA: Para que a IA funcione, eh necessario ter a GEMINI_API_KEY
echo  Se ainda nao tiver colocado, feche e rode: set GEMINI_API_KEY=sua_chave
echo =========================================================================
echo.
echo [INFO] Iniciando o servidor FastAPI em http://localhost:8000
python main.py
pause
