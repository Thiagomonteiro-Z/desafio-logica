function ranking(win,lose){
    const total = win - lose
    let level = ""
    if(win <= 10){
        level = "Ferro";
    }

    else if(win >= 11 && win <= 20){
        level = "Bronze"
    }

    else if(win >= 21 && win <= 50){
        level = "Prata"
    }

    else if(win >= 51 && win <= 80){
        level = "Ouro"
    }

    else if(win >= 81 && win <= 90){
        level = "Diamante"
    }

    else if(win >= 91 && win <= 100){
        level = "Lendário"
    }

    else if(win >= 101){
        level = "Imortal"
    }

    let result = ("O Herói tem de saldo de " + total + " e está no nível de " + level)
    return  result;
}

let victories = 200;

let losses = 8;

let matches = ranking(victories, losses)

console.log(matches);