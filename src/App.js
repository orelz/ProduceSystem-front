import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Box, Grid } from "@material-ui/core";
import { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (token) => {
    if(token === "Admin"){
      setIsLogin(true);
    };
  }

  return (
    <div className="App" dir="rtl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} >
          <Header isLogin = {isLogin} onLoginHandler = {loginHandler} />
          <Body isLogin = {isLogin} />
          <Footer />
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
