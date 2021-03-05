const express = require('express');
const cors = require('cors');
const { sockectController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );
        //routes
        this.paths = {};
        //Connect to database

        //Middlewares
        this.middlewares();
        //Routes
        // this.routes();

        //Sockets
        this.sockets();
    }

    middlewares() {
        //cors
        this.app.use( cors() );

        this.app.use( express.static('public') );
    }

    routes() {}

    sockets() {
        this.io.on('connection', sockectController );
    }
    
    listen() {
        this.server.listen( this.port, () => console.log(`Running on port ${ this.port }`) );
    }

  

}

module.exports = Server;