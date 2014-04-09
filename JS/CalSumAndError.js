var summa = new Object;
summa.result = 0;
summa.errors = [];

function SummaArgs(a) {
    var j = 0;
    var s = 0;
    for (var i in a) {
        if (j > 9) {
            throw new Error('Параметров должно быть не более десяти, а вы передали ' + (j + 1));
        }
        switch (typeof a[i]) {
            case 'string':
                summa.errors.push(j + ' параметр является строкой');
                j++;
                continue;
            case 'object':
                summa.errors.push(j + ' параметр является объектом');
                j++;
                continue;
            case 'function':
                summa.errors.push(j + ' параметр является функцией');
                j++;
                continue;
            case 'boolean':
                summa.errors.push(j + ' параметр является логическим значением');
                j++;
                continue;
        }
        s += a[i];
        j++;
    }
    summa.result = s;
}
