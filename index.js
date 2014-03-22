/*
 *  Scramblescore, get a score how scrambled a word is and test if it suffices your requirements
 *
 *  Dennis Timmermann, dennis@tmrmn.com, License: MIT
 */

(function(global, name) {

        var obj = {};


        /*
            simple bubblesort, returns how often it swapped.
            We can simpy use the charCode as values
        */
        var bubblesort = function(input) {

            var times = 0;
            var swapped;

            do{
                swapped = false;
                for( var i = 0; i < input.length-1; i++) {
                    if(input[i] > input[i+1]) {
                        var tmp = input[i];
                        input[i] = input[i+1];
                        input[i+1] = tmp;
                        times++;
                        swapped = true;
                    }
                }
            } while(swapped);

            return times;
        };

        /*
            the scramblescore is simply the difference between how often bubblesort swapped the two inputs.

            Example:
                Scramblescore.score("ehllo", "hello")
                // 1
         */
        obj.score = function(input, control) {
            return Math.abs(bubblesort(input.split(''))-bubblesort(control.split('')));
        };

        /*
            tests, if the two inputs dont exceed the given maxscore of scrambled letters

            Example:
                Scramblescore.test("AJvascript", "JAvascript", 1)
                // true

                Scramblescore.test("ehlol", "hello", 1)
                // false
         */
        obj.test = function(input, control, maxscore) {
            // same length?
            if(input.length != control.length) return false;

            // same letters?
            if(input.split('').sort().join() != control.split('').sort().join()) return false;

            if(obj.score(input, control) <= maxscore) return true;
            return false;

        };

        global[name] = obj;



    })(this, "Scramblescore");
