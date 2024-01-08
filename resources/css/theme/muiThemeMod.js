const MuiThemeMod = {

    palette: {
        primary : {
            main: "#1d28ac",
        },
        success : {
            main: "#00a059",
        },
        warning : {
            main: "#e2c900",
        },
        error : {
            main: "#f20d00",
        },
        outline: '#E0E2E4'
    },

    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    "&.Mui-disabled": {
                        "color": "var(--white-color)",
                        "background": "var(--hover-color)",
                    },
                    textTransform: "none",
                    fontSize: 16,
                    height: "40px",
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px"
                },
            },
        },       
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "var(--dark-color)",
                    textDecoration: "none",
                    fontWeight: 300,
                    "&:hover": {
                        textDecoration: "underline",
                    }
                },
            },
        },
    }
};

export default MuiThemeMod;