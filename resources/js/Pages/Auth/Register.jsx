// import { Link } from '@inertiajs/react';

import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Loading from "@/Components/Loading";

export default function Register({universities}) {

    console.log(universities);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Cadastrar" />

            <Box noValidate component="form" onSubmit={submit}>
                <Grid container spacing={0} rowGap={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            name="name"
                            label="Nome"
                            variant="outlined"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name}
                            helperText={errors.name}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail"
                            variant="outlined"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email}
                            helperText={errors.email}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="Senha"
                            variant="outlined"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors.password}
                            helperText={errors.password}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password_confirmation"
                            name="password_confirmation"
                            label="Confirmação de senha"
                            variant="outlined"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            error={errors.password_confirmation}
                            helperText={errors.password_confirmation}
                            fullWidth
                        />
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
                            {!processing && "Cadastrar"}
                        </Button>
                    </Grid>                    
                    <Grid item xs={12} 
                         display={"flex"}
                         alignItems={'center'}
                         justifyContent={'center'}
                         >
                        <Link href={route("login")} >Fazer login</Link>
                    </Grid>
                </Grid>
            </Box>
        </GuestLayout>
    );
}
