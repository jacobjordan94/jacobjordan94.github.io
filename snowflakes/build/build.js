var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snow;
(function (Snow) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var x = window.innerWidth;
            var y = window.innerHeight;
            _super.call(this, x, y, Phaser.AUTO, 'content', null);
            this.state.add('Scene', Snow.Scene, null);
            this.state.start('Scene');
        }
        return Game;
    }(Phaser.Game));
    Snow.Game = Game;
})(Snow || (Snow = {}));
window.onload = function () {
    var game = new Snow.Game();
};
var Snow;
(function (Snow) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.apply(this, arguments);
            this.snowflakes = [];
            this.tick = 0;
        }
        Scene.prototype.preload = function () {
            this.load.image('sf', 'build/assets/sf.png');
        };
        Scene.prototype.create = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.stage.backgroundColor = '#c4f3ff';
        };
        Scene.prototype.update = function () {
            this.tick++;
            if (this.tick >= 5) {
                this.addSnowflake();
                this.tick = 0;
            }
        };
        Scene.prototype.render = function () {
        };
        Scene.prototype.addSnowflake = function () {
            var x = this.randomNum(-25, window.innerWidth + 25);
            var y = this.randomNum(-100, -300);
            this.snowflakes.push(new Snow.Snowflake(this.game, x, y, 'sf'));
        };
        Scene.prototype.randomNum = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return Scene;
    }(Phaser.State));
    Snow.Scene = Scene;
})(Snow || (Snow = {}));
var Snow;
(function (Snow) {
    var Snowflake = (function (_super) {
        __extends(Snowflake, _super);
        function Snowflake(game, x, y, spriteKey) {
            _super.call(this, game, x, y, spriteKey);
            this.anchorVals = [
                0.5, 0.55, 0.6,
                0.65, 0.7, 0.75,
                0.8, 0.85, 0.9,
                0.95, 1
            ];
            this.game = game;
            this.game.add.existing(this);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.angle = this.randomNum(-180, 180);
            var anchor = this.anchorVals[this.randomNum(0, this.anchorVals.length - 1)];
            this.anchor.set(anchor, anchor);
            this.setVars();
        }
        Snowflake.prototype.update = function () {
            this.angle += this.angleV;
            if (this.y >= window.innerHeight + 200) {
                this.destroy();
            }
        };
        Snowflake.prototype.randomNum = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        Snowflake.prototype.setVars = function () {
            var scale = Math.random();
            this.scale.set(scale, scale);
            switch (true) {
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
        };
        return Snowflake;
    }(Phaser.Sprite));
    Snow.Snowflake = Snowflake;
})(Snow || (Snow = {}));
//# sourceMappingURL=build.js.map