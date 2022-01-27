import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";

function ReadProduceForm(props) {
  return (
    <div>
      <Container>
        <Stack spacing={5}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            style={{ alignSelf: "center" }}
          >
            שם הנוהל
          </Typography>

          <Grid container spacing={3}>
            <Typography
              className="title-text-field-produce-read"
              variant="body1"
              style={{ marginLeft: "45px" }}
            >
              תאריך הנוהל
            </Typography>
            <TextField
              id="produceDate"
              disabled
              variant="standard"
              className="text-field-read-produce"
            />
            <Typography
              className="title-text-field-produce-read"
              variant="body1"
              style={{ marginLeft: "45px", marginRight: "45px" }}
            >
              מחבר הנוהל
            </Typography>
            <TextField
              id="produceAuthor"
              disabled
              variant="standard"
              className="text-field-read-produce"
            />
          </Grid>
          <Grid container spacing={3}>
            <Typography
              className="title-text-field-produce-read"
              variant="body1"
              style={{ marginLeft: "75px" }}
            >
              קטגוריה
            </Typography>
            <TextField
              id="produceCategory"
              disabled
              variant="standard"
              className="text-field-read-produce"
            />
          </Grid>
          <Typography
            className="title-text-field-produce-read"
            variant="body1"
            style={{ marginTop: "100px" }}
          >
            תוכן הנוהל
          </Typography>
          <TextField
            id="produceContent"
            disabled
            multiline
            rows={25}
            variant="filled"
          />
        </Stack>
      </Container>
    </div>
  );
}

export default ReadProduceForm;
