const express = require("express");
const router = new express.Router();
const CompanyProfile = require("../models/companyProfileDetails");
const OffsetsPage = require("../models/emissionOffset");
const FugitiveEmission = require("../models/fugitiveEmission");
const MobileCombustion = require("../models/mobileCombustion");
const ProcessEmission = require("../models/processEmission");
const PurchasedElectricity = require("../models/purchasedElectricity");
const ReducedEmission = require("../models/reducedEmission");
const UserConfiguration = require("../models/userConfig");

//profiledetails
router.post("/profiledetails", async (req, res) => {
  const { email,organizationName, description, address, sector, currency, natureOfBusiness, website, numberOfEmployees } = req.body;
 

  if (!email) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const finalUser = new CompanyProfile({
        email,organizationName, description, address, sector, currency, natureOfBusiness, website, numberOfEmployees
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error)
  }
});


router.get("/getprofiledetails", async (req, res) => {

    const {email} = req.body;

    if ( !email ) {
        res.status(422).json({ error: "nomatch" })
    }
  else{
   
        const response = await CompanyProfile.find({email:email});     
        res.json(response)
  }
});

//offsetpage

router.post("/offset", async (req, res) => {
    const { email,description, emissionOffset, location, typeOfOffset } = req.body;
   
  
    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }
    try {
      const finalUser = new OffsetsPage({
        email,description, emissionOffset, location, typeOfOffset 
      });
      const storeData = await finalUser.save();
      res.status(201).json({ status: 200, storeData });
    } catch (error) {
      res.status(422).json(error);
      console.log("catch block error");
      console.log(error)
    }
  });
  
  
  router.get("/getoffset", async (req, res) => {
  
      const {email} = req.body;
  
      if ( !email ) {
          res.status(422).json({ error: "nomatch" })
      }
    else{
     
          const response = await OffsetsPage.find({email:email});     
          res.json(response)
    }
  });


//fugitiveemission

router.post("/fugitiveemmission", async (req, res) => {
    const {  email,facilityCode,facilityName,year,month,typeOfGasEmitted,refrigerantChargedNew,capacityOfEquipmentNew,refrigerantChargedExisting,capacityOfEquipmentRetiring,refrigerantRecoveredRetiring,fileUrl } = req.body;
    
   
  
    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }
    try {
      const finalUser = new FugitiveEmission({
        email,facilityCode,facilityName,year,month,typeOfGasEmitted,refrigerantChargedNew,capacityOfEquipmentNew,refrigerantChargedExisting,capacityOfEquipmentRetiring,refrigerantRecoveredRetiring,fileUrl
      });
      const storeData = await finalUser.save();
      res.status(201).json({ status: 200, storeData });
    } catch (error) {
      res.status(422).json(error);
      console.log("catch block error");
      console.log(error)
    }
  });
  
  
  router.get("/getfugitiveemmission", async (req, res) => {
  
      const {email} = req.body;
  
      if ( !email ) {
          res.status(422).json({ error: "nomatch" })
      }
    else{
     
          const response = await FugitiveEmission.find({email:email});     
          res.json(response)
    }
  });



//mobilecombustion
  
router.post("/mobilecombustion", async (req, res) => {
    const { email, year,month,vehicleType,fuelType,quantity,siUnits,distance,fileUrl,facilityName,facilityCode } = req.body;
     
    
   
  
    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }
    try {
      const finalUser = new MobileCombustion({
        email, year,month,vehicleType,fuelType,quantity,siUnits,distance,fileUrl,facilityName,facilityCode
      });
      const storeData = await finalUser.save();
      res.status(201).json({ status: 200, storeData });
    } catch (error) {
      res.status(422).json(error);
      console.log("catch block error");
      console.log(error)
    }
  });
  
  
  router.get("/getmobilecombustion", async (req, res) => {
  
      const {email} = req.body;
  
      if ( !email ) {
          res.status(422).json({ error: "nomatch" })
      }
    else{
     
          const response = await MobileCombustion.find({email:email});     
          res.json(response)
    }
  });

//processemission

router.post("/processemission", async (req, res) => {
    const {  email,year,month,facilityCode,facilityName,GasType,Source,quantity,siUnits,fileUrl } = req.body;
   
    
   
  
    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }
    try {
      const finalUser = new ProcessEmission({
        email,year,month,facilityCode,facilityName,GasType,Source,quantity,siUnits,fileUrl
      });
      const storeData = await finalUser.save();
      res.status(201).json({ status: 200, storeData });
    } catch (error) {
      res.status(422).json(error);
      console.log("catch block error");
      console.log(error)
    }
  });
  
  
  router.get("/getprocessemission", async (req, res) => {
  
      const {email} = req.body;
  
      if ( !email ) {
          res.status(422).json({ error: "nomatch" })
      }
    else{
     
          const response = await ProcessEmission.find({email:email});     
          res.json(response)
    }
  });


//PurchasedElectricity

router.post("/purchasedelectricity", async (req, res) => {
  const { email,year, month,facilityCode,facilityName,electricityType,consumption,siUnits,fileUrl} = req.body;
 
  
 

  if (!email) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const finalUser = new PurchasedElectricity({
      email,year, month,facilityCode,facilityName,electricityType,consumption,siUnits,fileUrl
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error)
  }
});


router.get("/getpurchasedelectricity", async (req, res) => {

    const {email} = req.body;

    if ( !email ) {
        res.status(422).json({ error: "nomatch" })
    }
  else{
   
        const response = await PurchasedElectricity.find({email:email});     
        res.json(response)
  }
});



//ReducedEmission
router.post("/reducedemission", async (req, res) => {
  const { email,description,emissionReduced,facilityId,facility } = req.body;
 


  if (!email) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const finalUser = new ReducedEmission({
      email,description,emissionReduced,facilityId,facility
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error)
  }
});


router.get("/getreducedemission", async (req, res) => {

    const {email} = req.body;

    if ( !email ) {
        res.status(422).json({ error: "nomatch" })
    }
  else{
   
        const response = await ReducedEmission.find({email:email});     
        res.json(response)
  }
});


//UserConfiguration

router.post("/userconfig", async (req, res) => {
  const { name,
  email,
  role,
  status} = req.body;
 


  if (!email) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const finalUser = new UserConfiguration({
      name,
  email,
  role,
  status
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error)
  }
});


router.get("/getuserconfig", async (req, res) => {

    const {email} = req.body;

    if ( !email ) {
        res.status(422).json({ error: "nomatch" })
    }
  else{
   
        const response = await UserConfiguration.find({email:email});     
        res.json(response)
  }
});
module.exports = router;
