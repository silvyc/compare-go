import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    cokiBlue: {
      400: "#08b504",
      500: "#CCF3CC",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "#E2F9E2"
      }
    })
  },
});
