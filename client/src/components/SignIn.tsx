import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, TextField, Typography, Card, Checkbox, Button, Link, styled } from '@mui/material'
import ForgotPassword from './ForgotPassword';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& input:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
        WebkitTextFillColor: theme.palette.text.primary,
    },
}));

export const SignIn = () => {
    const [usernameError, setUsernameError] = React.useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const validateInputs = () => {
        const username = document.getElementById('username') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        let isValid = true;

        if (!username.value || username.value.length < 6) {
            setUsernameError(true);
            setUsernameErrorMessage('Lütfen geçerli bir kullanıcı adı girin.');
            isValid = false;
        } else {
            setUsernameError(false);
            setUsernameErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Şifreniz en az 6 karakter uzunluğunda olmalıdır.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100vh'
        >
            <Card
                variant='outlined'
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: 3,
                    margin: '20px',
                    borderRadius: '8px',
                }}>
                <Typography
                    variant='h3'
                    align='center'
                    gutterBottom
                    color='primary'
                    fontWeight='bold'>
                    Giriş Yap
                </Typography>
                <Box
                    display='flex'
                    alignItems='center'
                    textAlign='center'
                    flexDirection='column'
                    gap={3}>
                    <FormControl className='form-control-item' >
                        <FormLabel htmlFor='username' sx={{ textAlign: 'left', padding: 1 }}>Kullanıcı Adı</FormLabel>
                        <CustomTextField error={usernameError} helperText={usernameErrorMessage} id="username" type='text' placeholder='Kullanıcı adı' autoComplete='username' autoFocus required fullWidth variant='outlined' color={usernameError ? 'error' : 'primary'} />
                    </FormControl>
                    <FormControl className='form-control-item'>
                        <FormLabel htmlFor='password' sx={{ textAlign: 'left', padding: 1 }}>Şifre</FormLabel>
                        <CustomTextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            id="password"
                            type='password'
                            placeholder='••••••'
                            autoComplete='password'
                            required
                            fullWidth
                            variant='outlined'
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControlLabel className='form-control-item' control={<Checkbox value="remember" color="primary" />} label="Beni hatırla" labelPlacement='end' />
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button className='form-control-item' type="submit" size='large' variant="contained" onClick={validateInputs}> Gİrİş Yap </Button>
                    <Link
                        component="button"
                        type="button"
                        onClick={handleClickOpen}
                        variant="body1"
                        underline='hover'>
                        Şifremi unuttum?
                    </Link>
                </Box >
            </Card>
        </Box >
    )
}
