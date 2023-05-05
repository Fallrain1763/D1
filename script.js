class D1 extends Phaser.Scene {
    constructor() {
        super('D1');
    }
    preload(){}
    create(){}
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000123,
    scene: [D1],
}

let game = new Phaser.Game(config);