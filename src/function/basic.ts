// アロー関数
export const logMessage = (message: string): void => {
  console.log('function basic sample1', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log(message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log(message)
}

// 省略記法
export const logMessage4 = (message: string): void => console.log(message)

export const alwaysThrowError = (message?: string): never => {
  throw new Error(message)
}
