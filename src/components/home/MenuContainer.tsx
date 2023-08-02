import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IoIosBrowsers } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface Props {
  iconName: string;
  buttonHeader: string;
  buttonDescription: string;
}

const MenuContainer = ({
  iconName,
  buttonHeader,
  buttonDescription,
}: Props) => {
  const iconMap: { [key: string]: IconType } = {
    browse: IoIosBrowsers,
    search: BiSearchAlt,
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(iconName);
  };

  return (
    <>
      <Card borderRadius={10}>
        <CardBody>
          <Center>
            <VStack>
              <Icon
                boxSize={10}
                key={iconName}
                as={iconMap[iconName]}
                padding="5px"
              />
              <Button
                onClick={routeChange}
                height="100%"
                width="100%"
                padding={4}
                variant="outline"
                colorScheme="black"
              >
                <Center>
                  <VStack>
                    <Box textStyle="h2">{buttonHeader}</Box>
                    <Box textStyle="h4">{buttonDescription}</Box>
                  </VStack>
                </Center>
              </Button>
            </VStack>
          </Center>
        </CardBody>
      </Card>
    </>
  );
};

export default MenuContainer;
