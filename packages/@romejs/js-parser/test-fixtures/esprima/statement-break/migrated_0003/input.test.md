# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-break > migrated_0003`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 45
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSLabeledStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 44
					index: 44
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			label: JSIdentifier {
				name: "__proto__"
				loc: Object {
					filename: "input.js"
					identifierName: "__proto__"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
			body: JSWhileStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 44
						index: 44
						line: 1
					}
					start: Object {
						column: 11
						index: 11
						line: 1
					}
				}
				test: JSBooleanLiteral {
					value: true
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 22
							index: 22
							line: 1
						}
						start: Object {
							column: 18
							index: 18
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 44
							index: 44
							line: 1
						}
						start: Object {
							column: 24
							index: 24
							line: 1
						}
					}
					body: Array [
						JSBreakStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 42
									index: 42
									line: 1
								}
								start: Object {
									column: 26
									index: 26
									line: 1
								}
							}
							label: JSIdentifier {
								name: "__proto__"
								loc: Object {
									filename: "input.js"
									identifierName: "__proto__"
									end: Object {
										column: 41
										index: 41
										line: 1
									}
									start: Object {
										column: 32
										index: 32
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```
