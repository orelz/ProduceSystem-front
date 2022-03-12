import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);

  const loginHandler = (token) => {
    if(token === "Admin"){
      setIsLogin(true);
    };
  }

  //Get all the produces from tha API
  useEffect(() => {
    fetch("http://localhost:3000/allProduces")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  const updateTabelsState =() =>{
      fetch("http://localhost:3000/allProduces")
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
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
          <Header isLogin = {isLogin} onLoginHandler = {loginHandler} updateTablesStateHandler ={updateTabelsState} />
          <Body isLogin = {isLogin} dataTables = {data} updateTablesStateHandler ={updateTabelsState} />
          <Footer />
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
