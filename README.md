# EcoVigilance

O EcoVigilance é uma plataforma web desenvolvida para facilitar denúncias de descarte irregular de resíduos em Salvador. O projeto visa contribuir para uma cidade mais limpa e sustentável, permitindo que cidadãos reportem problemas ambientais de forma eficiente.

## 🌟 Funcionalidades

- Formulário de denúncia intuitivo
- Dashboard interativo com visualização de dados
- Suporte para upload de fotos/vídeos
- Visualização de estatísticas por categoria e localização
- Interface responsiva para desktop e dispositivos móveis

## 🚀 Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend e Análise de Dados
- Python
- Streamlit
- Plotly
- Pandas

## 🗂️ Estrutura do Projeto

```
EcoVigilance/
├── dash.py              # Dashboard Streamlit
├── index.html          # Página principal
├── success.html        # Página de confirmação
├── denuncia.json       # Armazenamento de dados
├── requirements.txt    # Dependências Python
├── style.css          # Estilos CSS
├── script.js          # Scripts JavaScript
└── imagens/           # Recursos visuais
```

## 📊 Dashboard

O dashboard apresenta visualizações interativas das denúncias:
- Gráficos de barras por categoria
- Gráficos de pizza mostrando proporções
- Filtros por categoria e localização
- Visualização de dados brutos

## 💻 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/EcoVigilance.git
cd EcoVigilance
```

2. Instale as dependências Python:

```bash
pip install -r requirements.txt
```

3. Execute o dashboard:

```bash
streamlit run dash.py
```

4. Para visualizar o site:
- Abra o arquivo `index.html` em seu navegador
- Ou use um servidor local como o Live Server do VSCode

## 📝 Notas de Execução

- Para acessar o projeto:
  - Para acessar o site completo: https://soaaresx.github.io/EcoVigilance/ (é necessário executar o dashboard localmente)

  - Se for executar localmente: 
    - Site principal: use Live Server (http://localhost:5500) e Executar `streamlit run dash.py` para funcionamento do dashboard.

## 📝 Licença

Este projeto está sob a licença MIT.
