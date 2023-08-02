import { SimpleGrid } from "@chakra-ui/react";

import CardSkeleton from "../results/CardSkeleton";
import CardContainer from "../results/CardContainer";

const ResultsGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={5}>
        {skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ResultsGrid;
