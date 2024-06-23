import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ChakraProvider, theme} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>

  );
}

export default App;
