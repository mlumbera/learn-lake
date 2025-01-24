import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const ExampleComponent: React.FC = () => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Text fontSize="xl">Hello, Chakra UI!</Text>
            <Button mt={4} colorScheme="teal">Click Me</Button>
        </Box>
    );
};

export default ExampleComponent;