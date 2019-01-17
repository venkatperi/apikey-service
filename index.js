const express = require( 'express' )
const app = express()
const apikey = require( 'apikeygen' ).apikey;
const helmet = require( 'helmet' );

app.use( helmet() )

app.get( '/:size?', ( req, res ) => {
  let size = Number( req.params.size || 64 )
  try {
    res.json( { apikey: apikey( size ), size: size } )
  } catch ( e ) {
    res.json( { error: e.message } )
  }
} )

app.listen( 3000, () => console.log( 'Example app listening on port 3000!' ) )


