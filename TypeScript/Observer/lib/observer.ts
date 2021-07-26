
interface IObserver {
 update: (data: any) => void
}

interface ISubject {
    subscribe: (observer: IObserver) => void
    unSubscribe: (observer: IObserver) => void
}


class BitCoin implements ISubject {

    observers: IObserver[] = [];

    constructor(){
        const el: HTMLInputElement | null = document.querySelector('#value');
        el?.addEventListener('input', () => {this.notify(el.value)});
    }
    
    subscribe(observer: IObserver){
        this.observers.push(observer);
    }

    unSubscribe(observer: IObserver) {
        const index = this.observers.findIndex(obs => observer === obs);
        this.observers.splice(index, 1);
    }

    notify(data: any){
        this.observers.forEach(obs => obs.update(data));
    }

}

class Display implements IObserver {

    private el: HTMLElement | null;
    
    constructor(){

        this.el = document.querySelector('#price');

    }

    update(data: any){
        if(this.el){
            this.el.innerText = data;
        }
    }
}


let bit = new BitCoin();

let display = new Display();
bit.subscribe(display);
