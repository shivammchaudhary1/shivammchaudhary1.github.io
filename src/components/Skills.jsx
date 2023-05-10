import React from "react";

import { Box, Image, Grid, GridItem } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Grid templateColumns={{ base: "repeat(5, 1fr)" }} gap={6}>
      {/* //Frontend */}
      <GridItem>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="Dan Abramov"
          />
        </Box>
      </GridItem>
      {/* //Backend */}
      <GridItem>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="Dan Abramov"
          />
        </Box>
      </GridItem>

      {/* Platform and Tool  */}

      <GridItem>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://avatars.githubusercontent.com/u/7892489?s=200&v=4"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Dan Abramov"
          />
          <Image
            //   borderRadius="full"
            boxSize="150px"
            src="https://code.visualstudio.com/assets/images/code-stable.png"
            alt="Dan Abramov"
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Skills;
