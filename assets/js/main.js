// let balans = 123;
// alert(`Balans : ${balans} manat`);
// let isIncrease = confirm("Balansı artırmaq istəyirsiznizmi?")
// if (isIncrease) {
//     let input = prompt("Meblegi daxil edin:");
//     if (!isNaN(input)) {
//         balans = balans + Number(input);
//         alert(`Balans : ${balans} manat`);
//     }
//     else{
//         alert("Yaxsi Yol");
//     }
// }
// else{
//     alert(`Balans : ${balans} manat`);
// }


function check (name){

    let username = [];
    var name = prompt('Adinizi daxil edin');
    if (isNaN(name)) {

        for (i = 0; i < username.length; i++) {
            if (username[i] == name) {
                console.error('Bu ad var');
                function check();
            }
            else{
                username.push(name);
                function check();
            }
        }
    }
}


