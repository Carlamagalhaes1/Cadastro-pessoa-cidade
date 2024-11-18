import { createTheme } from '@mui/material'


export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: "#fbc02d" ,
            dark: "#f9a825" ,
            light: "#ffeb3b" ,
            contrastText: '#ffffff' ,
        },

        secondary: {
            main: "#00bcd4",
            dark: "#26c6da",
            light: "#4dd0e1",
            contrastText: '#ffffff'
            
        },
        background:{
            paper: "#303134",
            default: "#202124",
            
        }

    }
});