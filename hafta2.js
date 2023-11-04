var degisken1 = "Bu bir stringdir";
var degisken2 = "13";
var degisken3 = true;
var degisken4 = false;
var arrayDegisken = [1, 2, "3", "4", 5];
// arrayDegisken.push("6");
arrayDegisken.reverse();

var objectValue = { id: 1, name: "Btk Akademi" };
var arrayObject = [
  { id: 1, name: "Btk Akademi" },
  { id: 2, name: "Btk Akademi2" },
  { id: 3, name: "Btk Akademi3" },
];

var nullValue = null;
var undefinedValue = undefined;

var age = 15;
age++;
age += 5;
age = age + 5;

age -= 5;
age = age - 5;

age *= 5;
age = age * 5;

if (age % 2 == 0 && age % 5 == 0) {
  //
} else {
  //
}

// for (let i = 4; i < 10; i+=2) {
//   console.log(i);
// }

// var whileValue = 0;
// while(whileValue < 10){
//     whileValue++;
//     console.log(whileValue);
// }

function ikinciSoru() {
  var number1 = document.getElementById("sayi1").value;
  if (number1 < 0) {
    window.alert("Sayı Negatif!");
  } else if (number1 > 0) {
    window.alert("Sayı Pozitif!");
  } else {
    window.alert("Sayı 0!");
  }
}

function ucuncuSoru() {
  var number1 = document.getElementById("sayi1").value;
  if (number1 % 2 == 0) {
    window.alert("Sayi Çift");
  } else {
    window.alert("Sayi Tektir");
  }
}

function dorduncuSoru() {
  var birinciSayi = document.getElementById("birinciSayi").value;
  var ikinciSayi = document.getElementById("ikinciSayi").value;
  var cevre = 2 * kisaKenar + 2 * uzunKenar;
  var alan = kisaKenar * uzunKenar;
  window.alert(alan);
}

function besinciSoru() {
  var birinciSayi = document.getElementById("birinciSayi").value;
  var ikinciSayi = document.getElementById("ikinciSayi").value;
  for (let i = birinciSayi; i <= ikinciSayi; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      window.alert(i);
    }
  }
}

function altinciSoru() {
  var birinciSayi = document.getElementById("birinciSayi").value;
  var ikinciSayi = document.getElementById("ikinciSayi").value;
  var ucuncuSayi = document.getElementById("ucuncuSayi").value;
  var ortalama =
    (Number(birinciSayi) + Number(ikinciSayi) + Number(ucuncuSayi)) / 3;
  window.alert(ortalama);
}

function yedinciSoru() {
  var vize = document.getElementById("vize").value;
  var final = document.getElementById("final").value;
  var ortalama = Number((vize * 4) / 10) + Number((final * 6) / 10);
  window.alert(ortalama);
}
function sekizinciSoru() {
  var gosterge = document.getElementById("gosterge");
  var test = Number(gosterge.innerHTML);
  test++;
  gosterge.innerHTML = test;
}

function dokuzuncuSoru() {
  var sayi1 = document.getElementById("sayi1").value;
  var toplam = 0;
  for (let i = 0; i < sayi1; i++) {
    toplam += i;
  }
  console.log(toplam);
}

const onuncuSoru = () => {
  var fahre = document.getElementById("fahre").value;
  var celc = fahre * -17.22;
  console.log(celc);
};

function ondorduncuSoru() {
  let birinciSayi = document.getElementById("birinciSayi").value;
  let ikinciSayi = document.getElementById("ikinciSayi").value;
  if (birinciSayi > ikinciSayi) {
    for (let index = birinciSayi; index > ikinciSayi; index--) {
      console.log(index);
    }
  } else {
    for (let index = birinciSayi; index < ikinciSayi; index++) {
      console.log(index);
    }
  }
}

function onbesinciSoru() {
  var sayiBir = document.getElementById("sayiBir").value;
  var sayiIki = document.getElementById("sayiIki").value;
  var sayiOrtalama = (Number(sayiBir) + Number(sayiIki)) / 2;
  console.log("Sayıların Ortalaması : ", sayiOrtalama);
}

function onAltinciSoru() {
  var sayiBir = document.getElementById("sayiBir").value;
  var sayiIki = document.getElementById("sayiIki").value;
  var sayiUc = document.getElementById("sayiUc").value;

  var buyukSayi = 0;
  if (sayiBir > sayiIki && sayiBir > sayiUc) {
    buyukSayi = sayiBir;
  } else if (sayiIki > sayiUc) {
    buyukSayi = sayiIki;
  } else {
    buyukSayi = sayiUc;
  }
  console.log(buyukSayi);
}

function onYedinciSoru() {
  var birinciKenar = document.getElementById("birinciKenar").value;
  var ikinciKenar = document.getElementById("ikinciKenar").value;
  let sonuc = (birinciKenar ** 2 + ikinciKenar ** 2) ** 0.5;
  console.log(sonuc);
}

function onSekizinciSoru() {
  var birinciKenar = document.getElementById("birinciKenar").value;
  var ikinciKenar = document.getElementById("ikinciKenar").value;
  if (birinciKenar < ikinciKenar) {
    console.log("birinci kenar küçük");
  } else {
    console.log("ikinci kenar küçük");
  }
}

class Car {
  constructor(name, year, model,price) {
    this.name = name;
    this.year = year;
    this.model = model;
    this.price = price;
  }
  calculateAge() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  calculateKDV(){
    // return this.price * 18/100;
    console.log(this.price*18/100);
  }
}

var car1 = new Car("Fiat", 2019, "Albea",200000);
// console.log(car1.calculateKDV());
// car1.calculateKDV();
// console.log(car1);
// console.log(car2);

class Users {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  getInfo(){
    console.log(this.name + " " + this.surname + " " + this.age + "yaşındadır." )
  }
}

// let user = new Users("Talha","Alataş",26);
// user.getInfo();

// var degisken = "";
// var degisken2 = new String(""); // Kullanma!!

// var degisken3 = 0;
// var degisken = new Number(0); // Kullanma!!!



function onDokuzuncuSoru(){
    var taban = document.getElementById("taban").value;
    var yukseklik = document.getElementById("yukseklik").value;
    var alan = (taban*yukseklik/2);
    console.log(alan);
      
}

function yirmincisoru(){
    var yaricap = document.getElementById("cap").value;
var cevre= 2*3.14*yaricap
var alan= 3.14*yaricap**2
console.log(cevre,alan);
}

dizi=[1,2,5,7]
function yirmiBirincisoru(){
    var toplam=0
    for (let index = 0; index < dizi.length; index++) {
        const element =dizi[index];
        toplam+=element
        
    }
    console.log(toplam)
}

