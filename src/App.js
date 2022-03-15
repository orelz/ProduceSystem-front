import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {

  //States: Login + Get produces from the API.
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
//___________


  //UseEffect to Get all the produces from the API - First load.
  useEffect(() => {
    fetch("http://localhost:3000/allProduces")
      .then((resp) => resp.json())
      .then((resp) => {
        console.table(resp);
        setData(resp);
      });
  }, []);
  //___________


  //UseEffect to set use logged in by the browser local storage + Login habdler to update the state.
  useEffect(() => {
    const storeUserLogin = localStorage.getItem("isLoggedIn");

    if(storeUserLogin === "1") {
      setIsLogin(true);
    }
  })

  const loginHandler = (token) => {
    if(token === "Admin"){
      localStorage.setItem('isLoggedIn', '1');
      setIsLogin(true);
    };
  }
  //___________


  // A get method that update the state with every HTTP req's if the forms in the project.
  // The method pass with props to the forms and runs after sending a POST, PATCH or DELETE to the database.
  const updateTabelsState =() =>{
      fetch("http://localhost:3000/allProduces")
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
  }
   //___________

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
        {/* ------- Project Tamplate ------ */}
          <Header isLogin = {isLogin} onLoginHandler = {loginHandler} updateTablesStateHandler ={updateTabelsState} />
          <Body isLogin = {isLogin} dataTables = {data} updateTablesStateHandler ={updateTabelsState} />
          <Footer />
        {/* -------------------------- */}
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
