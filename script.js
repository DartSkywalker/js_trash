let num = 50;

// if (num <49) {
//     console.log('Not good');
// } else if (num  > 100) {
//     console.log('So much')
// } else {
//     console.log('Ok, good :)');
// };


switch (num) {
    case num < 49:
        console.log('So less');
        break;
    case num > 100:
        console.log('So much')
        break;
    case num == 50:
        console.log('Ok, good!')
        break;
    //default выполнится в любом случае
    default:
        console.log("smth goes wrong");
        break;
}