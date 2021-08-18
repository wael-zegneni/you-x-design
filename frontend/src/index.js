import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <ChakraProvider>
          <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

