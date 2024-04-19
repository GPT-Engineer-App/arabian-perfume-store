import { Box, Container, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Loja de Perfumes Árabes
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {perfumes.map((perfume) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={perfume.image} alt={perfume.name} />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="teal.600">
                  {perfume.brand}
                </Text>
              </Box>
              <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {perfume.name}
              </Text>
              <Text>{perfume.description}</Text>
              <Button rightIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={3}>
                Comprar
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const perfumes = [
  {
    name: "Oud Mood",
    brand: "Lattafa",
    description: "Um perfume oriental com notas de oud, rosa e especiarias.",
    image: "https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdWQlMjBtb29kJTIwbGF0dGFmYXxlbnwwfHx8fDE3MTM0ODQ4OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Silver Shade",
    brand: "Afnan",
    description: "Fragrância fresca e amadeirada, ideal para todas as ocasiões.",
    image: "https://images.unsplash.com/photo-1622396481237-fbafd2ed6a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBzaGFkZSUyMGFmbmFufGVufDB8fHx8MTcxMzQ4NDg5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Jasmine Wisp",
    brand: "Alhambra",
    description: "Perfume floral com toques de jasmim, perfeito para o dia a dia.",
    image: "https://images.unsplash.com/photo-1601752693424-dce03491ccc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwd2lzcCUyMGFsaGFtYnJhfGVufDB8fHx8MTcxMzQ4NDg5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export default Index;
