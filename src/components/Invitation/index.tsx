import { Text } from "@chakra-ui/react";

export default function Invitation() {
  return (
    <Text
      margin={"0 0 2rem !important"}
      fontSize={{ base: "1.25rem", lg: "2.25rem" }}
      textAlign="center"
      fontWeight="500"
      mt={{ base: "1.5rem", lg: "3.25rem" }}
    >
      Vamos nessa?
      <br />
      Então escolha seu continente
    </Text>
  );
}
