import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                    <FormControlLabel value='0-1' control={<Radio color='secondary' />} label='0-1' />
                    <FormControlLabel value='1-3' control={<Radio color='success' />} label='1-3' />
                    <FormControlLabel value='3-5' control={<Radio color='error' />} label='3-5' />
                    <FormControlLabel value='5+' control={<Radio />} label='5+' />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
