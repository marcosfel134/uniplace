import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Login({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setData(name, checked);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    return (
        <GuestLayout>
            <Head title="Entrar" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <Box noValidate component="form" onSubmit={onSubmit}>
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
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="Senha"
                            variant="outlined"
                            type={"password"}
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                            helperText={errors.password}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={data.remember}
                                    name="remember"
                                    onChange={handleCheckboxChange}
                                />
                            }
                            label="Lembrar de mim"
                        />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"end"}
                    >
                        {canResetPassword && (
                            <Link href={route("password.request")}>
                                Esqueci minha senha
                            </Link>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={processing}
                            disableElevation
                            fullWidth
                        >
                            Entrar
                        </Button>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Link href={route("register")}>Criar conta</Link>
                    </Grid>
                </Grid>
            </Box>
        </GuestLayout>
    );
}
