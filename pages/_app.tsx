import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
