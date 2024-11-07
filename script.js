let age = 27
let price = "$5"

if (age < 12) {
    console.log("Ticket price is $5");
}else if (age >= 12 && age <= 17) {
    console.log("Ticket price is $10");
}else if (age >= 18 && age <=64) {
    console.log("Ticket price is $15");
}else if (age >= 65 && age <=120) {
    console.log("Ticket price is $8");
}else if(age < 0 || age >120) {
    console.log("%c" + "Age number is wrong!", "color: red");
}