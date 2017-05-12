module Snow {
    export class Scene extends Phaser.State {
        
        snowflakes: Snowflake[] = []; 
        tick: number = 0;
        
        preload() : void {
            this.load.image('sf', 'build/assets/sf.png');
        }
        
        create() : void {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.stage.backgroundColor = '#c4f3ff';
        }
        
        update() : void {
            this.tick++;
            if(this.tick >= 5){
                this.addSnowflake();
                this.tick = 0;
            }
        }
        
        render() : void {
            
        }
        
        addSnowflake() : void {
            let x = this.randomNum(-25, window.innerWidth + 25);
            let y = this.randomNum(-100, -300); 
            this.snowflakes.push(new Snowflake(this.game, x, y, 'sf'));
        }
        
        randomNum(min: number, max:number) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
}