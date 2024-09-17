import Offence from "../models/Offence.js";

export const getOffences = async (req, res) => {
   try {
      const offences = await Offence.find();
      res.json(offences);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};

export const addOffence = async (req, res) => {
   const offence = new Offence(req.body);
   try {
      const newOffence = await offence.save();
      res.status(201).json(newOffence);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};
