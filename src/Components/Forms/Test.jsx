import { Box, Button, Container, createTheme, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Paper, Radio, RadioGroup, Select, ThemeProvider, Typography } from "@material-ui/core";
import { Stack, styled, TextField } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

function Test() {

  const theme = createTheme({
    direction: "rtl",
  });

  const Item = styled(Paper)(({theme}) => ({
      padding: theme.spacing(1),
      textAlign: "center",
  }))

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <form
        //    onSubmit={submitHandler}
           >
            <Box
              sx={{
                width: "auto",
                height: "auto",
                // flexGrow: 1
              }}
            >
              <Container>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="div"
                  style={{ alignSelf: "center" }}
                >
                  יצירת נוהל חדש
                </Typography>

                    <Grid container
                     spacing={2}
                     direction="flex-direction"
                     > 
                    <Grid item xs={7}
                    xl={7}>

                    <Item>

                    <div className="div-form-inputs">
                      <Typography className="typo-name-form" variant="body1">
                        שם הנוהל
                      </Typography>
                      <TextField
                        variant="standard"
                        className="text-field-form"
                        type={String}
                        // value={produceTitle}
                        // onChange={produceTitleHandler}
                        />
                    </div>

                    <div className="div-form-inputs">
                      <Typography className="typo-name-form" variant="body1">
                        מחבר הנוהל
                      </Typography>
                      <TextField
                        variant="standard"
                        className="text-field-form"
                        // value={produceAuthor}
                        // onChange={produceAuthorHandler}
                        />
                    </div>

                    <div className="div-form-inputs">
                      <Typography className="typo-name-form" variant="body1">
                        סוג הנוהל
                      </Typography>
                      <Select
                        labelId="produceCategory-lable"
                        label="type"
                        // value={produceCategory}
                        // onChange={produceCategoryHandler}
                        className="select-field-form"
                        >
                        <MenuItem value={""}></MenuItem>
                        <MenuItem value={"manager"}>ניהולי</MenuItem>
                        <MenuItem value={"medical"}>רפואי</MenuItem>
                      </Select>
                    </div>

                    <div className="div-form-inputs">
                      <Typography className="typo-name-form" variant="body1">
                        סטטוס
                      </Typography>
                      <Select
                        labelId="produceHideOrActice-lable"
                        label="status"
                        // value={produceStatus}
                        // onChange={produceStatusHandler}
                        className="select-field-form"
                        >
                        <MenuItem value={"active"}>פעיל</MenuItem>
                        <MenuItem value={"hide"}>מוסתר</MenuItem>
                      </Select>
                    </div>

                    <div className="div-form-inputs">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">נוהל נעוץ?</FormLabel>
                        <RadioGroup
                          row
                          aria-label="importentProduce"
                          name="row-radio-buttons-importent-produce"
                          className="text-field-form"
                          //   value={importantProduce}
                          //   onChange={importantProduceHandler}
                          >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="כן"
                            />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="לא"
                            />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    </Item>
                    </Grid>

                    <Grid item xs={5}
                    
                    >
                    
                    <Item>

                    <Typography variant="body1">תוכן הנוהל:</Typography>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={10}
                      variant="filled"
                      //   value={produceContent}
                      //   onChange={produceContentHandler}
                      />

</Item>
</Grid>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                      style={{ width: "250px", alignSelf: "center" }}
                      >
                      שלח
                    </Button>

                    </Grid>

              </Container>
            </Box>
          </form>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Test;
