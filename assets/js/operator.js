// unary  operator

const fullname = "Student Binar";

console.log(typeof fullname);

if (typeof fullname == "string") {
    console.log(fullname);
} else {
    console.log("Maaf variable tidak bertipe string");
}

// boolean values
const student = {
    fullname: "Fayi",
    age: 20,
    isActive: true
}

if (student.isActive) {
    console.log(`Hello ${student.fullname}, umur anda ${student.age} Tahun.`);
} else {
    console.log("Maaf student tidak aktif!");
}

// comparison
const hargaBarang = 10000;
const minimalHargaBarang = 12000;
const diskon = 10 / 100;

if (hargaBarang < minimalHargaBarang) {
    console.log("Harga yang harus dibayar = " + (hargaBarang - (hargaBarang * diskon)));

} else {
    console.log("Harga yang harus dibayar = " + hargaBarang);
}

if (student.age == 10) {
    console.log("student sudah dewasa");
} else {
    console.log("student  cukup dewasa");
}

// logical operator

student.grade = 80;

if (student.grade == 80 || student.grade == 90 || student.grade == 70) {
    console.log("Anda cukup pandai!");

}

// refactory
const standarGradePandai = [80, 90, 70];
if (standarGradePandai.includes(student.grade)) {
    console.log("Anda Cukup Pandai!");

}


console.log("fayi" - 1);

let usia = prompt("Berapa usia anda saat ini?")
if (usia >= 18) {
    alert("Anda cukup umur");

} else {
    alert("anda belum cukup umur");
}

let angka = prompt("Masukan angka genap");
for (let index = 0; index <= angka; index++) {
    console.log(angka);
    angka += 2;

}

for (let index = 0; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz");
    } else if (index % 3 == 0) {
        console.log("Fizz");
    } else if (index % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }

}