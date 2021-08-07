type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  distanceFrom(position: Position, player: Player) {
    if (player == 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段は正負反転
      }
  }
}

new Position(1, '2')

// 駒を表すクラス
abstract class Piece {
  // Piece/subClass is accessible
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // methods definitions
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうか判定する
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji === 0 && Math.abs(distance.dan) === 1
  }
}

class Narikin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      distance.suji < 2 &&
      distance.dan < 2 &&
      distance.suji !== 0 &&
      distance.dan === -1
    )
  }
}

class Game {
  private pieces = Game.makePieces
  private static makePieces(): Piece[] {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
