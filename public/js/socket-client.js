//Html references
const lblOnline = document.querySelector('#lblonline');
const lblOffline = document.querySelector('#lbloffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    // console.log('connected');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {
    console.log('disconnect');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('send-message', payload => {
    console.log( payload.message );
});


btnSend.addEventListener('click', () => {

    const message = txtMessage.value;

    const payload = {
        message
    };

    socket.emit( 'send-message', payload, ( res ) => {
        console.log( res.id );
    } );

});