import streamlit as st

st.title("BEC Hub")

if st.button('Redirect to BEC Hub'):
    st.markdown('<meta http-equiv="refresh" content="0; url=https://gunakar-polaki.github.io/BECHub/index.html">', unsafe_allow_html=True)

st.write("Click the button above to be redirected to the BEC Hub Home page.")
