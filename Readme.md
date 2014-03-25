# scramblescore

Get a score how scrambled a word is and test if it suffices your requirements

## Installation
### [npm](http://npmjs.org)

    $ npm install scramblescore

### [bower](http://bower.io)

    $ bower install scramblescore
    
### manual

    <script src="browser.js"></script>

## API

### scramblescore.score(input, control)
    scramblescore.score("ehllo", "hello")
    // 1

### scramblescore.test(input, control, maxscore)
    scramblescore.test("AJvascript", "JAvascript", 1)
    // true

    Scramblescore.test("ehlol", "hello", 1)
    // false

## License

MIT
