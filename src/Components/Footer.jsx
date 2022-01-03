import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";



function Footer() {
  const primary = blue[900];
  return ( 
      <div>
          <Box sx={{flexGrow:1}}>
              <AppBar position='static' color="primary">
                  <Toolbar>
                      <Typography variant='h6'
                       component="div"
                       style={{
                           marginLeft:"auto",
                           marginRight:"auto"
                       }}
                       >
                          כל הזכויות שמורות
                      </Typography>
                  </Toolbar>
              </AppBar>
          </Box>
      </div>
  );
}

export default Footer;