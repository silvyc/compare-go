import { AspectRatio, Box, StackDivider, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box maxWidth="4xl">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            What is COVID-19?
          </Text>
          <Text textAlign="justify" mb={3}>
            
          </Text>
          <Text textAlign="justify">
            The virus can spread from an infected person’s mouth or nose in
            small liquid particles when they cough, sneeze, speak, sing or
            breathe. These particles range from larger respiratory droplets to
            smaller aerosols. It is important to practice respiratory etiquette,
            for example by coughing into a flexed elbow, and to stay home and
            self-isolate until you recover if you feel unwell.
          </Text>
        </Box>
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            COVID-19 Summary video
          </Text>
          <AspectRatio maxW="660px" ratio={2}>
            <iframe
              width="650"
              height="300"
              src="https://www.youtube.com/embed/jWMUBouaqb0"
              title="COVID19 SUMMARY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </AspectRatio>
        </Box>
      </VStack>
    </Box>
  );
}
