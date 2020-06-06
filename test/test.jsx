import {default as React} from "react";
import {findDOMNode} from "react-dom";

class MyComponent extends React.Component {
	componentDidMount() {
		const x = findDOMNode;
		x(this).scrollIntoView();
	}
	render() {
		return <div />;
	}
}

export default MyComponent;
