# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 307`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
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
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected ,"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 4
					index: 4
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				right: JSNumericLiteral {
					value: 0
					format: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 7
							index: 7
							line: 1
						}
						start: Object {
							column: 6
							index: 6
							line: 1
						}
					}
				}
				left: JSAssignmentObjectPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 3
							index: 3
							line: 1
						}
						start: Object {
							column: 1
							index: 1
							line: 1
						}
					}
					properties: Array [
						JSAssignmentObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "x"
									loc: Object {
										filename: "input.js"
										identifierName: "x"
										end: Object {
											column: 3
											index: 3
											line: 1
										}
										start: Object {
											column: 2
											index: 2
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 3
										index: 3
										line: 1
									}
									start: Object {
										column: 2
										index: 2
										line: 1
									}
								}
							}
							value: JSAssignmentIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 3
										index: 3
										line: 1
									}
									start: Object {
										column: 2
										index: 2
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 3
									line: 1
								}
								start: Object {
									column: 2
									index: 2
									line: 1
								}
							}
						}
					]
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 7
					index: 7
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
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
				right: JSReferenceIdentifier {
					name: "obj"
					loc: Object {
						filename: "input.js"
						identifierName: "obj"
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
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
			}
		}
	]
}
```
