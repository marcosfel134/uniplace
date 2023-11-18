// import ApplicationLogo from '@/Components/ApplicationLogo';
import * as React from "react";
import Box from "@mui/system/Box";
// import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <Box
            component="section"
            sx={{
                height: "100vh",
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
            <div>Uniplace</div>

            <div>{children}</div>
        </Box>
    );
}
