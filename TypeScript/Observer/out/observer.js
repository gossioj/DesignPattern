var BitCoin = /** @class */ (function () {
    function BitCoin() {
        var _this = this;
        this.observers = [];
        var el = document.querySelector('#value');
        el === null || el === void 0 ? void 0 : el.addEventListener('input', function () { _this.notify(el.value); });
    }
    BitCoin.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    BitCoin.prototype.unSubscribe = function (observer) {
        var index = this.observers.findIndex(function (obs) { return observer === obs; });
        this.observers.splice(index, 1);
    };
    BitCoin.prototype.notify = function (data) {
        this.observers.forEach(function (obs) { return obs.update(data); });
    };
    return BitCoin;
}());
var Display = /** @class */ (function () {
    function Display() {
        this.el = document.querySelector('#price');
    }
    Display.prototype.update = function (data) {
        if (this.el) {
            this.el.innerText = data;
        }
    };
    return Display;
}());
var bit = new BitCoin();
var display = new Display();
bit.subscribe(display);
