// import World from './world'
//
// const root = document.getElementById('root')
//
// const world = new World('Hello World')
// world.sayHello(root)

// 03.基本の型定義
// import { anySample, notExistSample, primitiveSample } from './basic'
//
// primitiveSample()
// notExistSample()
// anySample()

// 04.関数の型定義
import { logMessage, logMessage2 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumPrice } from './function/parameters'

isUserSignedIn('ABC', 'a2c')
isUserSignedIn('DEF')
isUserSignedIn2('ABC', 'tra')
isUserSignedIn2('DEB', 'tra')
console.log(sumPrice(1, 3, 5))

logMessage('hello')
