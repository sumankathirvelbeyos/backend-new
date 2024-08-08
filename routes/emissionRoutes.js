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
const Ghg1Schema = require("../models/ghg1Model");
const Ghg2Model = require("../models/ghg2Model");
const Ghg3Model = require("../models/ghg3Model");
const Facility = require("../models/facilityDeclaration");
const EmissionManagement = require("../models/emissionManagement");
const BoundarySetting = require("../models/boundarySetting");
const Login = require("../models/login");
const StationaryCombustion = require("../models/stationaryCombustion");
const Target = require("../models/target");
const multer = require('multer');
const path = require('path');
//profiledetails
router.post("/profiledetails", async (req, res) => {
  try {
    const {
      email,
      organizationName,
      description,
      address,
      sector,
      currency,
      natureOfBusiness,
      website,
      numberOfEmployees,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new CompanyProfile({
      email,
      organizationName,
      description,
      address,
      sector,
      currency,
      natureOfBusiness,
      website,
      numberOfEmployees,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getprofiledetails", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await CompanyProfile.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//offsetpage

router.post("/offset", async (req, res) => {
  try {
    const { email, description, emissionOffset, location, typeOfOffset,year } =
      req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new OffsetsPage({
      email,
      year,
      description,
      emissionOffset,
      location,
      typeOfOffset,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getoffset", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await OffsetsPage.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//fugitiveemission

router.post("/fugitiveemmission", async (req, res) => {
  try {
    const {
      email,
      id,
      year,
      month,
      facilityCode,
      facilityName,
      refrigerantChargedNew,
      capacityOfEquipmentNew,
      refrigerantChargedExisting,
      capacityOfEquipmentRetiring,
      refrigerantRecoveredRetiring,
      emissions,
      emissionType,
      responsibility,
      monthlyStatus
    } = req.body;

    if (!email ||
      !id ||
      !year ||
      !month ||
      !facilityCode ||
      !facilityName ||
      !refrigerantChargedNew ||
      !capacityOfEquipmentNew ||
      !refrigerantChargedExisting ||
      !capacityOfEquipmentRetiring ||
      !refrigerantRecoveredRetiring ||
      !emissions ||
      !emissionType ||
      !responsibility ||
      !monthlyStatus) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new FugitiveEmission({
      email,
      id,
      year,
      month,
      facilityCode,
      facilityName,
      refrigerantChargedNew,
      capacityOfEquipmentNew,
      refrigerantChargedExisting,
      capacityOfEquipmentRetiring,
      refrigerantRecoveredRetiring,
      emissions,
      emissionType,
      responsibility,
      monthlyStatus
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getfugitiveemmission", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await FugitiveEmission.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//mobilecombustion

router.post("/mobilecombustion", async (req, res) => {
  try {
    const {
      email,
      year,
      month,
      facilityCode,
      facilityName,
      vehicleType,
      fuelType,
      quantity,
      siUnits,
      distance,
      fileUrl,
      emissions,
      monthlyStatus,
      emissionType,
      responsibility
    } = req.body;

    // Check if all required fields are provided
    if (!year ||!email || !month || !facilityCode || !facilityName || !vehicleType || !fuelType || !quantity || !siUnits || !distance || !emissions || !monthlyStatus || !emissionType || !responsibility) {
      return res.status(422).json({ error: "Please fill all the required fields" });
    }

    const finalUser = new MobileCombustion({
      email,
      year,
      month,
      facilityCode,
      facilityName,
      vehicleType,
      fuelType,
      quantity,
      siUnits,
      distance,
      fileUrl,
      emissions,
      monthlyStatus,
      emissionType,
      responsibility
    });

    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getmobilecombustion", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await MobileCombustion.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//processemission

router.post("/processemission", async (req, res) => {
  try {
    const {
      email,
      year,
      month,
      facilityCode,
      facilityName,
      GasType,
      Source,
      quantity,
      siUnits,
      fileUrl,
      emission,
      status,
      emissionType,
      responsibility,
      button
    } = req.body;
  
    if (!email || !year || !month || !facilityCode || !facilityName || !GasType || !Source || !quantity || !siUnits || emission === undefined || status === undefined || !emissionType || !responsibility || !button || !button.action) {
      return res.status(422).json({ error: "fill all the details" });
    }
  
    const finalUser = new ProcessEmission({
      email,
      year,
      month,
      facilityCode,
      facilityName,
      GasType,
      Source,
      quantity,
      siUnits,
      fileUrl,
      emission,
      status,
      emissionType,
      responsibility,
      button
    });
  
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getprocessemission", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await ProcessEmission.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//PurchasedElectricity

router.post("/purchasedelectricity", async (req, res) => {
  try {
    const {
      email,
      year,
      month,
      facilityCode,
      facilityName,
      electricityType,
      consumption,
      siUnits,
      fileUrl,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new PurchasedElectricity({
      email,
      year,
      month,
      facilityCode,
      facilityName,
      electricityType,
      consumption,
      siUnits,
      fileUrl,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getpurchasedelectricity", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await PurchasedElectricity.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//ReducedEmission
router.post("/reducedemission", async (req, res) => {
  try {
    const { email, description, emissionReduced, facilityId, facility ,year} =
      req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new ReducedEmission({
      email,
      year,
      description,
      emissionReduced,
      facilityId,
      facility,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getreducedemission", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await ReducedEmission.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//UserConfiguration

router.post("/userconfig", async (req, res) => {
  try {
    const { name, email, role, status } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new UserConfiguration({
      name,
      email,
      role,
      status,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getuserconfig", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await UserConfiguration.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//GHG1

//UserConfiguration

router.post("/ghg1", async (req, res) => {
  try {
    const {
      email,
      Boiler,
      Furnace,
      Dryer,
      Kiln,
      Flares,
      Incinerator,
      PowerGenerator,
      ThermicFluidHeater,
      ProcessHeaterOven,
      CombustionTurbine,
      ThermalOxidizers,
      Others,
      Car,
      Crane,
      ExecutiveJet,
      Motorcycle,
      Forklift,
      FreightTrain,
      LightDutyTruck,
      ConstructionVehicle,
      CommuterTrain,
      HeavyDutyTruck,
      AgricultureVehicle,
      Ship,
      PassengerBus,
      CommercialFlight,
      Boat,
      PassengerVan,
      Otherssource,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Ghg1Schema({
      email,
      Boiler,
      Furnace,
      Dryer,
      Kiln,
      Flares,
      Incinerator,
      PowerGenerator,
      ThermicFluidHeater,
      ProcessHeaterOven,
      CombustionTurbine,
      ThermalOxidizers,
      Others,
      Car,
      Crane,
      ExecutiveJet,
      Motorcycle,
      Forklift,
      FreightTrain,
      LightDutyTruck,
      ConstructionVehicle,
      CommuterTrain,
      HeavyDutyTruck,
      AgricultureVehicle,
      Ship,
      PassengerBus,
      CommercialFlight,
      Boat,
      PassengerVan,
      Otherssource,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getghg1", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Ghg1Schema.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});
module.exports = router;

//ghg2

router.post("/ghg2", async (req, res) => {
  try {
    const {
      email,
      R401A,
      R401B,
      R401C,
      R402A,
      R402B,
      R403B,
      R404A,
      R406A,
      R407A,
      R407B,
      R407C,
      R407D,
      R407E,
      R408A,
      R409A,
      R410A,
      R410B,
      R411A,
      R411B,
      R413A,
      R414A,
      R414B,
      R417A,
      R422A,
      R422D,
      R423A,
      R424A,
      R426A,
      R428A,
      R434A,
      R500,
      R502,
      R504,
      R507,
      R508A,
      R508B,
      Others,
      ProcessVent,
      EquipmentVent,
      MaintenanceTurnaround,
      Leaks,
      LoadingUnloadingActivities,
      CO2,
      CH4,
      N2O,
      CFC,
      HFC,
      PFC,
      HFE,
      PFPMIE,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Ghg2Model({
      email,
      R401A,
      R401B,
      R401C,
      R402A,
      R402B,
      R403B,
      R404A,
      R406A,
      R407A,
      R407B,
      R407C,
      R407D,
      R407E,
      R408A,
      R409A,
      R410A,
      R410B,
      R411A,
      R411B,
      R413A,
      R414A,
      R414B,
      R417A,
      R422A,
      R422D,
      R423A,
      R424A,
      R426A,
      R428A,
      R434A,
      R500,
      R502,
      R504,
      R507,
      R508A,
      R508B,
      Others,
      ProcessVent,
      EquipmentVent,
      MaintenanceTurnaround,
      Leaks,
      LoadingUnloadingActivities,
      CO2,
      CH4,
      N2O,
      CFC,
      HFC,
      PFC,
      HFE,
      PFPMIE,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getghg2", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Ghg2Model.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//ghg3

router.post("/ghg3", async (req, res) => {
  try {
    const {
      email,
      NationalGrid,
      Solar,
      Wind,
      Hydro,
      Nuclear,
      NaturalGas,
      Biogas,
      coal,
      PurchasedGoodsServices,
      CapitalGoods,
      FuelEnergyActivities,
      UpstreamTransportation,
      WasteFromOperations,
      BusinessTravel,
      EmployeeCommute,
      DownstreamTransportation,
      UpstreamAssets,
      UseOfSoldProducts,
      ProcessingOfSoldProducts,
      EOLSoldProducts,
      Investment,
      Franchise,
      DownstreamAssets,
      ServiceProviderName,
      EmissionFactor,
      SIUnit,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Ghg3Model({
      email,
      NationalGrid,
      Solar,
      Wind,
      Hydro,
      Nuclear,
      NaturalGas,
      Biogas,
      coal,
      PurchasedGoodsServices,
      CapitalGoods,
      FuelEnergyActivities,
      UpstreamTransportation,
      WasteFromOperations,
      BusinessTravel,
      EmployeeCommute,
      DownstreamTransportation,
      UpstreamAssets,
      UseOfSoldProducts,
      ProcessingOfSoldProducts,
      EOLSoldProducts,
      Investment,
      Franchise,
      DownstreamAssets,
      ServiceProviderName,
      EmissionFactor,
      SIUnit,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//facilitydeclaration
router.post("/getghg3", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Ghg3Model.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/facilitydeclaration", async (req, res) => {
  try {
    const { email, facilityName, facilityID, country, latitude, longitude } =
      req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Facility({
      email,
      facilityName,
      facilityID,
      country,
      latitude,
      longitude,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getfacilitydeclaration", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Facility.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//emissionmanagement

router.post("/emissionmanagement", async (req, res) => {
  try {
    const { email, type, facility, year, user } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new EmissionManagement({
      email,
      type,
      facility,
      year,
      user,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getemissionmanagement", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await EmissionManagement.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//boundarysetting

router.post("/boundarysetting", async (req, res) => {
  try {
    const {
      email,
      CalendarYear,
      FiscalYear,
      Year2024,
      Year2023,
      Year2022,
      Year2021,
      Year2020,
      NumberOfFacilities,
      StartingMonth,
      EndingMonth,
      BaseYear,
      Scope1Emissions,
      Scope2Emissions,
      Scope3Emissions,
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new BoundarySetting({
      email,
      CalendarYear,
      FiscalYear,
      Year2024,
      Year2023,
      Year2022,
      Year2021,
      Year2020,
      NumberOfFacilities,
      StartingMonth,
      EndingMonth,
      BaseYear,
      Scope1Emissions,
      Scope2Emissions,
      Scope3Emissions,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getboundarysetting", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await BoundarySetting.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//login

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Login({
      email,
      password,
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Login.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});



//login

router.post("/stationarycombustion", async (req, res) => {
  try {
    const {
      email,
      year,
      month,
      facilityCode,
      facilityName,
      vehicleType,
      fuelType,
      quantity,
      siUnits,
      distance,
      fileUrl,
      emissions,
      emissionType,
      responsibility,
      status,
      button
    } = req.body;

    // Check if all required fields are provided
    if (!email || !year || !month || !facilityCode || !facilityName || !vehicleType || !fuelType || !quantity || !siUnits || !distance || !fileUrl || !emissions || !emissionType || !responsibility || !status || !button || !button.text || !button.action) {
      return res.status(422).json({ error: "Please fill all the required fields" });
    }

    const finalUser = new StationaryCombustion({
      email,
      year,
      month,
      facilityCode,
      facilityName,
      vehicleType,
      fuelType,
      quantity,
      siUnits,
      distance,
      fileUrl,
      emissions,
      emissionType,
      responsibility,
      status,
      button
    });

    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/getstationarycombustion", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await StationaryCombustion.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//target

router.post("/target", async (req, res) => {
  try {
    const { 
      email,
      targetType,
  targetYear,
  baseYear,
  scope1Emissions,
  scope2Emissions,
  reductionPercentage
    
    } = req.body;

    if (!email) {
      res.status(422).json({ error: "fill all the details" });
    }

    const finalUser = new Target({
      email,
      targetType,
  targetYear,
  baseYear,
  scope1Emissions,
  scope2Emissions,
  reductionPercentage
    });
    const storeData = await finalUser.save();
    res.status(201).json({ status: 200, storeData });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

router.post("/gettarget", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(422).json({ error: "nomatch" });
    } else {
      const response = await Target.find({ email: email });
      res.json(response);
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
    console.log(error);
  }
});

//uploadfiles
// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('pdfFile'); // 'pdfFile' is the name of the input field

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: PDFs Only!');
  }
}

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: 'No file selected!' });
      } else {
        res.status(200).json({
          message: 'File uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

module.exports = router;
