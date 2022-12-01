const express = require("express");
const axios = require("axios");

const Phone = require("../models/phone");

const router = express.Router();

//  http requests to /api/phones/:id gets routed here
router.get("/:id", (req, res, next) => {

  function getCics() {
    return axios.get("http://169.59.167.206:9090/phoneapi/items"+req.params.id);
  }
  function getDb2() {
    return axios.get("http://192.168.48.127:19890/catalog_device_dimensions/devices/"+req.params.id);
  }
  function getDvm() {
    return axios.get("http://192.168.48.127:19890/catalog_shipping/itemShipping?ITEMID="+req.params.id, {headers: {Authorization: 'Basic YmtlbGxlcjpwYXNzdzByZA=='}});
  }
  function getMongo(){
    return Phone.findOne({itemID: req.params.id}).lean().exec();
  }

  Promise.all([getCics(), getDb2(), getDvm(), getMongo()])
  .then(function (results) {
    const cicsItem = results[0].data.cics_single_resp.inquire_single.single_item;
    const db2Item = results[1].data['ResultSet Output'][0];
    const dvmItem = results[2].data.Records[0];
    const respMongo = results[3];

    const mergedPhone = {...cicsItem, ...db2Item, ...dvmItem, ...respMongo};

    res.status(200).json(mergedPhone);
  }).catch(errors => {
    console.log("error:" + errors);
  })
})

//  http requests to /api/phones gets routed here
router.get("", (req, res, next) => {

  function getCics() {
    // CICS call to inquireCatalog API
    return axios.get('http://169.59.167.206:9090/phoneapi/items');
  }
  function getMongo(){
    return Phone.find().lean().exec();
  }

  Promise.all([getCics(), getMongo()])
    .then(function (results) {
      const cicsItems = results[0].data.cics_cat_resp.inquire_request.cat_item;
      const respMongo = results[1];

      let mergedPhones = cicsItems.map(cicsPhone => {
        let matchedMongo = respMongo.find(el => el.itemID === cicsPhone.itemID.toString())
        return { ...cicsPhone, ...matchedMongo}
      })

      res.status(200).json({
        message: "Phones fetched successfully!",
        phones: mergedPhones
      });
    }).catch(errors => {
      console.log("error:" + errors);
    })
});


module.exports = router;
