import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";


const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
      
        ? {
          // palette values for light mode
  
        }
        : {
          // palette values for dark mode
  
  
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
    },
  });
  export default getDesignTokens;