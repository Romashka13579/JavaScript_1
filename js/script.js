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
//
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
//
// var txt, a, rand
// txt = "Type amount of random nubers:"
// a = prompt(txt)
// for(var k = 0; k <= a; k++){
//     rand = Math.floor(11* Math.random())
//     rand = rand 
//     switch(rand){
//         case 2:
//         case 4:
//         case 8:
//             document.write("<br> the number "+rand+" is divisible by 2")
//             break
//         case 7:
//             document.write("<br> the number "+rand+" is divisible by 7")
//             break
//         case 5:
//         case 10:
//             document.write("<br> the number "+rand+" is divisible by 5")
//             break
//         case 3:
//         case 6:
//         case 9:
//             document.write("<br> the number "+rand+" is divisible by 3")
//             break
//         case 1:
//             document.write("<br> the number "+rand+" is divisible only by 1")
//         default:
//             break
//     }
// }

var txt, txt1, a, rand, b
txt = "Start the game casino"
txt1 = "Choose your number (1(!/2) or 2(/2) or 21)"
a = prompt(txt)
switch (a){
    case "go":
    case "Go":
    case "start":
    case "Start":
        rand = 1 + Math.floor(60* Math.random())
        b = prompt(txt1)
        Casino(b, rand)
        break
    default:
        break
}
function Casino(b1, rand1){
    var n
    n = 0
    for(var k=0; k<=rand1; k++){
        n += 1
        if(k==21){
            n -= 21
        }
        else if(k==42){
            n -= 21
        }
        document.write(" - "+n+"")
        if(k==rand){
            document.write(" - ")
            document.write("<br> - "+n+" - ")
            if(n == 21){
                document.write("<br> you are a master of this game")
            }
            if((n % 2 == 0 && b1 == "2") || (n % 2 == 1 && b1 == "1")){
                document.write("<br>you won")
            }
            else{
                document.write("<br>you lost")
            }
        }
    }
}