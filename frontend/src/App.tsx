import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ExampleComponent from './components/ExampleComponent';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Welcome to My Fullstack App</h1>
        <ExampleComponent />
      </div>
    </ChakraProvider>
  );
};

export default App;