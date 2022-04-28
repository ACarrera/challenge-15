function random(min,max) {
    min=1;
    max=7;
    dado1= Math.floor((Math.random() * (max- min + 1)) + min);
    console.log(dado1);
}