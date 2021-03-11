import { createMuiTheme, lighten, darken } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        background: {
            paper: "#f9f9f9",
            default: "#e7e7e7",
        },
        primary: {
            main: "#8c1d40", // ASU red
            light: lighten("#8c1d40", 0.02),
            dark: darken("#8c1d40", 0.02)
        },
        secondary: {
            main: "#ffc627",  // ASU yellow
            light: lighten("#ffc627", 0.02),
            dark: darken("#ffc627", 0.02)
        },
        error: {
            main: "#BF3617",
            light: lighten("#BF3617", 0.02),
            dark: darken("#BF3617", 0.02)
        },
        warning: {
            main: "#F2AB27",
            light: lighten("#F2AB27", 0.02),
            dark: darken("#F2AB27", 0.02)
        },
        info: {
            main: "#1AD994",
            light: lighten("#1AD994", 0.02),
            dark: darken("#1AD994", 0.02)
        },
        success: {
            main: "#7DBF17",
            light: lighten("#7DBF17", 0.02),
            dark: darken("#7DBF17", 0.02)
        },
        white: {
            main: '#ffffff',
            light: lighten("#ffffff", 0.02),
            dark: darken("#ffffff", 0.02)
        },
        gray: {
            main: '#dddddd',
            light: lighten("#dddddd", 0.02),
            dark: darken("#dddddd", 0.02)
        },
        black: {
            main: '#0D0D0D',
            light: lighten("#0D0D0D", 0.02),
            dark: darken("#0D0D0D", 0.02),
            full: '#000000',
        },
        action: {
            active: lighten("#8c1d40", 0.5),
            hover: lighten("#8c1d40", 0.5),
            default: "none",
            hoverOpacity: '0.04',
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: '0.08',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: '0.38',
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: '0.12',
            activatedOpacity: '0.12 ',
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        }
    },
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h1',
                h2: 'h2',
                h3: 'h3',
                h4: 'h4',
                h5: 'h5',
                h6: 'h6',
                subtitle1: 'h2',
                subtitle2: 'h2',
                body1: 'span',
                body2: 'span',
            },
        },
    },
    shadows: [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.025),0px 1px 1px 0px rgba(0,0,0,0.025),0px 1px 3px 0px rgba(0,0,0,0.025)",
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    ],
    typography: {
        htmlFontSize: 16,
        fontSize: 14,
        fontFamily: "'Roboto','Helvetica',sans-serif",
        h1: {
            fontFamily: "'Roboto','Helvetica',sans-serif"
        },
        h2: {

        },
        h3: {
            fontFamily: "'Roboto','Helvetica',sans-serif"
        },
        h4: {
            fontFamily: "'Roboto','Helvetica',sans-serif"
        },
        h5: {
            fontFamily: "'Roboto','Helvetica',sans-serif"
        },
        h6: {
            fontFamily: "'Roboto','Helvetica',sans-serif"
        },
        subtitle1: {

        },
        subtitle2: {
            
        },
        body1: {
            lineHeight: 1.25
        },
        body2: {
            lineHeight: 1
        }
    },
    overrides: {
        MuiButtonBase: {
            root: {
                display: 'flex',
                padding: '0.5em'
            }
        }
    }
});

export default theme;