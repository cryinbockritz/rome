# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 24`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 25
			index: 25
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "obj"
							loc: Object {
								filename: "input.js"
								identifierName: "obj"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
						init: JSObjectExpression {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
							properties: Array [
								JSObjectMethod {
									kind: "method"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "async"
											loc: Object {
												filename: "input.js"
												identifierName: "async"
												end: Object {
													column: 17
													index: 17
													line: 1
												}
												start: Object {
													column: 12
													index: 12
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											identifierName: "async"
											end: Object {
												column: 17
												index: 17
												line: 1
											}
											start: Object {
												column: 12
												index: 12
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 22
											index: 22
											line: 1
										}
										start: Object {
											column: 12
											index: 12
											line: 1
										}
									}
									body: JSBlockStatement {
										body: Array []
										directives: Array []
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 22
												index: 22
												line: 1
											}
											start: Object {
												column: 20
												index: 20
												line: 1
											}
										}
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										params: Array []
										rest: undefined
										returnType: undefined
										thisType: undefined
										typeParameters: undefined
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 19
												index: 19
												line: 1
											}
											start: Object {
												column: 17
												index: 17
												line: 1
											}
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```
