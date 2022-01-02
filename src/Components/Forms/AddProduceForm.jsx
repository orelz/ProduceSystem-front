import {
    Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import {Stack } from "@mui/material";
import React from "react";

function AddProduceForm() {
  const [produceCategory, setProduceCategory] = React.useState("");
  const [produceHideOrActice, setProduceHideOrActice] = React.useState("");

  const handleChangeCategory = (event) => {
    setProduceCategory(event.target.value);
  };

  const handleChangeHideOrActive = (event) => {
    setProduceHideOrActice(event.target.value);
  };

  return (
    <div dir="rtl">
      <Container>
        <Stack spacing={5}>

        <Typography variant="h4" gutterBottom component="div">
        יצירת נוהל חדש
      </Typography>

          <TextField label="שם הנוהל" variant="outlined"/>
          <TextField label="מחבר הנוהל" variant="outlined" />

          <FormControl fullWidth>
            <InputLabel id="produceCategory-lable">סוג הנוהל</InputLabel>
            <Select
              labelId="produceCategory-lable"
              value={produceCategory}
              label="type"
              onChange={handleChangeCategory}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"manager"}>ניהולי</MenuItem>
              <MenuItem value={"medical"}>רפואי</MenuItem>
              <MenuItem value={"medical"}>ארכיון נהלים לא פעילים</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="produceHideOrActice-lable">סטטוס</InputLabel>
            <Select
              labelId="produceHideOrActice-lable"
              value={produceHideOrActice}
              label="status"
              onChange={handleChangeHideOrActive}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"manager"}>פעיל</MenuItem>
              <MenuItem value={"medical"}>מוסתר</MenuItem>
            </Select>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">נוהל נעוץ?</FormLabel>
            <RadioGroup
              row
              aria-label="importentProduce"
              name="row-radio-buttons-importent-produce"
            >
              <FormControlLabel value="yes" control={<Radio />} label="כן" />
              <FormControlLabel value="no" control={<Radio />} label="לא" />
            </RadioGroup>
          </FormControl>

          <TextField
          id="outlined-multiline-static"
          label="תוכן הנוהל"
          multiline
          rows={10}
          defaultValue="הקלד כאן"
        />

        <Button variant="contained" size="large">שלח</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default AddProduceForm;
