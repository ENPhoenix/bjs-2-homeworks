class AlarmClock {

    //выделяет память для объекта
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    //добавляет новый звонок в коллекцию существующих
    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы")
        }

        const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    // удаляет звонки по определённому времени
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    //возвращает текущее время в строковом формате
    getCurrentFormattedTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }


    //запускает будильник
    start() {
        if (this.intervalId !== null) {
            return;
        }
        
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            
            this.alarmCollection.forEach(alarm => { 
                if (alarm.time === currentTime && alarm.canCall) { 
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }


    //останавливает выполнение интервала будильника
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }  
    

    //сбрасывает возможность запуска всех звонков
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true; 
        });
    }


    //удаляет все звонки
    clearAlarms() {
        this.stop();
        this.alarmCollection = []; 
    }
}

