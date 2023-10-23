import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, purple, blueGrey } from "@mui/material/colors";


const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: purple,
          divider: purple[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: blueGrey[900],
            paper: purple[600],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;