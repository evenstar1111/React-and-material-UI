import React, { Component } from "react";
import FancyCard from "./components/FancyCard";
import FancyButton from "./components/Buttons/FancyButton";

export class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <div className="mt-4">
                <FancyCard>
                    <FancyButton />
                </FancyCard>
            </div>
        );
    }
}

export default App;
