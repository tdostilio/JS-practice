function hello(name) {
    if (name == null) {
        console.log("hello world");
    } else {
     console.log("hello " + name);
    }
}

hello();

function madlib(name, subject) {
    return name + "'s favorite subject is " + subject;
}

madlib('tom', 'cs');

function tipAmount(billAmount,levelOfservice) {
    if (levelOfservice == 'good') {
        return (1.2 * billAmount);
    } else if (levelOfservice == 'fair') {
        return (1.15 * billAmount);
    } else {
        return (1.1 * billAmount);
    }
}

function splitAmount(billAmount, levelOfservice, numPeople) {
    return (tipAmount(billAmount,levelOfservice)/numPeople);
}

console.log(splitAmount(50,'good',2));