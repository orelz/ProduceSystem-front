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
        <Grid xs={8} justifyContent="center" alignItems="center">
          <Header />
          <Body />
          <Footer />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
