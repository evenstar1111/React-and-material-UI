import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function ComponentsBasic() {
  return (
    <Container disableGutters>
      <Box width={1} height={300} bgcolor="success.main"></Box>
    </Container>
  );
}

export default ComponentsBasic;
