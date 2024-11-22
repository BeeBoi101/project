namespace SpriteKind {
    export const ball = SpriteKind.create()
    export const playerOne = SpriteKind.create()
    export const goal1 = SpriteKind.create()
    export const goal2 = SpriteKind.create()
    export const player2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jumped1 == 1) {
        mySprite.vy = -175
        jumped1 = 0
    }
})
sprites.onOverlap(SpriteKind.goal2, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.vx = -50
    otherSprite.setPosition(80, 60)
    info.player2.changeLifeBy(-1)
    speed = 0
    mySprite2.vx = 0
})
sprites.onOverlap(SpriteKind.playerOne, SpriteKind.ball, function (sprite, otherSprite) {
    speed += 2
    mySprite2.vx = 50 + speed
    mySprite2.vy = 0.5 * mySprite.vy
})
scene.onHitWall(SpriteKind.playerOne, function (sprite, location) {
    jumped1 = 1
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jumped2 == 1) {
        ham.vy = -175
        jumped2 = 0
    }
})
function map () {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(5, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(2, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`myTile`)
}
sprites.onOverlap(SpriteKind.goal1, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.vx = 50
    otherSprite.setPosition(80, 60)
    info.player1.changeLifeBy(-1)
    speed = 0
    mySprite2.vx = 0
})
info.player1.onLifeZero(function () {
    game.setGameOverMessage(true, "p2 wins")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.ball, function (sprite, otherSprite) {
    speed += 2
    mySprite2.vx = -50 - speed
    mySprite2.vy = 0.5 * ham.vy
})
info.player2.onLifeZero(function () {
    game.setGameOverMessage(true, "p1 wins")
    game.gameOver(true)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    ham = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        `, SpriteKind.player2)
    ham.ay = 250
    controller.player2.moveSprite(ham, 100, 0)
    ham.setPosition(150, -3)
    ham.setStayInScreen(true)
    info.player2.setLife(5)
})
scene.onHitWall(SpriteKind.player2, function (sprite, location) {
    jumped2 = 1
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    mySprite = sprites.create(img`
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        `, SpriteKind.playerOne)
    mySprite.ay = 250
    controller.player1.moveSprite(mySprite, 100, 0)
    mySprite.setPosition(0, -3)
    mySprite.setStayInScreen(true)
    info.player1.setLife(5)
})
let ham: Sprite = null
let jumped2 = 0
let mySprite: Sprite = null
let jumped1 = 0
let mySprite2: Sprite = null
let speed = 0
let mySprite4 = sprites.create(img`
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    `, SpriteKind.goal1)
let _5 = sprites.create(img`
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    `, SpriteKind.goal2)
mySprite4.setPosition(2, 60)
_5.setPosition(159, 60)
speed = 0
map()
mySprite2 = sprites.create(img`
    1 1 1 1 
    1 1 1 1 
    1 1 1 1 
    1 1 1 1 
    `, SpriteKind.ball)
mySprite2.ay = 150
mySprite2.setBounceOnWall(true)
mySprite2.vx = 0
mySprite2.setStayInScreen(true)
