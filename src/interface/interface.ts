interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 1,
  type: 'hard',
}

// type alias
type MaboDofu = {
  calories: number
  spicyLevel: string
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice //intersection type

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 'hard',
  gram: 330,
}

interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 140,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

type BookType = {
  page: number
  title: string
}

interface HandBook extends BookType {
  theme: string
}

const cotrip: HandBook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string) {
    this.page = page
    this.title = title
  }

  getPublishYear(title: string): number {
    return 2016
  }
}

const popularComic = new Comic(200, '鬼滅の刃')
