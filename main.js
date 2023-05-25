//Variables
const min = 0;
const max = 8;


const prompt = require('prompt-sync')(); //This allow us to write 

let gym = ['Yeah Buddy', 'LightWeight Baby', '5 more!'];
let motivational = ['Close your heart', 'Prove them wrong', 'Outwork everyone'];
let sigma = ['If you are friend of everybody, you are a enemy to yourself', 'Are you really heald? O your trying not to think about it?', 'Pain is everyting'];

//Functions
function juntarArrays (gym, motivational, sigma){
    let arrayJunto = [];
    let control = false;
    while(!control){
        if(gym.length!==0){
            arrayJunto.push(gym[0]);
            gym.shift();
        } else if(motivational.length !== 0){
            arrayJunto.push(motivational[0]);
            motivational.shift();
        }
            else if(sigma.length !== 0){
            arrayJunto.push(sigma[0]);
            sigma.shift();
            }
            else control = true;
        }
    arrayJunto.push(gym, motivational, sigma);
    return arrayJunto;
}   


function random(inf, sup) {
    var numPosibilities = sup - inf;
    var random = Math.random() * (numPosibilities + 1);
    random = Math.floor(random);
    return inf + random;
}

//Main
console.log('Welcome to the Gym Message Generator.');
//do{
    let keyboardMessage = prompt ('Do you want to output a message? (Y/N)','');
    let auxArray = juntarArrays(gym, motivational, sigma);
    if(keyboardMessage === 'Y'){
        switch(random(0, 9)){
            case 0: console.log(auxArray[0]); break;
            case 1: console.log(auxArray[1]); break;
            case 2: console.log(auxArray[2]); break;
            case 3: console.log(auxArray[3]); break;
            case 4: console.log(auxArray[4]); break;
            case 5: console.log(auxArray[5]); break;
            case 6: console.log(auxArray[6]); break;
            case 7: console.log(auxArray[7]); break;
            case 8: console.log(auxArray[8]); break;
            case 9: console.log(auxArray[9]); break;
            default: console.log('a'); break;
        }
    }
//}while(keyboardMessage === 'Y');