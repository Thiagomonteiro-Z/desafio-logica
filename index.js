//primeiro desafio JS

let name = "João";
let experience = 5;
let level = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

    if (experience < 1000) {
        console.log(`O Herói de nome ${name} está no nível: ${level[0]}`);  
    }

    else if (experience >= 1001 && experience < 2000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[1]}`);
    }

    else if (experience >= 2001 && experience < 5000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[2]}`);
    }

    else if (experience >= 5001 && experience < 7000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[3]}`);
    }

    else if (experience >= 7001 && experience < 8000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[4]}`);
    }

    else if (experience >= 8001 && experience < 9000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[5]}`);
    }

    else if (experience >= 9001 && experience < 10000) {
      console.log(`O Herói de nome ${name} está no nível: ${level[6]}`);
    }

    else if (experience >= 10001) {
      console.log(`O Herói de nome ${name} está no nível: ${level[7]}`);
    }

