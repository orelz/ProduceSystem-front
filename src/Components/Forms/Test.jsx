import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';

function Test() {
    const [produceCategory, setProduceCategory] = React.useState('');

    const handleChangeCategory = (event) => {
        setProduceCategory(event.target.value);
    };
  



    return ( 
        <div>
            <Container >
                <TextField label="שם הנוהל" variant="outlined" />
                <TextField label="מחבר הנוהל" variant="outlined" />

                <FormControl fullWidth >
                    <InputLabel id='produceCategory-lable'>סוג הנוהל</InputLabel>
                    <Select
                    labelId='produceCategory-lable'
                    value={produceCategory}
                    label="type"
                    onChange={handleChangeCategory}
                    >
                        <MenuItem value={"manager"}>ניהולי</MenuItem>
                        <MenuItem value={"medical"}>רפואי</MenuItem>
                    </Select>
                </FormControl>
            </Container>
        </div>
     );
}

export default Test;