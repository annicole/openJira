import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

const basicTheme= createTheme({
  palette:{
    mode:'dark'
  }
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
