module Snow {
    export class Game extends Phaser.Game {
        constructor() {
            let x = window.innerWidth;
            let y = window.innerHeight;
            super(x, y, Phaser.AUTO, 'content', null);
            this.state.add('Scene', Scene, null);
            this.state.start('Scene');
        }
    }
}

window.onload = () => {
    let game = new Snow.Game();
};