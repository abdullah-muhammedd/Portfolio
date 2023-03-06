let express = require( 'express' );
let path = require( 'path' );


// Setup the application
let app = express();
app.set( 'views', path.join( __dirname, '/Views' ) );
app.set( 'view engine', 'ejs' );


// Middlewares
app.use( express.static( path.join( __dirname, '/Public' ) ) );
app.get( '/', ( req, res ) =>
{
    res.render( 'index' );
} );

app.listen( 3000 );