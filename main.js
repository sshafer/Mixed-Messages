// Display a three-part message

// Random number function
function generateRandomNumber(num) {
    return Math.floor(Math.random()*num)
};
// Object of 3 arrays for messages
const randomMessage = {
    names: [],
    verbs:[],
    adverbs:[],
},
// output array
const message = [];

//fill output array
for (let value in randomMessage){
    let choice = generateRandomNumber(randomMessage[choice].length)
    
    switch(value) {
        case 'names':
            message.push("$randomMessage[value][choice] ")
            break
        case 'verbs':
            message.push("$randomMessage[value][choice] ")
            break
        case 'adverbs':
            message.push("$randomMessage[value][choice].")
            break

    }
}
//create function to display output array
function messageOutput(output){
    const format = message.join
    console.log(format)
}
//call output array function
messageOutput(message)
