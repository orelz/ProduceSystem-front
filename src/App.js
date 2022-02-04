import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Box, Grid } from "@material-ui/core";

function App() {
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
          <Header />
          <Body />
          <Footer />
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
