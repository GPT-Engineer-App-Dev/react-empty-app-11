import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4}>
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
            About
          </Button>
        </Box>
      </Flex>
      <Flex height="calc(100vh - 64px)" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Welcome to MyApp</Text>
          <Text fontSize="xl">Your journey starts here.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;