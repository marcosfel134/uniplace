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
                gap: 2,
                p: 2,
            }}
        >
            <Typography
                // variant="h6"
                // component="a"
                noWrap
                sx={{
                    my: 2,
                    fontWeight: 700,
                    fontFamily: "monospace",
                    fontSize: 36,
                    letterSpacing: "0",
                    color: "var(--primary-color)",
                    textDecoration: "none",
                }}
            >
                /logo/
            </Typography>

            <div>{children}</div>
        </Box>
    );
}
