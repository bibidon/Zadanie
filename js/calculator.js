function Actions() {
    this.numbers = Array.prototype.slice.call(arguments, 0);
    this.isFirstAction = true;
    this.result = 0;
};

//Описываю методы экземпляра Actions 

Actions.prototype.addition = function () {
    this._actions(this._addition);
};
Actions.prototype.subtraction = function () {
    this._actions(this._subtraction);
};
Actions.prototype.multiplication = function() {
    this.isFirstAction && (this.result = 1);
    this._actions(this._multiplication);
};
Actions.prototype.division = function () {
    this._actions(this._division);
};
Actions.prototype._actions = function(callback) {
    var params = [];
    if (this.isFirstAction) {
        params = this.numbers.splice(0, 2);
    } else {
        params = this.numbers.splice(0, 1);
    }
    callback.call(this, params);
    this.isFirstAction = false;
};
//Приватные члены экземпляра

Actions.prototype._addition = function (params) {
    var that = this;
    params.forEach(function(item) {
        if (item instanceof Array) {
            that.result += item.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            });
        } else {
            that.result += item;
        }
    });
};
Actions.prototype._subtraction = function (params) {
    var that = this;
    params.forEach(function (item) {
        if (item instanceof Array) {
            that.result -= item.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            });
        } else {
            that.result -= item;
        }
    });
};
Actions.prototype._multiplication = function (params) {
    var that = this;
    params.forEach(function (item) {
        if (item instanceof Array) {
            that.result *= item.reduce(function (previousValue, currentValue) {
                return previousValue * currentValue;
            });
        } else {
            that.result *= item;
        }
    });
};
Actions.prototype._division = function (params) {
    var that = this;
    params.forEach(function (item) {
        if (item instanceof Array) {
            that.result /= item.reduce(function (previousValue, currentValue) {
                return previousValue * currentValue;
            });
        } else {
            that.result /= item;
        }
    });
};