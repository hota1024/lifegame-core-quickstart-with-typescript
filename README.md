# 🚀 lifegame-core quick start with TypeScript

<https://github.com/hota1024/lifegame-core>

## 1. Install ts-node

```bash
yarn global add ts-node
# or
npm i -g ts-node
```

## 2. Install lifegame-core

```bash
yarn add lifegame-core
# or
npm i lifegame-core
```

## 3. Create `game.ts`

```typescript
import { LifeGame, ArrayWorld, BasicEnvironment, Cell, ConsoleWorldRenderer, CellState } from 'lifegame-core'

const game = new LifeGame(new ArrayWorld(20, 20, Cell), new BasicEnvironment()) // Create 20 x 20 world.
const renderer = new ConsoleWorldRenderer() // Create console world renderer.

// Random generate.
game.setEach(() => {
  return Math.random() > 0.5 ? CellState.Dead : CellState.Living
})

// Tick function.
const tick = () => {
  console.clear() // Clear console.
  renderer.draw(game.world) // Draw.
  game.forward() // Forward.

  setTimeout(tick, 500)
}

// Start
tick()
```

## 4. Run

```bash
$ ts-node game.ts
□■□□□□□■□□□□■■□□□□■□
□■□□□□□■□□□□□■□□□■■□
□■□□□□■□□□□□■□□■□□□□
□□■■■□□□□□□■■■■■□□□□
□■■■■□□□□■■■■□□■□□□□
■□□■□□□□□□□□□■■■□□□□
□□■□□□□□□□■□■■□■□□□□
■■□□□□□□□□■□□■■□□□□□
□□□□□□□□□□■■□■■□□□□■
□□□□□□□□□□■■□□□□□□□■
□□□□□■■■□□□□■■□□□□□■
□□□□□□□□□■□□□■■□□■■■
□□□□□■□□□■□□□■■□■□□■
□□■□□■■■□□■□■■■□■■□■
□□□■■□□□□■■■■■□□□■□■
□□□■■□□□□■■□□■□□□□□□
□□□□□□□□□■■□□■■□□□■□
□□□□□□□□■□□□□□□□□□□□
□□□□□□□□□□□□■□□□□■■□
□□□□□□□□□□■■□□□□□■□□
```
