import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log(countries);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }

    return (
        <Box width='250px'>
            <TextField select label='Select Country' value={countries} onChange={handleChange} fullWidth slotProps={{ select: { multiple: true } }} color='secondary'>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='Canada'>Canada</MenuItem>
                <MenuItem value='Mexico'>Mexico</MenuItem>
            </TextField>
        </Box>
    )
}
