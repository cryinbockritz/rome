# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 333`

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
			column: 15
			index: 15
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSWhileStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSNumericLiteral {
				value: 1
				format: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 8
						index: 8
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
			body: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
				expression: JSRegExpLiteral {
					global: false
					insensitive: false
					multiline: false
					noDotNewline: false
					sticky: false
					unicode: false
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 15
							index: 15
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
					expression: JSRegExpSubExpression {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 14
								index: 14
								line: 1
							}
							start: Object {
								column: 11
								index: 11
								line: 1
							}
						}
						body: Array [
							JSRegExpCharacter {
								value: "f"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 11
										index: 11
										line: 1
									}
								}
							}
							JSRegExpCharacter {
								value: "o"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 13
										index: 13
										line: 1
									}
									start: Object {
										column: 12
										index: 12
										line: 1
									}
								}
							}
							JSRegExpCharacter {
								value: "o"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 14
										index: 14
										line: 1
									}
									start: Object {
										column: 13
										index: 13
										line: 1
									}
								}
							}
						]
					}
				}
			}
		}
	]
}
```
