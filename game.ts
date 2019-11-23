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
