import React, { Component } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import "./styles.scss";

export class FancyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box
                maxWidth={620}
                minHeight={255}
                classes={{ root: "pretty-card" }}
                mx="auto"
                borderRadius="6px"
                borderColor="info.dark"
                borderLeft={6}
            >
                <Grid container wrap="nowrap">
                    <Grid xs="auto" item>
                        <Box position="relative" zIndex="1" mr="75px">
                            <Box width={109} height={109} borderRadius="300px" bgcolor="rgba(191, 16, 16, 0.75)"></Box>
                            <Box
                                classes={{ root: "cirlcle-2" }}
                                position="absolute"
                                left="25px"
                                top="0"
                                bottom="0"
                                zIndex="-1"
                                width={109}
                                height={109}
                                borderRadius="300px"
                            ></Box>
                        </Box>
                    </Grid>
                    <Grid xs="auto" container item direction="column">
                        <Typography component="h2" classes={{ root: "title title-margin" }}>
                            Main title
                        </Typography>
                        <Typography component="h4" classes={{ root: "sub-title sub-title-margin" }}>
                            Good day
                        </Typography>
                        <Typography component="p" classes={{ root: "information" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaec molestiae hic distinctio.
                        </Typography>
                    </Grid>
                </Grid>
                {this.props.children ? this.props.children : null}
            </Box>
        );
    }
}

export default FancyCard;
