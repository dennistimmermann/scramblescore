# Scramblescore

Get a score how scrambled a word is and test if it suffices your requirements

## Installation
### npm

Install with [npm](http://npmjs.org):

	$ npm install scramblescore

### bower

Install with [bower](http://bower.io):

  $ bower install scramblescore

## API

### Scramblescore.score(input, control)
	scramblescore.score("ehllo", "hello")
  // 1

### Scramblescore.test(input, control, maxscore)
	scramblescore.test("AJvascript", "JAvascript", 1)
  // true

  Scramblescore.test("ehlol", "hello", 1)
  // false

## License

  MIT
