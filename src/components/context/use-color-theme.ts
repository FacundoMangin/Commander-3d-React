import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import theme, { getDesignTokens } from "./theme";
const preMode = localStorage.getItem("modoDark");
const defaultMode = preMode === "light" || preMode === "dark" ? preMode : "light";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>(defaultMode);

  const toggleColorMode = () =>
    // setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      setMode((prevMode) => {
        const newMode = prevMode === "light" ? "dark" : "light";
        localStorage.setItem("modoDark", newMode);
        return newMode;
      });

    
  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};