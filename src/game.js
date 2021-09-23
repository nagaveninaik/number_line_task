import Phaser from 'phaser';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';
import addButton from './assets/plus.png';
import subButton from './assets/minus.png';
import playBtn from './assets/click.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
        //initialize default values
        this.minLimit=-2;
        this.maxLimit=2;
        this.width=750;
        this.centerValue=(this.width/2);


        this.firstNumber =0;
        this.secondNumber=0;
        this.finalPosition=0;
    }

        
    preload ()
    {
        this.load.image('numberLine',numberLine);
        this.load.image('boy',boy);
        this.load.image('addButton',addButton);
        this.load.image('subButton',subButton);
        this.load.image('playBtn',playBtn);
    }
       
    create ()
    {
       
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.sprite(375,700,'boy');
        //this.tryText=this.add.text(this.centerValue,100,`${this.firstNumber}     *     ${this.secondNumber}     =     ${this.finalPosition}`,{ fontFamily: 'serif',fontSize: '80px' });
        //this.tryText.setOrigin(0.5);
        //display boy movement values with increment and decrement modify buttons
        this.firstNumberText=this.add.text(50,100,`${this.firstNumber}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonX1 = this.add.image(40,220,'addButton');
        this.subButtonX1 = this.add.image(120,220,'subButton');

        
        this.addButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>{
            this.xValueIncrement();
        });
        
       

        this.subButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>{
            this.xValueDecrement();
        });
        
        

        this.add.text(200,100,`*`,{ fontFamily: 'serif',fontSize: '80px' });

        //display boy movement capacity at a time with increment and decrement modified buttons
       this.secondNumberText=this.add.text(350,100,`${this.secondNumber}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonY2 = this.add.image(340,220,'addButton');
        this.subButtonY2 = this.add.image(420,220,'subButton');

        this.addButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>{
        this.yValueIncrement();
        });

        this.subButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>{
        this.yValueDecrement();
        });

        this.add.text(500,100,`=`,{ fontFamily: 'serif',fontSize: '80px' });

        this.finalPositionText = this.add.text(650,100,`${this.finalPosition}`,{ fontFamily: 'serif',fontSize: '80px' });
       
        //play button
        this.playBtn = this.add.image(680,220,'playBtn');
        this.playBtn.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
        {
                
                this.boyMovement();    
        }
        
        );  
    }
    
    //movement increment button
    xValueIncrement()
    {
        this.tweens.killTweensOf(this.boy);
        this.boy.setPosition(this.centerValue,700);
        if( this.firstNumber < this.maxLimit){
            this.firstNumber+=1;
            this.finalPosition=this.firstNumber*this.secondNumber;
        };
        this.firstNumberText.setText(`${this.firstNumber}`);
        this.finalPositionText.setText(`${this.finalPosition}`);
        
        
    
    }
    ////movement decrement button
    xValueDecrement()
    {
        this.tweens.killTweensOf(this.boy);
        this.boy.setPosition(this.centerValue,700);
        if(this.firstNumber > this.minLimit){
            this.firstNumber-=1;
            this.finalPosition=this.firstNumber*this.secondNumber;
         }
         this.firstNumberText.setText(`${this.firstNumber}`);
         this.finalPositionText.setText(`${this.finalPosition}`);
         
    }
    

    //move capacity increment button
    yValueIncrement()
    {
        this.tweens.killTweensOf(this.boy);
        this.boy.setPosition(this.centerValue,700);
        if( this.secondNumber < this.maxLimit){
            this.secondNumber+=1;
            this.finalPosition=this.firstNumber*this.secondNumber;
        }
        this.secondNumberText.setText(`${this.secondNumber}`);
        this.finalPositionText.setText(`${this.finalPosition}`);
    }

    //move capacity decrement button
    yValueDecrement()
    {
        this.tweens.killTweensOf(this.boy);
        this.boy.setPosition(this.centerValue,700);
        if(this.secondNumber > this.minLimit){
            this.secondNumber-=1;
            this.finalPosition=this.firstNumber*this.secondNumber;
        }
        this.secondNumberText.setText(`${this.secondNumber}`);
        this.finalPosition
        Text.setText(`${this.finalPosition}`);
    
    }


    //boy tween movement function

    boyMovement(){
        this.tweens.killTweensOf(this.boy);
        this.boy.setPosition(this.centerValue,700);
            if(this.finalPosition==0){
                return 0;
            }
            else if(this.secondNumber>0)
            {
                this.firstNumber=(this.finalPosition/this.secondNumber);
            }
            else if(this.secondNumber<0)
            {
                this.firstNumber=-(this.finalPosition/this.secondNumber);

            }

            var timeline = this.tweens.timeline({

            tweens: [{
                    targets:this.boy,
                    x: this.centerValue+(this.firstNumber*80),
                    ease: 'ease-out',
                    duration: 1000,
                    yoyo:false
                
            },
            {
                targets:this.boy,
                    x: this.centerValue+(this.finalPosition*80),
                    ease: 'ease-out',
                    duration: 1000,
                    yoyo:false,
                    delay:1500,
                     
            }]
    
        });
    }
        
     
}

export default MyGame;