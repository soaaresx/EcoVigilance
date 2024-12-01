import streamlit as st
import pandas as pd
import plotly.express as px

#carregar os dados
DATA_PATH = "denuncia.json"
@st.cache_data
def load_data(file_path):
    return pd.read_json(file_path)
data = load_data(DATA_PATH)

st.title("Dashboard EcoVigilance")

# barra de navegação
st.sidebar.title("Filtros")
categoria = st.sidebar.selectbox(
    "Selecione a categoria",
    options=["Todas as Categorias"] + data["categoria"].unique().tolist()
)

local = st.sidebar.selectbox(
    "Selecione o local",
    options=["Todos os Locais"] + data["local"].unique().tolist()
)

mostrar_dados_brutos = st.sidebar.checkbox("Mostrar dados brutos", False)

# mostrar os dados brutos
if mostrar_dados_brutos:
    st.write(data)

# filtrar os dados
if categoria != "Todas as Categorias":
    data = data[data["categoria"] == categoria]

if local != "Todos os Locais":
    data = data[data["local"] == local]

# dados por categoria
categoria_count = data["categoria"].value_counts().reset_index()
categoria_count.columns = ["Categoria", "Quantidade"]

# gráfico barras por categoria
st.subheader("Denúncias por categoria")
fig_bar = px.bar(
    categoria_count,
    x="Categoria",
    y="Quantidade",
    labels={"Quantidade": "Total de denúncias", "Categoria": "Categoria"},
    color="Quantidade",
    text="Quantidade"
)
fig_bar.update_traces(textposition="outside")
st.plotly_chart(fig_bar)

# gráfico pizza por categoria
st.subheader("Proporção de denúncias por categoria")
fig_pie = px.pie(
    categoria_count,
    names="Categoria",
    values="Quantidade",
    hole=0.3
)
st.plotly_chart(fig_pie)

# dados por local
local_count = data["local"].value_counts().reset_index()
local_count.columns = ["Local", "Quantidade"]

# gráfico barras por local 
st.subheader("Locais com mais denúncias")
top_locais = local_count.head(10)
fig_local_bar = px.bar(
    top_locais,
    x="Local",
    y="Quantidade",
    labels={"Quantidade": "Total de denúncias", "Local": "Local"},
    color="Quantidade",
    text="Quantidade"
)
fig_local_bar.update_traces(textposition="outside")
st.plotly_chart(fig_local_bar)
