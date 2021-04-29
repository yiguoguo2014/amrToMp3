# amrToMp3
amr to mp3 nodeJS module

amr音频转mp3模块

by https://github.com/Binaryify/amrToMp3

<p>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/npm/v/amrToMp3.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/npm/l/amrToMp3.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/david/dev/binaryify/amrToMp3.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/david/binaryify/amrToMp3.svg" alt="devDependencies" ></a>
<a href="https://travis-ci.org/Binaryify/amrToMp3"><img src="https://api.travis-ci.org/Binaryify/amrToMp3.svg?branch=master" /></a>
</p>

## Installation
This module is installed via npm:
```
$ npm install amr_to_mp3_sx
```
## api
```js
amrToMp3(sourcePath[,outputPath, outputName])  //outputPath default:./src/mp3/
```

## usage
js
```js
const amrToMp3 = require('amr_to_mp3_sx')
amrToMp3('src/amr/test.amr')
  .then(function (data) {
    console.log(data)  // ./src/mp3/test.mp3
    //...some code
  })
  .catch(function (err) {
    console.log(err)
  })
```
or
```js
const amrToMp3 = require('amr_to_mp3_sx')
const data = await amrToMp3('src/amr/test.amr') // ./src/mp3/test.mp3
console.log(data)
```

## support
* 64 bit Mac OSX
* 64 bit Linux
* 32 bit Linux
* 64 bit Windows
* 32 bit Windows

## test
```
$ npm test
```

## build
```
$ npm run build
```
