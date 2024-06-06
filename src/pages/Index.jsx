import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr="4">
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
            About
          </Button>
        </Box>
      </Flex>
      <VStack spacing={4} mt={10}>
        <Text fontSize="2xl">Welcome to MyApp</Text>
        <Text>This is a simple, responsive React application using Chakra UI.</Text>
      </VStack>
    </Container>
  );
};

export default Index;