var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Snow;
(function (Snow) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = this;
            var x = window.innerWidth;
            var y = window.innerHeight;
            _this = _super.call(this, x, y, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Scene', Snow.Scene, null);
            _this.state.start('Scene');
            return _this;
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.snowflakes = [];
            _this.tick = 0;
            return _this;
        }
        Scene.prototype.preload = function () {
            this.load.image('sf', 'assets/sf.png');
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
            var _this = _super.call(this, game, x, y, spriteKey) || this;
            _this.anchorVals = [
                0.5, 0.55, 0.6,
                0.65, 0.7, 0.75,
                0.8, 0.85, 0.9,
                0.95, 1
            ];
            _this.game = game;
            _this.game.add.existing(_this);
            _this.game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.angle = _this.randomNum(-180, 180);
            var anchor = _this.anchorVals[_this.randomNum(0, _this.anchorVals.length - 1)];
            _this.anchor.set(anchor, anchor);
            _this.setVars();
            return _this;
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