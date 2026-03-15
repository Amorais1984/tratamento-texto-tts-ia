document.addEventListener('DOMContentLoaded', () => {
    const processBtn = document.getElementById('processBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const spinner = document.querySelector('.spinner');
    const btnText = document.querySelector('.btn-text');

    processBtn.addEventListener('click', async () => {
        const text = inputText.value.trim();
        if (!text) return;

        // UI State: Loading
        processBtn.disabled = true;
        clearBtn.disabled = true;
        inputText.disabled = true;
        spinner.classList.remove('hidden');
        btnText.textContent = 'Processando...';
        
        try {
            const response = await fetch('/api/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Erro ao processar o texto');
            }

            const data = await response.json();
            
            // Parse Markdown and Display
            outputText.innerHTML = marked.parse(data.processed_text);
            copyBtn.disabled = false;

        } catch (error) {
            console.error('API Error:', error);
            outputText.innerHTML = `<div style="color: var(--error); padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px;">
                <strong>Erro:</strong> ${error.message}
            </div>`;
        } finally {
            // UI State: Reset
            processBtn.disabled = false;
            clearBtn.disabled = false;
            inputText.disabled = false;
            spinner.classList.add('hidden');
            btnText.textContent = 'Organizar Texto';
        }
    });

    clearBtn.addEventListener('click', () => {
        inputText.value = '';
        outputText.innerHTML = '<div class="empty-state">O texto editado aparecerá aqui.</div>';
        copyBtn.disabled = true;
        inputText.focus();
    });

    copyBtn.addEventListener('click', async () => {
        try {
            // Get plain text from output, ignoring markdown HTML
            const textToCopy = outputText.innerText;
            await navigator.clipboard.writeText(textToCopy);
            
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copiado! ✓';
            copyBtn.style.background = 'var(--success)';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Falha ao copiar:', err);
        }
    });
});
