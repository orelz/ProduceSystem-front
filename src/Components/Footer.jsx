import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";



function Footer() {
  const primary = blue[900];
  const date = new Date();
  return ( 
      <div>
          <Box sx={{flexGrow:1}}>
              <AppBar position='static' color="primary"
              style={{
                  borderRadius:"0 0 25px 25px"
              }}>
                  <Toolbar>
                      <Typography variant='h7'
                       component="div"
                       style={{
                           marginLeft:"auto",
                           marginRight:"auto",
                           textAlign:"center"
                       }}
                       >
                            כל הזכויות שמורות  <br /> ®{date.getFullYear()}
                      </Typography>
                  </Toolbar>
              </AppBar>
          </Box>
      </div>
  );
}

export default Footer;