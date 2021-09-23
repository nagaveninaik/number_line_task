import Phaser from 'phaser';
import MyGame from './game';
import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 900,
    
    backgroundColor: '#823abd',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: MyGame,
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI'
        }]
    }
};

const game = new Phaser.Game(config);