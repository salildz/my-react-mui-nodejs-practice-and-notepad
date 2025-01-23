import React from 'react'
import { Stack, TextField } from '@mui/material'
import { useState } from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Form Input' required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Nice'} />
                <TextField label='Form Password' helperText='helperText test' type='password' />
                <TextField label='Form Read-Only' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Amount' InputProps={{ startAdornment: '$' }} />
                <TextField label='Weight' type='number' InputProps={{ endAdornment: 'kg' }} />
            </Stack>
        </Stack>
    )
}
