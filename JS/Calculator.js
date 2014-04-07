function Actions(args) {
    this.args = arguments;
    this.Proverka = false;
    this.result = 0;
};

//Описываю методы экземпляра Actions 

Actions.prototype.addition = function () {
    var i = 0;
    if (this.Proverka === false) {
        var j = 2;
        var k = 0;
        var ad = 0;
        for (; k < j; k++) {
            if (this.args[i] instanceof Array) {
                ad += adMas(this.args[i]);
                Array.prototype.splice.call(this.args, 0, 1);
            }
            else {
                ad += this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
        }
    }
    else {
        if (this.args[i] instanceof Array) {
            ad = this.result + adMas(this.args[i]);
            Array.prototype.splice.call(this.args, 0, 1);
        }
        else {
            ad = this.result + this.args[i];
            Array.prototype.splice.call(this.args, 0, 1);
        }

    }

    this.result = ad;
    this.Proverka = true;
    return this;
}

Actions.prototype.subtraction = function () {
    var i = 0;
    if (this.Proverka === false) {
        var j = 2;
        var k = 0;
        var sub = 0;
        for (; k < j; k++) {
            if (sub === 0) {
                sub = this.args[i];
            }
            else {
                sub -= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
            if (this.args[i] instanceof Array) {
                sub -= subMas(this.args[i]);
                Array.prototype.splice.call(this.args, 0, 1);
            }
            else {
                sub -= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
        }
    }
    else {
        if (this.args[i] instanceof Array) {
            sub = this.result - subMas(this.args[i]);
            Array.prototype.splice.call(this.args, 0, 1);
        }
        else {
            sub = this.result - this.args[i];
            Array.prototype.splice.call(this.args, 0, 1);
        }
    }
    this.result = sub;
    this.Proverka = true;
    return this;
}

Actions.prototype.multiplication = function () {
    var i = 0;
    if (this.Proverka === false) {
        var j = 2;
        var k = 0;
        var mult = 0;
        for (; k < j; k++) {
            if (mult === 0) {
                mult = this.args[i];
            }
            else {
                mult *= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
            if (this.args[i] instanceof Array) {
                mult *= mulMas(this.args[i]);
                Array.prototype.splice.call(this.args, 0, 1);
            }
            else {
                mult *= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
        }
    }
    else {
        if (this.args[i] instanceof Array) {
            mult = this.result * mulMas(this.args[i]);
            Array.prototype.splice.call(this.args, 0, 1);
        }
        else {
            mult = this.result * this.args[i];
            Array.prototype.splice.call(this.args, 0, 1);
        }
    }
    this.result = mult;
    this.Proverka = true;
    return this;
}

Actions.prototype.division = function () {
    var i = 0;
    if (this.Proverka === false) {
        var j = 2;
        var k = 0;
        var divi = 0;
        for (; k < j; k++) {
            if (divi === 0) {
                divi = this.args[i];
            }
            else {
                divi /= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
            if (this.args[i] instanceof Array) {
                divi /= divMas(this.args[i]);
                Array.prototype.splice.call(this.args, 0, 1);
            }
            else {
                divi /= this.args[i];
                Array.prototype.splice.call(this.args, 0, 1);
            }
        }
    }
    else {
        if (this.args[i] instanceof Array) {
            divi = this.result / divMas(this.args[i]);
            Array.prototype.splice.call(this.args, 0, 1);
        }
        else {
            divi = this.result / this.args[i];
            Array.prototype.splice.call(this.args, 0, 1);
        }
    }
    this.result = divi;
    this.Proverka = true;
    return this;
}

//Описываю функции для вычисления элементов класса Array

function adMas(_Array_) {
    var i = 0;
    var aM = 0;
    for (; i < _Array_.length; i++) {
        aM += _Array_[i];
    }
    return aM;
}

function subMas(_Array_) {
    var i = 0;
    var sM = 0;
    for (; i < _Array_.length; i++) {
        if (_Array_[i] == 0) continue;
        if (sM == 0)
            sM = _Array_[i];
        else sM -= _Array_[i];
    }
    return sM;
}

function mulMas(_Array_) {
    var i = 0;
    var mM = 0;
    for (; i < _Array_.length; i++) {
        if (_Array_[i] == 0) continue;
        if (mM == 0)
            mM = _Array_[i];
        else mM *= _Array_[i];
    }
    return mM;
}

function divMas(_Array_) {
    var i = 0;
    var dM = 0;
    for (; i < _Array_.length; i++) {
        if (_Array_[i] == 0) continue;
        if (dM == 0)
            dM = _Array_[i];
        else dM /= _Array_[i];
    }
    return dM;
}