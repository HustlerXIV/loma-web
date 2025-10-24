import { createTheme } from "@mui/material";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customGray: Palette["primary"];
  }
  interface PaletteOptions {
    customGray?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    customGray: true;
  }
}

export const theme = createTheme({
  palette: {
    customGray: { main: "#707070" },
    primary: {
      main: "#6C3BD9",
    },
  },
  typography: {
    fontFamily: `'Kanit', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(90deg, #5E5AD3 0%, #842686 100%)",
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            background: "linear-gradient(90deg, #684cd8 0%, #9332a2 100%)",
            boxShadow: "none",
          },
          "&:disabled": {
            background: "linear-gradient(90deg, #c3bce8 0%, #d7b9e2 100%)",
            color: "#f2f2f2",
          },
          minHeight: "56px",
        },
      },
    },
  },
});
