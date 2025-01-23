import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export default function MuiButton() {
    const [formats, setFormats] = useState<string[] | null>(null);
    console.log(formats);
    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[] | null) => {
        setFormats(newFormats);
    };

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<AccessAlarmIcon />}>Start Icon</Button>
                <Button variant='contained' endIcon={<AccessAlarmIcon />} disableElevation disableRipple onClick={() => alert('Clicked')}>End Icon</Button>
                <IconButton aria-label='alarm' color='warning' size='small'>
                    <AccessAlarmIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' size='medium' color='secondary'>
                    <Button>left</Button>
                    <Button>mid</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} color='error' exclusive>
                    <ToggleButton value='bold' aria-label='bold'> <FormatBoldIcon /> </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'> <FormatItalicIcon /> </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'> <FormatUnderlinedIcon /> </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
