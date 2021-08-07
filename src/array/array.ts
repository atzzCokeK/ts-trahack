export default function arraySample(): void {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  console.log(colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  console.log(even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  console.log(ids)

  const commands: readonly string[] = ['git add', 'git commit']
  const commands2: ReadonlyArray<string> = ['cd', 'mkdir']
  const commands3: Readonly<string[]> = ['rm', 'git stash -u']
  console.log(commands, commands2, commands3)
}
