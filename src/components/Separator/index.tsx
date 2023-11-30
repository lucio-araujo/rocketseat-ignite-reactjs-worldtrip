import { Center, Divider } from "@chakra-ui/react";

export default function Separator() {
  return (
    <Center margin={"2rem"} height="50px">
      <Divider
        borderRadius={"1rem"}
        bg="gray.600"
        height={"0.25rem"}
        width={"5rem"}
        orientation="horizontal"
      />
    </Center>
  );
}
