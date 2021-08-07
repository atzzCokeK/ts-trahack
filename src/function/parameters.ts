// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('sample1: user signedIn', username)
    return true
  } else {
    console.log('not signedIn')
    return false
  }
}

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('sample3: user signedIn', username)
    return true
  } else {
    console.log('sample4: not signedIn')
    return false
  }
}

//レスとパラメータを取る関数
export const sumPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}

// 呼び出しシグネチャ
type LogMessage = (message: string) => void

export const logMessage6: LogMessage = (message) => {
  console.log(message)
}

type FullLogMessage = { (message: string): void }

export const logMessage7: FullLogMessage = (message) => {
  console.log(message)
}
