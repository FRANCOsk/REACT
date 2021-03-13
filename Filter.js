import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// popis komponentu Grid je na stranke https://material-ui.com/components/grid/
// vsetky ostatne komponenty z material-ui kniznice

// je pouzity TextField na vyber datumu, pre viac funkcionality je mozne vymenit za @material-ui/pickers

const colors = [
    { value: 'biela' , text: 'Biela'  },
    { value: 'cierna', text: 'Čierna' },
    { value: 'zlta'  , text: 'Žltá'   },
]

export default function Filter() {
    const [ selectValue, setSelectValue ] = React.useState( 'biela' );

    const handleChange = (event) => {
        setSelectValue( event.target.value );
    };

    return (
        <Grid container className="Filter" spacing={2}>
            <Grid item xs={1}>
                <TextField
                    id="date1"
                    type="date"
                    defaultValue="2020-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={1}>
                <TextField
                    id="date2"
                    type="date"
                    defaultValue="2020-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={6}/>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
            <Grid item xs={1}>
                <Select
                    labelId="selectColor"
                    id="selectColor"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {colors.map( ( color ) => ( 
                        <MenuItem value={color.value}>{color.text}</MenuItem>
                    ) ) }
                </Select>
            </Grid>
        </Grid>
    );
}
