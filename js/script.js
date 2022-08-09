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

var txt, a
txt = "Type a number:"
a = prompt(txt)
document.write("Starting number "+a+"")
while(a != 1){
    var a1
    a1 = a
    if (a % 2 == 0){
        a /= 2
        document.write("<br>"+a1+" / 2 = "+a+"")
    }
    else if (a % 3 == 0){
        a /= 3
        document.write("<br>"+a1+" / 3 = "+a+"")
    }
    else if (a % 5 == 0){
        a /= 5
        document.write("<br>"+a1+" / 5 = "+a+"")
    }
    else{
        document.write("<br>I don't know)")
        a = 1
    }
}

