import { type } from "os";

let myAge: string | number; // Union Type

myAge = 15;

console.log(myAge);
myAge = "Muhammad ";
console.log(myAge);

let newAge: any = Math.random() > 0.5 ? "Khan" : 60;
newAge.toUpperCase;

if (newAge === "Khan") {
  newAge.toUpperCase;
  console.log(newAge);
  newAge.toLowerCase;
} else {
  console.log("sdsadsa");
}

typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed();

let yourName = Math.random() > 0.5 ? "Muhammad Khan" : undefined;
if (yourName === "Muhanmmad Khan") {
  console.log(yourName);
  yourName.toUpperCase;
} else {
  console.log(yourName);
}

//yourName.toUpperCase // Possibly Undefined //Error

type student = {
  name: string;
  age?: number;
};
let Talibilm: student = {
  name: "Hamza",
  age: 45,
};
interface Manager {
  name: string;
  productNo: number;
}

console.log(Talibilm + `کیا حال ہیں`);
interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// Ok Yp

let tube;
console.log()

//Intersected Typee Picture in Mobile








