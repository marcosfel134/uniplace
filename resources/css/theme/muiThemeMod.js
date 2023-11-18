const MuiThemeMod = {

    palette: {
        primary : {
            main: "#19375b",
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
                },
            }
        },
    }
};

export default MuiThemeMod;