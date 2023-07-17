import { Box, HStack, Progress, Text } from '@chakra-ui/react';

interface AccordionItemsProps {
  children: React.ReactNode;
  skillName: string;
  progressValue: number;
  margin?: boolean;
}

export const CustomAccordionItems = ({
  skillName,
  progressValue,
  children,
  margin,
}: AccordionItemsProps) => {
  return (
    <Box mt={margin ? '5' : 0}>
      <HStack justifyContent='space-between'>
        <HStack mb='10px'>
          {children}
          <Text>{skillName}</Text>
        </HStack>
        <Box>
          <Text>{progressValue}%</Text>
        </Box>
      </HStack>
      <Progress
        size='md'
        value={progressValue}
        colorScheme='teal'
        hasStripe
        isAnimated
      />
    </Box>
  );
};
