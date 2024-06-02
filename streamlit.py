import streamlit as st

st.title("BEC Hub ")

if st.button('Redirect to BEC Hub '):
    js = "window.open('https://gunakar-polaki.github.io/BECHub/index.html')"
    html = f'<script>{js}</script>'
    st.markdown(html, unsafe_allow_html=True)

st.write("Click the button above to be redirected to the BEC Hub Home page.")
