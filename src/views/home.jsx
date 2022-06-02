import { Box, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import LogoH from "../components/logohome";

export default function Home() {
  return (
    <Box maxWidth="2xl">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box>
        <Stack
        direction={{
          base: "column",
          "2xl": "row",
        }}
        alignItems="center"
        spacing="30rem"
      >
          <LogoH src="Logo_D1.png" />
          <LogoH src="Logo_Jumbo.png" />
          <LogoH src="Logo_Olimpica.png" />
        </Stack>
        </Box>
      </VStack>
    </Box>
  );
}
