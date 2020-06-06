/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import {descriptions} from "@romejs/diagnostics";
import {AnyNode, JSVariableDeclarator} from "@romejs/ast";
import {Path} from "@romejs/compiler";
import {doesNodeMatchPattern} from "@romejs/js-ast-utils";

function hasFindDOMNodeMemberProperty(node: AnyNode) {
	return (
		node.type === "JSStaticMemberProperty" &&
		doesNodeMatchPattern(node.value, "findDOMNode")
	);
}

/* TODO:
	- cleanup this code
	- write test(s)
	- find invalid assignments
		```
			let x = 5;
			x = findDOMNode;
		```
	- remove test directory
*/
function hasFindDOMNodeDeclaration(node: AnyNode) {
	return (
		node.type === "JSVariableDeclarationStatement" &&
		Boolean(node.declaration.declarations
			.find((declaration: JSVariableDeclarator) => declaration?.init?.type === "JSReferenceIdentifier" &&
				declaration?.init?.name === "findDOMNode"))
	);
}

function hasFindDOMNodeCallExpression(node: AnyNode) {
	return (
		node.type === "JSCallExpression" &&
		doesNodeMatchPattern(node.callee, "findDOMNode")
	);
}

export default {
	name: "reactNoFindDOMNode",

	enter(path: Path): AnyNode {
		const {node} = path;

		if (hasFindDOMNodeDeclaration(node) || hasFindDOMNodeMemberProperty(node) || hasFindDOMNodeCallExpression(node)) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.REACT_NO_FIND_DOM_NODE,
			);
		}

		return node;
	},
};
