// import ApplicationLogo from '@/Components/ApplicationLogo';
import * as React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
// import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <Box
            component="section"
            sx={{
                height: "80vh",
                maxWidth: "550px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
            }}
        >
            <Typography
                noWrap
                sx={{
                    m: 0,
                    fontWeight: 300,
                    fontSize: 32,
                    letterSpacing: ".2rem",
                    color: "var(--dark-color)",
                    textDecoration: "none",
                }}
            >
                Uniplace
            </Typography>

            <Typography
                noWrap
                sx={{
                    mb: 2,
                    fontWeight: 300,
                    fontSize: 20,
                    letterSpacing: ".2rem",
                    color: "var(--dark-color)",
                    textDecoration: "none",
                }}
            >
                Marketplace universitário
            </Typography>

            <div>{children}</div>
        </Box>
    );
}
