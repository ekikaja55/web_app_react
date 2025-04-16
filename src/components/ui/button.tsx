import { Button, Stack } from "@chakra-ui/react";
const button = () => {
  return (
    <Stack gap={4} direction="row" p={4}>
      <Button colorScheme="teal" variant="solid">
        Solid
      </Button>
      <Button colorScheme="teal" variant="outline">
        Outline
      </Button>
      <Button colorScheme="teal" variant="ghost">
        Ghost
      </Button>
      <Button colorScheme="teal" variant="plain">
        Link
      </Button>
    </Stack>
  );
};

export default button;
