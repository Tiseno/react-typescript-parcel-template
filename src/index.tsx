import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.PureComponent {
    override render() {
        return <h1>Hello world!</h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
);
