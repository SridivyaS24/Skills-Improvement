import {createTheme} from '@mui/material'

const tsWhite = "#FFFFFF"
const tsBlue = "#0B72B9"
const tsOrange = "#FFBA60"
export default createTheme({
    palette:{
        common:{
white:`${tsWhite}`,
orange:`${tsOrange}`,
        },
        primary :{
            main:`${tsWhite}`
        },
        secondary:{
            main:`${tsWhite}`
        }
    }
});