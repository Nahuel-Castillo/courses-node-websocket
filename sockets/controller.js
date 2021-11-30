
const sockectController = (socket) => {
    
    socket.on('send-message', ( payload, callback )  => {
       
        // this.io.emit('send-message', payload);

        const id = 12345;

        callback( { id });

        socket.broadcast.emit('send-message', payload);
    });

}

module.exports = { 
    sockectController
};