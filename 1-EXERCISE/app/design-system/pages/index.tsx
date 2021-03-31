//import * as React from "react";

import { Heading, Grid, Flex } from '@chakra-ui/core';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo">
        <Heading fontSize="xl" lineHeight="normal">
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >

      </Flex>
    </Grid>
  )
}
