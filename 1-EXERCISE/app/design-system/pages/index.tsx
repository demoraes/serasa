//import * as React from "react";

import { Heading, Grid, Flex, Input, Link, Button, Text } from '@chakra-ui/core';
import Divider from '../components/Divider';

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
        <Input
          height="50px"
          backgroundColor="gray.500"
          focusBorderColor="red.500"
          placeholder="Nome"
        />


        <Input
          height="50px"
          backgroundColor="gray.500"
          focusBorderColor="red.500"
          placeholder="E-mail"
          marginTop={2}
        />

        <Link
          alignSelf='flex-start'
          marginTop={2}
          fontSize="sm"
          color="gray.100"
          fontWeight="bold"
          _hover={{ color: 'red.500' }}
        >
          Esqueci a minha senha
        </Link>

        <Button
          backgroundColor="red.500"
          height="50px"
          marginTop={6}
          _hover={{ backgroundColor: 'red.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.100"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="red.500"
            fontWeight="bold"
            _hover={{ color: 'red.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.500"
            marginLeft={6}
            _hover={{ backgroundColor: 'red.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
