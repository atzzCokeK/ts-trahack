export default function notExistSample(): void {
  const name = null
  console.log(name, typeof name)

  if (name) {
    console.log('吾輩は猫である。名前は' + name)
  } else {
    console.log('吾輩は猫である。名前はまだ' + name)
  }

  const age = undefined

  if (age) {
    console.log('吾輩は猫である。年齢は' + age)
  } else {
    console.log('吾輩は猫である。年齢は秘密')
  }
}
