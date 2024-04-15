// Display a three-part message

// Random number function
function generateRandomNumber(num) {
    return Math.floor(Math.random()*num)
};
// Object of 3 arrays for messages
const randomMessage = {
    names: ['Albert', 'Betty', 'Carl', 'Debra', 'Earl', 'Fran'],
    verbs:['ran', 'jumped', 'swam'],
    adverbs:['fast', 'slow'],
};
// Output array
let message = [];

// Create function to display output array
function messageOutput(output){
    for (let value in randomMessage){
        let choice = generateRandomNumber(randomMessage[value].length)
        
        switch(value) {
            case 'names':
                message.push(`${randomMessage[value][choice]}`)
                break
            case 'verbs':
                message.push(`${randomMessage[value][choice]}`)
                break
            case 'adverbs':
                message.push(`${randomMessage[value][choice]}.`)
                break
        }
    }
    const format = message.join(' ')
    console.log(format)
};
//call output array function
messageOutput(message);
