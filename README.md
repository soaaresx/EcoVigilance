# EcoVigilance

O EcoVigilance é uma plataforma web desenvolvida para facilitar denúncias de descarte irregular de resíduos em Salvador. O projeto visa contribuir para uma cidade mais limpa e sustentável, permitindo que cidadãos reportem problemas ambientais de forma eficiente.

## 🌟 Funcionalidades

- Formulário de denúncia intuitivo
- Dashboard interativo com visualização de dados
- Suporte para upload de fotos/vídeos
- Visualização de estatísticas por categoria e localização
- Interface responsiva para desktop e dispositivos móveis

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Python
- Streamlit
- Plotly
- Pandas

## 📊 Dashboard

O dashboard apresenta visualizações interativas das denúncias:
- Gráficos de barras por categoria
- Gráficos de pizza mostrando proporções
- Filtros por categoria e localização
- Visualização de dados brutos

## 💻 Como Executar

1. Instale as dependências Python:

```bash
pip install streamlit pandas plotly

```

2. Execute o dashboard:

```bash
streamlit run dash.py
```

3. Para visualizar o site:
- Abra o arquivo `index.html` em seu navegador
- Ou use um servidor local como o Live Server do VSCode

## 📝 Notas de Execução

- O dashboard Streamlit rodará em `http://localhost:8501`
- Certifique-se que o arquivo `denuncia.json` está na mesma pasta do `dash.py`
- As imagens do banner devem estar na pasta `imagens/`

## 📝 Licença

Este projeto está sob a licença MIT.
