const express = require("express");
const axios = require("axios");

const router = express.Router();

//  http requests to /api/order gets routed here
router.post("", (req, res, next) => {

  function orderFromCics() {
    let order = {
      cics_order_req: {
        placeOrder: {
          itemID: req.body.itemID,
          orderQuantity: req.body.orderQuantity
        }
      }
    }
    return axios.post("http://192.168.48.127:19890/catalogManager/order", order);
  }

  Promise.resolve(orderFromCics())
  .then(results => {
    res.status(200).json(results.data.cics_order_resp);
  }).catch(errors => {
    console.log("error:" + errors);
  })
});

module.exports = router;
