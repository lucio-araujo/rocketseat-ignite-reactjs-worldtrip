import { Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      justify="center"
      mx="auto"
      maxW="1160px"
      minW="275px"
      flexWrap="wrap"
      css={{ columnGap: "2rem", rowGap: "1.6875rem" }}
      px="50px"
      mt={{ base: "2.25rem", lg: "7.125rem" }}
    >
      <Flex
        direction={isWideVersion ? "column" : "row"}
        alignItems="center"
        justify="center"
        flex="1"
        minWidth="158px"
      >
        {isWideVersion && <Image src="/cocktail.svg" h="85px" alt="Cocktail" />}
        {!isWideVersion && (
          <Image src="/ellipse.svg" h="8px" mr="0.5rem" alt="Ellipse" />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          vida noturna
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="85px"
      >
        {isWideVersion && <Image src="/surf.svg" h="85px" alt="Surf" />}
        {!isWideVersion && (
          <Image src="/ellipse.svg" h="8px" mr="0.5rem" alt="Ellipse" />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          praia
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="113px"
      >
        {isWideVersion && <Image src="/tower.svg" h="85px" alt="Tower" />}
        {!isWideVersion && (
          <Image src="/ellipse.svg" h="8px" mr="0.5rem" alt="Ellipse" />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          moderno
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="100px"
      >
        {isWideVersion && <Image src="/museum.svg" h="85px" alt="Museum" />}
        {!isWideVersion && (
          <Image src="/ellipse.svg" h="8px" mr="0.5rem" alt="Ellipse" />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          clássico
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="101px"
      >
        {isWideVersion && <Image src="/earth.svg" h="85px" alt="Earth" />}
        {!isWideVersion && (
          <Image src="/ellipse.svg" h="8px" mr="0.5rem" alt="Ellipse" />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          e mais...
        </Heading>
      </Flex>
    </Flex>
  );
}
