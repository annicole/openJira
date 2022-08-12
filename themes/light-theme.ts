import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const lightTheme = createTheme({
    palette:{
        mode:'light',
        background:{
            default: grey[300]
        },
        primary:{
            main:'#4a148c'
        },
        secondary:{
            main:'#19857b'
        }
    },
    components:{
        MuiAppBar:{
            defaultProps:{
                elevation:0
            },
            styleOverrides:{
                root:{
                    backgroundColor:'#4a148c'
                }
            }
        }
    }
})