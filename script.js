class Scene0 extends Phaser.Scene {
    constructor() {
        super('Scene0');
    }
    create(){
        this.input.once('pointerdown', function ()
        {

            console.log('From Scene0 to Scene1');

            this.scene.start('Scene1');

        }, this);
    }
}

class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }
    preload(){
        this.load.image('2', './assets/2.png');
    }
    create(){
        this.bg = this.add.image(400, 260, '2');
        this.bg.setScale(1.2);
        let t1 = this.add.text(
            100, 
            100, 
            'The past is dead', 
            {
                font: "30px",
                color: "#ADD8E6"
            } 
        );

        let t2 = this.add.text(
            100, 
            200, 
            'The masters are slain', 
            {
                font: "30px",
                color: "#ADD8E6"
            } 
        );

        let t3 = this.add.text(
            100, 
            300, 
            'Yet the gungeon remains…', 
            {
                font: "30px",
                color: "#ADD8E6"
            } 
        );

        this.input.once('pointerdown', function ()
        {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
        
        }, this);

        this.cameras.main.once('camerafadeoutcomplete', function () 
        {
            console.log('From Scene1 to Scene2');

            
            this.scene.start('Scene2');
        }, this);
        
    }
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }
    preload(){
        this.load.image('1', './assets/1.png');
        this.load.audio('a2', './assets/audio2.mp3');
    }
    create(){
        this.cameras.main.fadeIn(1000, 0, 0, 0)

        this.bg = this.add.image(400, 260, '1');
        this.bg.setScale(1.3);

        let bgm = this.sound.add('a2', { loop: true });
        bgm.play();

        let t4 = this.add.text(
            40, 
            250, 
            'Play', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );

        let t5 = this.add.text(
            40, 
            300, 
            'Setting', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );

        let t6 = this.add.text(
            40, 
            350, 
            'Exit', 
            {
                font: "40px",
                color: "#FFFF00"
            } 
        );

        let t7 = this.add.text(
            40, 
            20, 
            'ENTER THE', 
            {
                font: "40px",
                color: "#FFFFFF"
            } 
        );

        let t8 = this.add.text(
            280, 
            5, 
            'GUNGEON', 
            {
                font: "120px",
                color: "#FFFFFF"
            } 
        );

        let a = this.add.circle(-275, 80, 20, 0xffffff);
        let b = this.add.rectangle(-352, 80, 150, 40, 0xffffff);
        let c = this.add.rectangle(-345, 80, 10, 40, 0xffffff);

        
        this.tweens.add({
            targets: a,
            x: 225,
            duration: 1000,
        });

        this.tweens.add({
            targets: b,
            x: 148,
            duration: 1000,
        });

        this.tweens.add({
            targets: c,
            x: 55,
            duration: 1000,
        });

        this.input.once('pointerdown', function ()
        {
            bgm.stop();
            console.log('From Scene2 to Scene3');

            this.scene.start('Scene3');

        }, this);
    }
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }
    preload(){
        this.load.image('p1', './assets/p1.png');
        this.load.audio('a1', './assets/audio1.wav');
    }
    create(){
        this.cameras.main.setBackgroundColor('#1d1d1f');
       
        const r1 = this.add.circle(200, 395, 10, 0x6666ff);
        this.p1 = this.add.image(180, 400, 'p1');
        this.p1.setScale(0.2);
        
        
        let tween = this.tweens.add({
            targets: r1,
            x: 900,
            duration: 1000,
            hold: 500,
        });

        let shoot = this.sound.add('a1', { loop: false });
        this.input.once('pointerdown', function ()
        {
            tween.play();
            shoot.play();
            this.scene.start('Scene3');
        }, this);
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 500,
    scene: [Scene0, Scene1, Scene2, Scene3],
}

let game = new Phaser.Game(config);