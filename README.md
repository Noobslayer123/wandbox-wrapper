wandbox-wrapper
-
not a package yet

npm install
-
```
npm i wandbox-wrapper
```
example
-
```js
const wrapper = require('wandbox-wrapper')

const loadstr = new wrapper.eval(
  'console.log(\'hello javascript eval\')', // code
  console.log // if throws an error
)

const compile = new wrapper.compile(
  'print(\'hello lua loadstring\')', // code
  'lua-5.4.0', // lua version
  console.log // when the output comes
)

loadstr.run() // run the eval code
compile.run() // run the lua code [not eval]
```
made by Chad Andrew and the API from [here](https://github.com/melpon)
