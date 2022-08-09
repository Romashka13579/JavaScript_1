// var txt, a
// txt = "Type your age:"
// a = prompt(txt)
// if (a == "") {
//     document.write(":(")
// }
// else {
//     var calc
//     calc = 2022 - a
//     document.write("You were born in " + calc + "")
// }

// var txt, a
// txt = "Type a number:"
// a = prompt(txt)
// document.write("Starting number "+a+"")
// while(a != 1){
//     var a1
//     a1 = a
//     if (a % 2 == 0){
//         a /= 2
//         document.write("<br>"+a1+" / 2 = "+a+"")
//     }
//     else if (a % 3 == 0){
//         a /= 3
//         document.write("<br>"+a1+" / 3 = "+a+"")
//     }
//     else if (a % 5 == 0){
//         a /= 5
//         document.write("<br>"+a1+" / 5 = "+a+"")
//     }
//     else{
//         document.write("<br>I don't know)")
//         a = 1
//     }
// }

var txt, a, rand
txt = "Type amount of random nubers:"
a = prompt(txt)
for(var k = 0; k <= a; k++){
    rand = Math.floor(10* Math.random())
    switch(rand){
        case 2:
        case 4:
        case 8:
            document.write("<br> the number "+rand+" is divisible by 2")
            break
        case 7:
            document.write("<br> the number "+rand+" is divisible by 7")
            break
        case 5:
            document.write("<br> the number "+rand+" is divisible by 5")
            break
        case 3:
        case 6:
        case 9:
            document.write("<br> the number "+rand+" is divisible by 3")
            break
        case 1:
            document.write("<br> the number "+rand+" is divisible only by 1")
        case 0:
            document.write("<br> "+rand+" is zero)")
        default:
            break
    }
}