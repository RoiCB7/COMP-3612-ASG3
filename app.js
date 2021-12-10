const express = require('express');
const app = express();
//const artistData = require('./scripts/artistProvider.js');

//app.get('/', (req,resp)=>{resp.json(data)});

const router = require('./scripts/router.js');
router.handleAllArtists(app);
router.handleArtistCountry(app);
router.handleAllGalleries(app);
router.handleGalleryCountry(app);
router.handleAllPaintings(app);
router.handlePaintingById(app);
router.handlePaintingByGalleryId(app);
router.handlePaintingByArtistId(app);
router.handlePaintingByYearRange(app);
router.handlePaintingsByText(app);


const port = process.env.PORT || 8080;
app.listen(port, ()=> {

    console.log("Server running at port =" + port);

});

