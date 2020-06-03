import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

//Create an event handler as follows
const connectHandler = () => {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', () => {
    console.log('data received succesfully .');
});

// Fire the connection event
eventEmitter.emit('connection'); //incia
console.log("Program Ended");
