import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import Banner from "@/components/Banner";
import Invitation from "@/components/Invitation";
import Logo from "@/components/Logo";
import Separator from "@/components/Separator";
import TravelTypes from "@/components/TravelTypes";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" w="100vw" direction="column">
        <Logo />
        <Banner />
        <TravelTypes />
        <Separator />
        <Invitation />
        <Carousel />
      </Flex>
    </>
  );
}
