export default function typeAliasSample(): void {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'tokyo',
    language: 'ja',
    name: '日本',
  }

  console.log(japan)

  type Knight = {
    hp: number
    sp: number
    weapons: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapons: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard

  type Paradin = Knight & Wizard
  1
  const adventure1: Adventurer = {
    hp: 100,
    sp: 20,
    weapons: 'sword',
    swordSkill: 'hoge',
  }

  const adventure2: Paradin = {
    hp: 20,
    sp: 400,
    mp: 3,
    weapons: 'sword',
    swordSkill: 'doubleCut',
    magicSkill: 'fireBall',
  }
}
