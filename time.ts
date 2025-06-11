import { EventEmitter } from 'events';

class Time extends EventEmitter {
    timeNow: number;
    maxTime: number;

    constructor(maxTime: number,timeNow:number) {
        super(); 
        this.timeNow = timeNow ;
        this.maxTime = maxTime;
    }
    getTime(): number {
        return this.timeNow;
    }
    tic(): void {
        this.timeNow++;
        if (this.timeNow === this.maxTime) {
            this.timeNow = 0;
            this.emit('resetTime');
        }       
    }
    startTic(): void {
        setInterval(() => {
            this.tic(); 
            console.log(`${pad(hour.timeNow)}:${pad(minute.getTime())}:${pad(second.getTime())}`);
        }, 1000);
    }
        
}
function pad(num:number):string {
        return num<10? '0' + num.toString() : num.toString();
}  
const now=new Date;
const hour: Time = new Time(24,now.getHours());
const minute: Time = new Time(60,now.getMinutes());
const second: Time = new Time(60,now.getSeconds());
second.on('resetTime', () => {
    minute.tic();
});
minute.on('resetTime', () => {
    hour.tic();
});
second.startTic();
