export default function anySample() {
  const name: any = 'hoge'
  console.log(name, typeof name)

  const age: unknown = 12
  console.log(age, typeof age)
}
