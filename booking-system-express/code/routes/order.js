const express = require("express");
var route = express.Router();

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  secureConnection: true,
  port: 465,
  secure: true,
  auth: {
    user: "13168393103@163.com",
    pass: "TMZCRBFMUJHJOODY",
  },
});
var mailOptions = {
  from: "13168393103@163.com",
  to: "758193578@qq.com",
  subject: "Hongkong Multi-Cinema",
  html: ``,
};

const orderModel = require("../models/order");

route.get("/", async (req, res) => {
  try {
    const orders = await orderModel.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(404).send();
  }
});

route.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await orderModel.save(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
route.post("/email", async (req, res) => {
  mailOptions.html = `
  
  <div style="display: flex; justify-content: center; align-items: center;background-color:#023037;padding:50px;"> 
  <div style="border: 2px solid #ffcb2f; width:800px;box-shadow: 0 2px 5px 2px #ffcb2f, 0.75);">
  <div style="width: 100%; height: 200px; background-color: #ffcb2f; display: flex; justify-content: center; align-items: center; font-size: 35px; color: #ffcb2f"> 
    <img src="https://hkbu-oss-23433566.oss-cn-hongkong.aliyuncs.com/cloud/pop.png" alt="" style="width: 35px;">
    <span style="color:#000">Hongkong Multi-Cinema</span>
    <img src="https://hkbu-oss-23433566.oss-cn-hongkong.aliyuncs.com/cloud/pop.png" alt="" style="width: 35px;"> 
  </div> 
  <div style="padding: 20px; margin-top: 10px;background-color: #fff;text-shadow: 1px 1px 3px #023037;">
    <div style="text-align: left; font-size: 30px; color: #000;">Dear ${req.body.buyerName},</div> 
    <div style="margin-top: 20px; color: #000; text-align: left; font-size: 16px;">
      Thanks you for your order!
    </div> 
    <div> 
      <div style="text-align: left; margin-top: 20px; font-size: 30px; color: #000; padding-bottom: 10px; border-bottom: 2px solid #000; margin-bottom: 10px;">
        Ticket Detail
      </div> 
      <div style="text-align: left;"> 
        <div style="display: inline-block; color: #000; width: 100px;">
        Movie Name
      </div> 
      <div style="margin-left: 100px; width: 100px; color: #000;">
        ${req.body.movieName}
      </div> 
    </div> 
    <div style="text-align: left;"> <div style="display: inline-block; color: #000; width: 100px;">
      Movie Date
    </div> 
    <div style="margin-left: 100px; width: 100px; color: #000;">
      ${req.body.movieDate}
    </div> 
    </div> 
    <div style="text-align: left;"> 
    <div style="display: inline-block; color: #000; width: 100px;">
      Movie Time
    </div>
    <div style="margin-left: 100px; width: 100px; color: #000;">
    ${req.body.movieTime}
    </div>
    </div> <div style="text-align: left;"> 
    <div style="display: inline-block; color: #000; width: 100px;">Hall</div> 
    <div style="margin-left: 100px; width: 100px; color: #000;">${req.body.movieHall}</div> 
    </div> <div style="text-align: left;"> <div style="display: inline-block; color: #000; width: 100px;">Seat</div>
     <div style="margin-left: 100px; width: 100px; color: #000;">${req.body.seat}</div> </div>
      <div style="text-align: left;"> <div style="display: inline-block; color: #000; width: 100px;">Unique Code</div> 
      <div style="margin-left: 100px; width: 100px; color: #000;">${req.body.uniqueCode}</div> </div> </div> </div> </div>
  </div>
  `;
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail send" + info.response);
      res.status(200).send("success send email");
    }
  });
});

route.put("/:id", async (req, res) => {
  try {
    const updateorder = await orderModel.update(req.params.id, req.body);
    res.json(updateorder);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

route.delete("/:id", async (req, res) => {
  try {
    await orderModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

// route.delete("/:id/comment", async (req, res) => {
//   try {
//     await postModel.deleteCommentByUser(req.params.id, req.body.user);
//     res.status(204).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// });

module.exports = route;
