import Link from "@mui/material/Link";
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
import Loading from "@/Components/Loading";

export default function ForgotPassword({ status }) {
    
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    return (
        <GuestLayout>
            <Head title="Esqueci minha senha" />
            <Box noValidate component="form" sx={{ width: '100%' }} onSubmit={onSubmit}>
                <Typography sx={{mb: 2}}>
                    Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos uma senha por e-mail
                    link de redefinição que permitirá que você escolha um novo.
                </Typography>
                <Grid container spacing={0} rowGap={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail"
                            variant="outlined"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                            helperText={errors.email}
                            fullWidth
                        />
                    </Grid>                  
                    <Grid item xs={12} 
                        display={"flex"}
                        alignItems={'center'}
                        justifyContent={'center'}
                        >
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={processing}
                            disableElevation
                            fullWidth
                            endIcon={processing && <Loading />}
                        >
                            {!processing && "Entrar"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
    </GuestLayout>
    );
}
