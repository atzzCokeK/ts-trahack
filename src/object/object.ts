export default function objectSample(): void {
  const a = {
    name: 'hoeg',
    age: 1,
  }
  console.log(a, typeof a)

  const b: {
    name: string
    age: number
  } = {
    name: 'fuga',
    age: 22,
  }

  console.log(b.name, typeof b)

  //  インデックスシグネチャ
  const countries: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    UnitedStates: 'Washington D.C',
  }

  console.log(countries)
}
