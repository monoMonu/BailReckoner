import BailApplication from '../models/BailApplication.js';

export const createBailApplication = async (req, res) => {
   const bailApplication = new BailApplication(req.body);
   try {
      const newBailApplication = await bailApplication.save();
      res.status(201).json(newBailApplication);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

export const getBailApplications = async (req, res) => {
   try {
      const bailApplications = await BailApplication.find().populate('offences');
      res.json(bailApplications);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};