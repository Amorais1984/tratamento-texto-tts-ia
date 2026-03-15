---
name: Edição e Organização de Texto
description: Padronizar a edição de textos brutos, corrigindo ortografia, acentuação, pontuação e organização estrutural para transformar textos desorganizados em conteúdo claro e legível.
---

# skill.md — Edição e Organização de Texto

## Objetivo
Padronizar a edição de textos brutos, corrigindo ortografia, acentuação, pontuação e organização estrutural. O objetivo é transformar textos desorganizados em conteúdo claro, legível e semanticamente coerente.

## Função da Skill
Esta skill deve atuar como um editor de texto inteligente, realizando as seguintes tarefas:
- Corrigir ortografia e acentuação.
- Corrigir pontuação.
- Organizar parágrafos.
- Criar ou ajustar subtítulos quando necessário.
- Melhorar a fluidez e coerência textual.
- Manter o significado original do texto.

## Regras Gerais

### 1. Ortografia e Acentuação
Corrigir automaticamente:
- erros de digitação
- ausência de acentos
- concordância básica

**Exemplo:**
*Entrada:*
voce precisa organizar esse texto para que ele fique mais facil de entender

*Saída:*
Você precisa organizar esse texto para que ele fique mais fácil de entender.

### 2. Pontuação
Aplicar corretamente:
- vírgulas
- pontos finais
- dois pontos
- ponto e vírgula quando necessário

Evitar frases excessivamente longas.

**Exemplo:**
*Entrada:*
o sistema coleta dados depois envia para o servidor e gera relatorios

*Saída:*
O sistema coleta os dados, depois envia para o servidor e gera relatórios.

### 3. Organização de Parágrafos
Dividir blocos grandes de texto em parágrafos menores.

**Regras:**
- cada parágrafo deve conter uma ideia principal
- máximo recomendado: 4 a 6 linhas

**Exemplo:**
*Entrada:*
este sistema foi criado para analisar dados de vendas ele possui varios modulos um modulo coleta dados outro processa e outro gera relatorios isso ajuda empresas a tomar decisões

*Saída:*
Este sistema foi criado para analisar dados de vendas.

Ele possui vários módulos. Um módulo coleta dados, outro processa as informações e um terceiro gera relatórios.

Esse processo ajuda empresas a tomar decisões mais estratégicas.

### 4. Subtítulos
Quando o texto possuir diferentes ideias ou seções, criar subtítulos claros.

**Formato sugerido:**
## Subtítulo

**Exemplo:**
*Entrada:*
o sistema possui tres partes coleta de dados processamento e relatorios

*Saída:*
## Estrutura do Sistema

O sistema possui três partes principais:
- Coleta de dados
- Processamento
- Geração de relatórios

### 5. Melhoria de Contexto
Se o texto estiver confuso ou com frases incompletas:
- reorganizar frases
- melhorar conexão entre ideias
- evitar repetições

Sem alterar o significado original.

### 6. Clareza e Legibilidade
**Aplicar:**
- frases curtas
- vocabulário claro
- organização lógica

**Evitar:**
- redundância
- frases excessivamente longas
- repetição de palavras próximas

## Estrutura de Saída
O texto final deve seguir este padrão:
- Título (se aplicável)
- Subtítulos organizando o conteúdo
- Parágrafos claros
- Pontuação correta
- Ortografia corrigida

## Exemplo Completo
**Entrada:**
o projeto foi criado para analisar dados ele usa python e banco de dados sql tambem possui um painel para visualização dos dados

**Saída:**
## Projeto de Análise de Dados

O projeto foi criado para analisar dados utilizando Python e banco de dados SQL.

Além disso, possui um painel para visualização das informações, permitindo uma análise mais clara dos resultados.

## Regras Importantes
- Nunca remover informações relevantes do texto original.
- Priorizar clareza e legibilidade.
- Manter linguagem formal.
- Não adicionar conteúdo que não exista no texto original, apenas reorganizar e melhorar.

## Observação Técnica
Esta skill é ideal para:
- limpeza de textos para TTS
- preparação de artigos
- organização de PDFs convertidos
- tratamento de transcrições de áudio
