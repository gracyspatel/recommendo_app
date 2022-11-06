import React from "react";

import { Container, Wrap, Stack, WrapItem } from "@chakra-ui/react";
import AboutCard from "../Components/AboutCard";

const AboutUs = () => {
  return (
    <Container as={Stack} maxW={"8xl"} style={{ height: "70vh" }}>
      <Stack
        mt={6}
        direction={"row"}
        spacing={1}
        flex
        align={"center"}
        justify={"space-evenly"}
      >
        <Wrap spacing="30px">
          <WrapItem>
            <AboutCard m={4} name={'Gracy Patel'}/>
          </WrapItem>
          <WrapItem>
            <AboutCard m={4} name={'Parth Patel'}/>
          </WrapItem>
        </Wrap>
      </Stack>
    </Container>
  );
};

export default AboutUs;
