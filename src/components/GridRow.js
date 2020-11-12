import React from "react";
import { Grid ,GridParent} from "./StyledComponents";

function GridRow({show}) {
  return (
    <GridParent show={show}>
      <Grid >item 1</Grid>
      <Grid >item 2</Grid>
      <Grid >item 3</Grid>
      <Grid >item 4</Grid>
      <Grid >item 5</Grid>
    </GridParent>
  );
}

export default GridRow;
