import CodeSnippet from "../components/CodeSnippet";

// section 5
const tips2 = [
  {
    sectionTitle: "Data types",
    chapters: [
      {
        chapterTitle: "Methods of primitives",
        tips: [
          {
            content: (
              <>
                <p>
                  To allow access properties and methods of primitives, a
                  special "object wrapper" that provides the extra functionality
                  is created, and then is destroyed (JS engine might optimize
                  and skip the creation of the object but the process is
                  ultimately the same).
                </p>
                <p>
                  Remember, objects are always truthy in <code>if</code>.
                </p>
                <p>
                  Constructors <code>String</code> / <code>Number</code> /{" "}
                  <code>Boolean</code>, are for internal use only. Don't use
                  them with <code>new</code>. However, its totally fine and
                  useful to use them without <code>new</code> to convert values
                  to the corresponding type.
                </p>
                <p>
                  Types <code>null</code> / <code>undefined</code> have no
                  methods.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/primitives-methods"],
          },
        ],
      },
      {
        chapterTitle: "Numbers",
        tips: [
          {
            content: (
              <>
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`let billion = 1_000_000_000; // syntactic sugar, the _ is ignored by JS, same as 1000000000

let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

let mcs = 1e-6; // 0.000001, total of 6 zeros

console.log(0xff) // 0x then the number (Hexadecimal numbers)`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The method <code>num.toString(base)</code> returns a string
                  representation of <code>num</code> in the numeral system with
                  the given base. Default base is <code>10</code>.
                </p>
                <p>
                  If we want to call a method directly on a number, then we need
                  to place two dots <code>124..toString()</code>.
                </p>
                <p>Rounding numbers:</p>
                <p>
                  - <code>Math.floor()</code>
                </p>
                <p>
                  - <code>Math.ceil()</code>
                </p>
                <p>
                  - <code>Math.round()</code>
                </p>
                <p>
                  - <code>Math.trunc()</code>
                </p>
                <p>
                  - <code>toFixed(n)</code>, rounds the number to <code>n</code>{" "}
                  digits after the point and returns a string representation. We
                  can convert the result back to a number using{" "}
                  <code>Number()</code> or the unary <code>+</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`console.log(0.1 + 0.2) // 0.30000000000000004 .. loss of precision`}
                />
                <p>Ouch! why does this happen?</p>
                <p>
                  There's just no way to store exactly 0.1 or exactly 0.2 using
                  the binary system, just like there is no way to store
                  one-third as a decimal fraction (would be 0.333333333 ...
                  etc).
                </p>
                <p>
                  The numeric format IEEE-754 solves this by rounding to the
                  nearest possible number. These rounding rules normally don’t
                  allow us to see that "tiny precision loss".
                </p>
                <CodeSnippet
                  code={`console.log(0.1.toFixed(20) ); // 0.10000000000000000555 .. no need for the second . cause there is already .`}
                />
                <p>
                  And when we sum two numbers, their "precision losses" add up.
                  That's why <code>0.1 + 0.2</code> is not exactly{" "}
                  <code>0.3</code>.
                </p>
                <p>
                  Can we work around the problem? Sure, the most reliable method
                  is to round the result with the help of a method{" "}
                  <code>toFixed(n)</code>:
                </p>
                <CodeSnippet
                  code={`let sum = 0.1 + 0.2;

console.log( sum.toFixed(2) ); // "0.3"

// or 

console.log( +sum.toFixed(2) ); // 0.3 `}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  There exists two special numeric values, <code>NaN</code>,{" "}
                  <code>Infinity</code> and <code>-Infinity</code>.
                </p>
                <p>
                  They belong to the type number, but are not “normal” numbers,
                  so there are special functions to check for them:
                </p>
                <p>
                  - <code>isNaN(value)</code>. Remember you can't use{" "}
                  <code>value === NaN</code> because <code>NaN</code> is a
                  unique value that doesn't equal anything, even it self (
                  <code>NaN === NaN .. false</code>).
                </p>
                <p>
                  - <code>isFinite(value)</code>
                </p>
              </>
            ),
            seeMore: [``],
          },
          {
            content: (
              <>
                <p>
                  The functions <code>parseInt()</code> and{" "}
                  <code>parseFloat()</code> read a number from a string till
                  they can't. They are better than <code>Number()</code> in the
                  sense that they can convert strings that end with a letter for
                  example:
                </p>
                <CodeSnippet
                  code={`console.log(parseInt("120px")); // 120

console.log(Number("120px")); // NaN`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  JavaScript has a built-in{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math">
                    Math
                  </a>{" "}
                  object which contains a small library of mathematical
                  functions and constants. A few examples:
                </p>
                <p>
                  - <code>Math.random()</code>
                </p>
                <p>
                  - <code>Math.max(a, b, c...)</code>
                </p>
                <p>
                  - <code>Math.pow(n, power)</code>
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Summary of popular methods:</p>
                <p>
                  - <code>num.toString(base)</code>
                </p>
                <p>
                  - <code>Math.floor()</code>
                </p>
                <p>
                  - <code>Math.ceil()</code>
                </p>
                <p>
                  - <code>Math.round()</code>
                </p>
                <p>
                  - <code>Math.trunc()</code>
                </p>
                <p>
                  - <code>toFixed(n)</code>
                </p>
                <p>
                  - <code>isNaN(value)</code>
                </p>
                <p>
                  - <code>isFinite(value)</code>
                </p>
                <p>
                  - <code>Math.random()</code>
                </p>
                <p>
                  - <code>Math.max(a, b, c...)</code>
                </p>
                <p>
                  - <code>Math.pow(n, power)</code>
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Strings",
        tips: [
          {
            content: (
              <>
                <p>
                  Remember, <code>str.length</code> is a numeric property, not a
                  method.
                </p>
                <p>
                  Use <code>str[0]</code> instead of <code>str.charAt(0)</code>,
                  to find position, the latter exists for historical reasons.
                </p>
                <p>
                  To loop through a string, use <code>for..of</code>.
                </p>
                <CodeSnippet
                  code={`for (let char of "Hello") {
//
}`}
                />
                <p>
                  Strings are immutable. Strings can't be changed in JavaScript.
                  It is impossible to change a character.
                </p>
                <p>
                  Use <code>toLowerCase()</code> and <code>toUpperCase()</code>{" "}
                  to change the case.
                </p>
                <p>
                  To search a string, use <code>str.indexOf(substr, pos)</code>.
                  It looks for the <code>substr</code> in <code>str</code>,
                  starting from the given position <code>pos</code>, and returns
                  the position where the match was found or <code>-1</code> if
                  nothing can be found.
                </p>
                <p>
                  The similar method{" "}
                  <code>str.lastIndexOf(substr, position)</code> starts
                  searching from the end of a string.
                </p>
                <p>
                  Don't use <code>if(str.indexOf()){`{}`}</code>, because the
                  method can return 0 when the substring was found in the
                  beginning for the string which will then be considered false
                  by the if. Instead use,{" "}
                  <code>if(str.indexOf() != -1){`{}`}</code>.
                </p>
                <p>
                  The bitwise NOT <code>~</code>. Didn't understand it, not
                  interested in trying.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The method <code>str.includes(substr, pos)</code> is the right
                  choice if we need to test for the match, but don't need its
                  position
                </p>
                <p>
                  The methods <code>str.startsWith()</code> and{" "}
                  <code>str.endsWith()</code> do exactly what they say.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>str.slice(start [, end])</code>: returns the part of
                  the string from <code>start</code> to (but not including){" "}
                  <code>end</code>. We can also use negative numbers to count
                  from end.
                </p>
                <p>
                  - <code>str.substring(start [, end])</code>: same as{" "}
                  <code>slice</code> but allows <code>start</code> to be greater
                  than <code>end</code>.
                </p>
                <p>
                  - <code>str.substr(start [, length])</code>: returns the part
                  of the string from <code>start</code>, with the given{" "}
                  <code>length</code>.
                </p>
                <p>
                  Its enough to remember <code>slice</code> of the three methods
                  above.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/string#getting-a-substring"],
          },
          {
            content: (
              <>
                <p>
                  Remember, strings are compared character-by-character in
                  alphabetical order.
                </p>
                <p>Strings in JavaScript are encoded using UTF-16.</p>
                <p>When comparing strings, the following applies:</p>
                <p>
                  - A lowercase letter is always greater than the uppercase.
                </p>
                <p>- Letters with diacritical marks are "out of order".</p>
                <p>Why? consider the following:</p>
                <CodeSnippet
                  code={`let str = '';
//  see the characters with codes 65..220
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i); // gets character given its code (because all strings are encoded using UTF-16)
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ`}
                />
                <p>
                  The "right" algorithm to do string comparisons is more complex
                  than it may seem, because alphabets are different for
                  different languages.
                </p>
                <p>
                  The method <code>str.localeCompare(str2)</code> returns an
                  integer indicating whether <code>str</code> is less, equal or
                  greater than <code>str2</code> according to the language
                  rules.
                </p>
                <ul>
                  <li>
                    Returns a negative number if <code>str</code> is less than
                    <code>str2</code>.
                  </li>
                  <li>
                    Returns a positive number if <code>str</code> is greater
                    than <code>str2</code>.
                  </li>
                  <li>Returns 0 if they are equivalent.</li>
                </ul>
                <p>
                  To compare strings according to the language, use:
                  <code>localeCompare</code>, otherwise they are compared by
                  character codes.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/string#correct-comparisons"],
          },
          {
            content: (
              <p>
                The rest of the chapter talks about internals and unicode,
                things like emojis and chinese letters. We will skip that for
                now.
              </p>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>str.length</code>: numeric property, not method.
                </p>
                <p>
                  - <code>str[0]</code>.
                </p>
                <p>
                  - <code>str.charAt(0)</code>: don't use.
                </p>
                <p>
                  - <code>toLowerCase()</code>.
                </p>
                <p>
                  - <code>toUpperCase()</code>.
                </p>
                <p>
                  - <code>str.indexOf(substr, pos)</code>.
                </p>
                <p>
                  - <code>str.lastIndexOf(substr, position)</code>.
                </p>
                <p>
                  - <code>str.includes(substr, pos)</code>.
                </p>
                <p>
                  - <code>str.startsWith()</code>.
                </p>
                <p>
                  - <code>str.endsWith()</code>.
                </p>
                <p>
                  - <code>str.slice(start [, end])</code>.
                </p>
                <p>
                  - <code>str.substring(start [, end])</code>.
                </p>
                <p>
                  - <code>str.substr(start [, length])</code>.
                </p>
                <p>
                  - <code>str.localeCompare(str2)</code>.
                </p>
                <p>
                  - <code>str.trim()</code>.
                </p>
                <p>
                  - <code>str.repeat(n)</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Arrays",
        tips: [
          {
            content: (
              <>
                <p>We use arrays when we need ordered data.</p>
                <p>Two ways to create a new array:</p>
                <CodeSnippet
                  code={`let arr = new Array(); // don't use it. if called with one argument, it creates an array without items, but with the given length.
let arr = [];`}
                />
                <p>Almost all the time, the second syntax is used.</p>
                <p>
                  Use <code>arr[arr.length - 1]</code> or{" "}
                  <code>arr.at(-1)</code> to get the last element of an array.
                </p>
                <p>
                  - <code>arr.pop()</code> extracts the last element of array
                  and returns it.
                </p>
                <p>
                  - <code>arr.push()</code> appends the element to the end of
                  the array. Can add multiple values at once.
                </p>
                <p>
                  - <code>arr.shift()</code> extracts the first element of the
                  array and returns it.
                </p>
                <p>
                  - <code>arr.unshift()</code> adds the element to the beginning
                  of the array. Can add multiple values at once.
                </p>
                <p>
                  Methods <code>push</code> / <code>push</code> run fast, while
                  <code>shift</code> / <code>unshift</code> are slow. Why ? the
                  first doesn't need to renumber all elements.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/array#methods-pop-push-shift-unshift",
            ],
          },
          {
            content: (
              <>
                <p>
                  One of the oldest ways to cycle array items is the{" "}
                  <code>for</code> loop over indexes.
                </p>
                <p>
                  But for arrays there is another form of loop,{" "}
                  <code>for..of</code>, the syntax is:
                </p>
                <CodeSnippet
                  code={`for (let el of arr) {
  console.log(el);
}`}
                />
                <p>
                  Don't use <code>for..in</code> to loop through arrays. It
                  iterates over all properties and its optimized for generic
                  objects (10-100 times slower).
                </p>
                <p>
                  The simplest way to clear an array is{" "}
                  <code>arr.length = 0</code>. Notice how the length property is
                  writable?.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Arrays have their own implementation of <code>toString</code>{" "}
                  method that returns a comma-separated list of elements.
                </p>
                <CodeSnippet
                  code={`let arr = [1, 2, 3];
                  
console.log(String(arr)) // "1,2,3"  .. I think String() uses toString() internally`}
                />
                <p>
                  Remember, when you add an array to a string, the binary{" "}
                  <code>+</code> will convert the array to a string (using its
                  <code>toString</code> property) and concatenates them.
                </p>
                <p>
                  Just like with objects, don't compare arrays with{" "}
                  <code>==</code> and other comparison operators. Instead,
                  compare them item-by-item in a loop or using iteration methods
                  explained in the next chapter.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/array#don-t-compare-arrays-with",
            ],
          },
        ],
      },
      {
        chapterTitle: "Array methods",
        tips: [
          {
            content: (
              <>
                <p>
                  Don't use <code>delete</code> with arrays, it will delete an
                  element, yes, but it won't renumber other elements and won't
                  adjust array length.
                </p>
                <p>
                  -{" "}
                  <code>
                    arr.splice(start[, deleteCount, elem1, ..., elemN])
                  </code>{" "}
                  modifies <code>arr</code> starting from the index start:
                  removes
                  <code>deleteCount</code> elements and then inserts{" "}
                  <code>elem1</code>, ...,
                  <code>elemN</code> at their place. Returns the array of
                  removed elements.
                </p>
                <p>
                  - <code>arr.slice([start], [end])</code> returns a new array
                  copying to it all items from index <code>start</code> to{" "}
                  <code>end</code> (not including end). This method don't mutate
                  the array. Can be called without arguments to get copy of the
                  array.
                </p>
                <p>
                  - <code>arr.concat(arg1, arg2...)</code> concatenates arrays
                  and values. Returns new array. This method will copy objects
                  as a whole, but if an array-like object has a special
                  <code>Symbol.isConcatSpreadable</code> property, then it's
                  treated as an array by concat: its elements are added instead.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>arr.forEach</code> allows to run a function for every
                  element of the array. The result of the function (if it
                  returns any) is thrown away and ignored.
                </p>
                <p>
                  -{" "}
                  <code>arr.indexOf(item, from) / lastIndexOf(item, from)</code>{" "}
                  looks for <code>item</code> starting from index{" "}
                  <code>from</code>, and returns the index where it was found,
                  otherwise <code>-1</code>. Note that it uses strict equality{" "}
                  <code>===</code>. A similar method is
                </p>
                <p>
                  - <code>arr.includes(item, from)</code> looks for item
                  starting from index <code>from</code>, returns{" "}
                  <code>true</code> if found.
                </p>
                <p>
                  Use <code>arr.includes</code> instead of{" "}
                  <code>arr.indexOf</code> if you need to check if an element is
                  in the array but don't care about its index,{" "}
                  <code>arr.includes</code>, among other things, handles{" "}
                  <code>NaN</code> correctly.
                </p>
                <p>
                  - <code>arr.find</code> comes in handy when you want to find
                  an object for example in an array of objects. If the callback
                  function returns <code>true</code>, the search is stopped and
                  the <code>item</code> is returned. If nothing was found,{" "}
                  <code>undefined</code> is returned.
                </p>
                <p>
                  - <code>arr.findIndex / arr.findLastIndex</code> has the same
                  syntax as <code>arr.find</code>, but returns the index of the
                  element instead of the element itself.
                </p>
                <p>
                  Above methods are usually used with the first argument only.
                </p>
                <p>
                  - <code>arr.filter</code> similar to <code>arr.find</code>{" "}
                  method but returns an array of all matching elements, not just
                  the first one.
                </p>
                <p>
                  - <code>arr.map</code> calls the function for each element of
                  the array and returns the array of results.
                </p>
                <p>
                  - <code>arr.sort(fn)</code> sorts the array in place, changing
                  its element order. It also returns the sorted array, but the
                  returned value is usually ignored, as arr itself is modified.
                  Items are sorted as strings by default. See an example of
                  sorting function below:
                </p>
                <CodeSnippet
                  code={`function compareNumeric(a, b) {
  console.log(a, b) // see which items are being compared .. kinda fun
  if (a > b) return 1; // really just need to return any positive number to say "greater"
  if (a == b) return 0;
  if (a < b) return -1; // really just need to return any negative number to say "less"
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric); 

console.log(arr);  // 1, 2, 15

// or really just:

arr.sort( (a, b) => a - b );`}
                />
                <p>
                  We don't need to care how <code>arr.sort(fn)</code> internally
                  works (an optimized{" "}
                  <a href="https://en.wikipedia.org/wiki/Quicksort">
                    quicksort
                  </a>{" "}
                  or <a href="https://en.wikipedia.org/wiki/Timsort">Timsort</a>{" "}
                  most of the time). It will walk the array, compare its
                  elements using the provided function and reorder them, all we
                  need is to provide the <code>fn</code> which does the
                  comparison.
                </p>
                <p>
                  Use <code>str.localCompare</code> for strings:
                </p>
                <CodeSnippet
                  code={`let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)`}
                />
                <p>
                  - <code>arr.reverse</code> reverses the order of elements and
                  returns the array.
                </p>
                <p>
                  - <code>str.split(delim)</code> splits the string into an
                  array by the given delimiter <code>delim</code>. If{" "}
                  <code>delim</code> is an empty string <code>''</code>, then it
                  will split the string into an array of letters.
                </p>
                <p>
                  - <code>arr.join(glue)</code> does the reverse to{" "}
                  <code>split</code>. It creates a string of <code>arr</code>{" "}
                  items joined by <code>glue</code> between them.
                </p>
                <p>
                  - <code>arr.reduce / arr.reduceRight</code> returns a single
                  value based on the array. Remember, if you don't pass the
                  initial value, an error will be thrown if the array is empty
                  (because if the initial value is empty, <code>reduce</code>{" "}
                  will take the first item of the array instead). Thats why, its
                  better to always pass an initial value. Here is the syntax:
                </p>
                <CodeSnippet
                  code={`let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => {  // "sum" is the accumulator,  "current" is the current element, 0 is the initial value of the accumulator.

return sum + current;

}, 0); 

alert(result); // 15`}
                />
                <p>
                  - <code>Array.isArray(value)</code>, returns true if{" "}
                  <code>value</code> is an array. Remember, <code>typeof</code>{" "}
                  doesn't distinguish between objects and arrays since array are
                  objects.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/array-methods#indexof-lastindexof-and-includes",
            ],
          },
          {
            content: (
              <>
                <p>
                  Almost all array methods that call functions - like{" "}
                  <code>find</code>, <code>filter</code>, <code>map</code>, with
                  a notable exception of <code>sort</code>, accept an optional
                  additional parameter <code>thisArg</code>.
                </p>
                <p>
                  The <code>thisArg</code> is the optional last argument and its
                  value becomes <code>this</code> for <code>func</code>.
                </p>
                <p>See below example:</p>
                <CodeSnippet
                  code={`let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23`}
                />
                <p>
                  Note that we didn't have to pass arguments to{" "}
                  <code>army.canJoin</code>, they are passed automatically.
                </p>
                <p>
                  In the example above, <code>army.canJoin</code> is called as a
                  stand alone function, if we didn't include the second
                  argument, the value of <code>this</code> will be{" "}
                  <code>undefined</code>.
                </p>
                <p>A better approach is to use the following syntax</p>
                <CodeSnippet
                  code={`users.filter((user)=> {
return army.canJoin(user)
})`}
                />
                <p>
                  See this{" "}
                  <a href="https://www.reddit.com/r/learnjavascript/comments/ve91qd/why_function_in_array_methods_are_called_as/">
                    post
                  </a>{" "}
                  if you are confused about the rule of <code>this</code> here.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Recap of popular methods:-</p>
                <p>To add/remove elements:</p>
                <p>
                  - <code>push(...items)</code>.
                </p>
                <p>
                  - <code>pop()</code>.
                </p>
                <p>
                  - <code>shift()</code>.
                </p>
                <p>
                  - <code>unshift(...items)</code>.
                </p>
                <p>
                  - <code>splice(pos, deleteCount, ...items)</code>.
                </p>
                <p>
                  - <code>slice(start, end)</code>.
                </p>
                <p>
                  - <code>concat(...items)</code>.
                </p>
                <p>To search among elements:</p>
                <p>
                  - <code>indexOf/lastIndexOf(item, pos)</code>.
                </p>
                <p>
                  - <code>includes(value)</code>.
                </p>
                <p>
                  - <code>find/filter(func)</code>.
                </p>
                <p>
                  - <code>findIndex</code>.
                </p>
                <p>To iterate over elements:</p>
                <p>
                  - <code>forEach(func)</code>. Also can use <code>for</code> or{" "}
                  <code>for..in</code> loops.
                </p>
                <p>To transform the array:</p>
                <p>
                  - <code>map(func)</code>.
                </p>
                <p>
                  - <code>sort(func)</code>.
                </p>
                <p>
                  - <code>reverse()</code>.
                </p>
                <p>
                  - <code>split / join</code>.
                </p>
                <p>
                  - <code>reduce/reduceRight(func, initial)</code>.
                </p>
                <p>Additionally:</p>
                <p>
                  - <code>Array.isArray(value)</code>.
                </p>
                <p>
                  Please note that methods <code>sort</code>,{" "}
                  <code>reverse</code> and <code>splice</code> modify the array
                  itself.
                </p>
                <p>
                  There are other methods that we didn't cover, some of them
                  (namely: <code>arr.some(fn)</code> /{" "}
                  <code>arr.every(fn)</code>,{" "}
                  <code>arr.fill(value, start, end)</code>,{" "}
                  <code>arr.copyWithin(target, start, end)</code>, and{" "}
                  <code>arr.flat(depth)</code> / <code>arr.flatMap(fn)</code> )
                  are mentioned in the summary of the chapter, click on "see
                  more" if you are interested.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/array-methods#summary"],
          },
        ],
      },
      {
        chapterTitle: "Iterables",
        tips: [
          {
            content: (
              <>
                <p>
                  Iterables are objects that implement the{" "}
                  <code>Symbol.iterator</code> method. Strings and arrays are
                  iterables (basically any object that can be used in a{" "}
                  <code>for...of</code> loop).
                </p>
                <p>
                  The <code>symbol.iterator</code> method returns an iterator -
                  an object with the method <code>next</code>.
                </p>
                <p>
                  To make an object iterable, we need to add the method{" "}
                  <code>Symbol.iterator</code> to it.
                </p>
                <p>
                  Here is a rundown of how <code>for...of</code> loop used{" "}
                  <code>Symbol.iterator</code>.
                </p>
                <ol>
                  <li>
                    When <code>for..of</code> starts, it calls{" "}
                    <code>Symbol.iterator</code> once (or errors if not found).
                    The method must return an iterator.
                  </li>
                  <li>
                    Onward, <code>for..of</code> works only with that returned
                    object (the iterator).
                  </li>
                  <li>
                    When <code>for..of</code> wants the next value, it calls{" "}
                    <code>next()</code> on that object.
                  </li>
                  <li>
                    The result of <code>next()</code> must have the form{" "}
                    <code>{"{done: Boolean, value: any}"}</code>, where{" "}
                    <code>done = true</code> means that the loop is finished,
                    otherwise <code>value</code> is the next value.
                  </li>
                </ol>
                <p>See this helpful implementation:</p>
                <CodeSnippet
                  code={`let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}`}
                />
                <p>
                  Technically, We can add the <code>next()</code> method to the{" "}
                  <code>range</code> object it self. However, its better, for
                  separation of concerns, to keep next() inside a separate
                  iterator thats returned by <code>Symbol.iterator</code>. Click
                  on "see more" for an example.
                </p>
                <p>We can explicitly call the iterator, like this:</p>
                <CodeSnippet
                  code={`let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}`}
                />
                <p>
                  That is rarely needed, but gives us more control over the
                  process than <code>for..of</code>.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/iterable"],
          },
          {
            content: (
              <>
                <p>
                  Remember, "iterables" are very different from "array likes":
                </p>
                <ul>
                  <li>
                    Iterables are objects that implement the{" "}
                    <code>Symbol.iterator</code> method, as described above.
                  </li>
                  <li>
                    Array-likes are objects that have indexes and{" "}
                    <code>length</code>, so they look like arrays.
                  </li>
                </ul>
                <p>Objects can be iterables, array-likes, both, or neither.</p>
                <p>
                  For instance, strings are both iterable (<code>for..of</code>{" "}
                  works on them) and array-like (they have numeric indexes and
                  <code>length</code>).
                </p>
                <p>
                  - <code>Array.from</code> takes the object, examines it for
                  being an iterable or array-like, then makes a new real array
                  and copies all items to it. The syntax is as follow:
                </p>
                <CodeSnippet
                  code={`Array.from(obj[, mapFn, thisArg]) // mapFn can be a function that will be applied to each element before adding it to the array`}
                />
                <p>
                  We can use <code>Array.from</code> to turn a string to an
                  array of characters. Unlike <code>str.split</code>, it relies
                  on the iterable nature of the string and so, just like
                  <code>for..of</code>, correctly works with surrogate pairs
                  (emojis and so on). We can even build surrogate-aware{" "}
                  <code>slice</code> on it. Click on "see more" for example.
                </p>
                <p>
                  Most built-in methods assume that they work with iterables or
                  array-likes instead of "real" arrays, because that's more
                  abstract.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/iterable#array-from"],
          },
        ],
      },
      {
        chapterTitle: "",
        tips: [
          {
            content: (
              <>
                <p>
                  Map is a collection of keyed data items, just like an Object.
                  But the main difference is that Map allows keys of any type.
                  Also provides additional convenient methods, like the{" "}
                  <code>size</code> property and preserves creation order.
                </p>
                <p>
                  Using objects as keys is one of the most notable and important
                  Map features.
                </p>
                <p>
                  - <code>new Map()</code> creates the map.
                </p>
                <p>
                  - <code>map.set(key, value)</code> stores the value by the
                  key.
                </p>
                <p>
                  - <code>map.get(key)</code> returns the value by the key,{" "}
                  <code>undefined</code> if key doesn't exist.
                </p>
                <p>
                  - <code>map.has(key)</code> returns <code>true</code> if the
                  key exists, <code>false</code> otherwise.
                </p>
                <p>
                  - <code>map.delete(key)</code> removes the value by the key.
                </p>
                <p>
                  - <code>map.clear()</code> removes everything from the map.
                </p>
                <p>
                  - <code>map.size</code> returns the current element count.
                </p>
                <p>
                  Although we can set <code>map[key] = 2</code>, its bad
                  practice, since its treating map as a plain JavaScript object,
                  so it implies all corresponding limitations (only
                  string/symbol keys and so on).
                </p>
                <p>
                  To test keys for equivalence, Map uses{" "}
                  <a href="https://tc39.es/ecma262/#sec-samevaluezero">
                    SameValueZero
                  </a>{" "}
                  algorithm, its quite similar to strict equality{" "}
                  <code>===</code>, but the difference is that <code>NaN</code>{" "}
                  is considered equal to
                  <code>NaN</code>. So <code>NaN</code> can be used as the key
                  as well. This algorithm can't be changed or customized.
                </p>
                <p>
                  Every <code>map.set</code> call returns the map itself, so we
                  can "chain" the calls:
                </p>
                <p>Iteration over Map:</p>
                <p>
                  - <code>map.keys()</code> returns an iterable for keys.
                </p>
                <p>
                  - <code>map.values()</code> returns an iterable for values.
                </p>
                <p>
                  - <code>map.entries()</code> returns an iterable for entries
                  <code>[key, value]</code>, it's used by default in{" "}
                  <code>for..of</code>. We can just use <code>map</code> and
                  omit the <code>.entries()</code> (there is an example below).
                </p>
                <p>Here is the syntax:</p>
                <CodeSnippet
                  code={`let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}`}
                />
                <p>
                  The insertion order is used. Map preserves the insertion
                  order, unlike regular objects.
                </p>
                <p>
                  - <code>map.forEach()</code> runs a function for each (key,
                  value) pair, similar to <code>forEach</code> of arrays. Syntax
                  is as follow:
                </p>
                <CodeSnippet
                  code={`map.forEach( (value, key, map) => {
  console.log(\`\${key}: \${value}\`); // cucumber: 500 etc
});`}
                />
                <p>
                  When a Map is created, we can pass an array (or another
                  iterable) with key/value pairs for initialization, like this:
                </p>
                <CodeSnippet
                  code={`// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log( map.get('1') ); // str1`}
                />
                <p>
                  If we have an object that we want to initiate a Map with (or
                  just convert it to a Map), we can use built-in method{" "}
                  <code>Object.entries(obj)</code> that returns an array of
                  key/value pairs for an object exactly in the above format.
                </p>
                <p>
                  So, to convert an object to a Map, we can do the following:
                </p>
                <CodeSnippet
                  code={`// Object to Map
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John`}
                />
                <p>
                  The method <code>Object.fromEntries(entries)</code> does the
                  opposite of the <code>Object.entries(obj)</code>, given an
                  array of <code>[key, value]</code> pairs, it returns an
                  object.
                </p>
                <p>
                  So, since <code>map.entries</code> returns{" "}
                  <code>[key, value]</code> pairs, we can convert a Map to an
                  object like so:
                </p>
                <CodeSnippet
                  code={`// Map to Object
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // or just obj = Object.fromEntries(map) // remove the.entries() part

console.log( obj.banana ) // 1`}
                />
              </>
            ),
            seeMore: ["https://javascript.info/map-set#map"],
          },
          {
            content: (
              <>
                <p>
                  A <code>Set</code> is a special type collection - "set of
                  values" (without keys), where each value may occur only once.
                </p>
                <p>
                  - <code>new Set(iterable)</code> creates the set, and if an
                  <code>iterable</code> object is provided (usually an array),
                  copies values from it into the set.
                </p>
                <p>
                  - <code>set.add(value)</code> adds a value, returns the set
                  itself.
                </p>
                <p>
                  - <code>set.delete(value)</code> removes the value, returns
                  <code>true</code> if <code>value</code> existed at the moment
                  of the call, otherwise <code>false</code>.
                </p>
                <p>
                  - <code>set.has(value)</code> returns <code>true</code> if{" "}
                  <code>value</code> exists in the set, otherwise{" "}
                  <code>false</code>.
                </p>
                <p>
                  - <code>set.clear()</code> removes everything from the set.
                </p>
                <p>
                  - <code>set.size</code> returns elements count.
                </p>
                <p>
                  The main feature of <code>Set</code> is that repeated calls of{" "}
                  <code>set.add(value)</code> with the same value don't do
                  anything. That's the reason why each value appears in a{" "}
                  <code>Set</code>
                  only once.
                </p>
                <p>
                  The alternative to <code>Set</code> could be an array of
                  users, and the code to check for duplicates on every insertion
                  using <code>arr.find</code>. But the performance would be much
                  worse.
                </p>
                <p>
                  To loop over a a <code>Set</code>, we can use{" "}
                  <code>for..of</code> loop or <code>forEach</code>.
                </p>
                <p>
                  - <code>forEach((value, valueAgain, set){`=>{}`})</code>, uns
                  a function for each element. Note the second argument{" "}
                  <code>valueAgain</code>, why is it repeated? just for
                  compatibility with <code>Map</code>, so one can easily switch
                  between them.
                </p>
                <p>
                  - <code>set.keys()</code> returns an iterable object for
                  values.
                </p>
                <p>
                  - <code>set.values()</code> same as <code>set.keys()</code>,
                  for compatibility with <code>Map</code>.
                </p>
                <p>
                  - <code>set.entries()</code> returns an iterable object for
                  entries <code>[value, value]</code>, exists for compatibility
                  with <code>Map</code>.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/map-set#set"],
          },
          {
            content: (
              <>
                <p>
                  Iteration over <code>Map</code> and <code>Set</code> is always
                  in the insertion order, so we can't say that these collections
                  are unordered, but we can't reorder elements or directly get
                  an element by its number.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Popular methods for <code>Map</code>:
                </p>
                <p>
                  - <code>new Map()</code>
                </p>
                <p>
                  - <code>map.set(key, value)</code>
                </p>
                <p>
                  - <code>map.get(key)</code>
                </p>
                <p>
                  - <code>map.has(key)</code>
                </p>
                <p>
                  - <code>map.delete(key)</code>
                </p>
                <p>
                  - <code>map.clear()</code>
                </p>
                <p>
                  - <code>map.size</code>
                </p>
                <p>
                  - <code>map.keys()</code>
                </p>
                <p>
                  - <code>map.values()</code>
                </p>
                <p>
                  - <code>map.entries()</code>
                </p>
                <p>
                  - <code>map.forEach()</code>
                </p>
                <p>
                  - <code>new Map(Object.entries(obj))</code>
                </p>
                <p>
                  - <code>Object.fromEntries(map.entries())</code>
                </p>
                <p>
                  Popular methods for <code>Set</code>:
                </p>
                <p>
                  - <code>new Set(iterable)</code>
                </p>
                <p>
                  - <code>set.add(value)</code>
                </p>
                <p>
                  - <code>set.delete(value)</code>
                </p>
                <p>
                  - <code>set.has(value)</code>
                </p>
                <p>
                  - <code>set.clear()</code>
                </p>
                <p>
                  - <code>set.size</code>
                </p>
                <p>
                  - <code>forEach((value, valueAgain, set){`=>{}`})</code>
                </p>
                <p>
                  - <code>set.keys()</code>
                </p>
                <p>
                  - <code>set.values()</code>
                </p>
                <p>
                  - <code>set.entries()</code>
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "WeakMap and WeakSet",
        tips: [
          {
            content: (
              <>
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`let obj = { name: "John" };

let obj1 = obj;

obj = null;

console.log(obj1.name) // "John",`}
                />
                <p>
                  Why wasn't <code>obj</code> garbage collected ? because{" "}
                  <code>obj = null</code> stopped the variable <code>obj</code>{" "}
                  from referencing the object anymore, but the object is still
                  reachable because it has another reference from{" "}
                  <code>obj1</code>.
                </p>
                <p>
                  Similar to that, if we use an object as the key in a regular{" "}
                  <code>Map</code>, then while the <code>Map</code> exists, that
                  object exists as well. It occupies memory and may not be
                  garbage collected.
                </p>
                <p>
                  <code>WeakMap</code> is fundamentally different in this
                  aspect. It doesn't prevent garbage-collection of key objects.
                </p>
                <p>
                  In <code>WeakMap</code>, keys must be objects, not primitive
                  values.
                </p>
                <p>
                  When we use an object as a key in <code>WeakMap</code>, and
                  there is no other reference to it, it will be removed from
                  memory (and from the map) automatically.
                </p>
                <CodeSnippet
                  code={`let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory and from the map 

// remember there is no guarantee when garbage collection will run,
// so console.log() might prove unreliable here.
// I tried to wait a while then run console.log(weakMap) in the browser console,
// expecting weakMap to have been removed, but to no avail, need to investigate more?`}
                />
                <p>
                  <code>WeakMap</code> does not support iteration and methods
                  <code>keys()</code>, <code>values()</code>,{" "}
                  <code>entries()</code>, so there's no way to get all keys or
                  values from it. It only has the following methods:
                </p>
                <p>
                  - <code>weakMap.get(key)</code>.
                </p>
                <p>
                  - <code>weakMap.set(key, value)</code>.
                </p>
                <p>
                  - <code>weakMap.delete(key)</code>.
                </p>
                <p>
                  - <code>weakMap.has(key)</code>.
                </p>
                <p>
                  Why such a limitation? That's for technical reasons. If an
                  object has lost all other references (like john in the code
                  above), then it is to be garbage-collected automatically. But
                  technically it's not exactly specified when the cleanup
                  happens.
                </p>
                <p>
                  The JavaScript engine decides that. It may choose to perform
                  the memory cleanup immediately or to wait and do the cleaning
                  later when more deletions happen. So, technically, the current
                  element count of a WeakMap is not known. The engine may have
                  cleaned it up or not, or did it partially. For that reason,
                  methods that access all keys/values are not supported.
                </p>
                <p>
                  So whats the point of WeakMap? we can use it from{" "}
                  <a href="https://javascript.info/weakmap-weakset#use-case-additional-data">
                    additional data storage
                  </a>
                  , and{" "}
                  <a href="https://javascript.info/weakmap-weakset#use-case-caching">
                    caching
                  </a>
                  .
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>WeakSet</code> is analogous to <code>Set</code>, but we
                  may only add objects to <code>WeakSet</code> (not primitives).
                </p>
                <p>
                  An object exists in <code>WeakSet</code> while it is reachable
                  from somewhere else.
                </p>
                <p>
                  Like <code>Set</code>, <code>WeakSet</code> supports{" "}
                  <code>add</code>, <code>has</code> and <code>delete</code>,
                  but not <code>size</code>, <code>keys()</code>,{" "}
                  <code>values()</code>, <code>entries()</code> and no
                  iterations.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                {" "}
                <p>
                  The most notable limitation of <code>WeakMap</code> and{" "}
                  <code>WeakSet</code> is the absence of iterations, and the
                  inability to get all current content. That may appear
                  inconvenient, but does not prevent them from doing their main
                  job - be an "additional" storage of data for objects which are
                  stored/managed at another place.
                </p>
                <p>
                  Their main advantages are that they have weak reference to
                  objects, so they can easily be removed by garbage collector.
                </p>
                <p>
                  That comes at the cost of not having support for{" "}
                  <code>clear</code>, <code>size</code>, <code>keys</code>,{" "}
                  <code>values</code> ...
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Papular methods for <code>WeakMap</code>:
                </p>
                <p>
                  - <code>New WeakMap()</code>.
                </p>
                <p>
                  - <code>weakMap.get(key)</code>.
                </p>
                <p>
                  - <code>weakMap.set(key, value)</code>.
                </p>
                <p>
                  - <code>weakMap.delete(key)</code>.
                </p>
                <p>
                  - <code>weakMap.has(key)</code>.
                </p>
                <p>
                  Popular methods for <code>WeakSet</code>:
                </p>
                <p>
                  - <code>new WeakSet()</code>.
                </p>
                <p>
                  - <code>weakSet.add()</code>.
                </p>
                <p>
                  - <code>weakSet.delete()</code>.
                </p>
                <p>
                  - <code>weakSet.has()</code>.
                </p>
              </>
            ),
            seeMore: "",
          },
        ],
      },
    ],
  },
];

export default tips2;
