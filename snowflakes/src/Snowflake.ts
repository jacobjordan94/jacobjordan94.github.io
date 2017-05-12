module Snow {
    export class Snowflake extends Phaser.Sprite {
        
        game: Phaser.Game;
        angleV: number; 
        anchorVals: number[] = [
            0.5, 0.55, 0.6,
            0.65, 0.7, 0.75, 
            0.8, 0.85, 0.9,
            0.95, 1
        ];
        
        constructor(game, x, y, spriteKey) {
            super(game, x, y, spriteKey);
            this.game = game;
            this.game.add.existing(this);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.angle = this.randomNum(-180, 180);
            let anchor = this.anchorVals[
                this.randomNum(0, this.anchorVals.length - 1)    
            ];
            this.anchor.set(anchor, anchor);
            this.setVars();
        }
        
        update() {
            this.angle += this.angleV;
            if(this.y >= window.innerHeight + 200){
                this.destroy();
            }
        }
        
        randomNum(min: number, max: number) : number {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        setVars() : void {
            let scale = Math.random();
            this.scale.set(scale, scale);
            
            switch(true) {
                case (scale <= 0.1):
                    this.angleV = 0.1;
                    this.body.velocity.y = this.randomNum(25, 35);
                    break;
                case (scale <= 0.25):
                    this.angleV = 0.25;
                    this.body.velocity.y = this.randomNum(50, 65);
                    break;
                case (scale <= 0.5):
                    this.angleV = 0.5;
                    this.body.velocity.y = this.randomNum(75, 90);
                    break;
                case (scale <= 0.75):
                    this.angleV = 0.75;
                    this.body.velocity.y = this.randomNum(100, 115);
                    break;
                case (scale <= 1):
                    this.angleV = 1;
                    this.body.velocity.y = this.randomNum(150, 175);
                    break;
                default: break;
            }
        }
    }
}