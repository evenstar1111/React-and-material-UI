import React from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";

const StyledButtonWithProps = styled(({ color, ...other }) => <ButtonBase {...other} />)({
    background: (props) =>
        props.color === "primary"
            ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            : props.color === "secondary"
            ? "linear-gradient(45deg, #6b91fe 30%, #53c0ff 90%)"
            : "#f0f2fc",
    boxShadow: (props) =>
        props.color === "primary"
            ? "0 3px 5px #ff69874d"
            : props.color === "secondary"
            ? "0 3px 5px #6975ff4d"
            : "2px 2px 4px #0000002b",
    color: (props) => (props.color === "primary" || props.color === "secondary" ? "#fff" : "#000"),
    padding: ".8em 1em",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    borderRadius: "6px",
    transition: "all 0.3s",

    "& .MuiTouchRipple-root": {
        opacity: (props) => (props.color === "primary" || props.color === "secondary" ? "1" : "0.3"),
    },

    "&:hover": {
        boxShadow: (props) =>
            props.color === "primary"
                ? "0 3px 5px #ff69874d"
                : props.color === "secondary"
                ? "0 3px 5px #6975ff4d"
                : "#0000001c 3px 4px 8px",
    },
});

export class FancyButton extends React.Component {
    render() {
        return (
            <Box textAlign="center">
                <StyledButtonWithProps
                    className="mt-4 mr-3"
                    color="primary"
                    onClick={() => console.log("button is clicked.")}
                >
                    <div className="text-wrapper">greeting text.</div>
                </StyledButtonWithProps>
                <StyledButtonWithProps className="mt-4" color="secondary">
                    <div className="text-wrapper">Secondary button</div>
                </StyledButtonWithProps>
            </Box>
        );
    }
}

export default FancyButton;
