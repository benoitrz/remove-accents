# Remove Accents

Utility function to remove accents from a string of text. Works across languages.

## Why?

A common way of solving this problem is to map individual characters and their non-accented equivalent to be used within a *replace()* method. This approach requires to maintain an extensive list of them and isn't the most maintenable in my opinion. Numerous libraries are build following that model.

Instead this library uses binary search and the *localeCompare()* method ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)) to map the corresponding characters.

## No Dependencies!

This library is dependency free and uses only the node *assert* module ([Node.js Documentation](https://nodejs.org/api/assert.html)) to perform very basic unit tests.