import streamlit as st
import streamlit.components.v1 as components

st.title("BEC Hub")

if st.button('Redirect to BEC Hub'):
    # Use streamlit's components to run the JS script for redirection
    components.html(
        """
        <script type="text/javascript">
            window.location = 'https://gunakar-polaki.github.io/BECHub/index.html';
        </script>
        """,
        height=0,
    )

st.write("Click the button above to be redirected to the BEC Hub Home page.")
