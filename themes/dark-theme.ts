import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const lightTheme = createTheme({
    palette:{
        mode:'dark',
        secondary:{
            main:'#19857b'
        },
        error:{
            main:red.A400
        }
    },
    components:{
        MuiAppBar:{
            defaultProps:{},
            styleOverrides:{
                root:{
                    backgroundColor:'#4a148c'
                }
            }
        }
    }
})