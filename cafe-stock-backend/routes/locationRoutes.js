import express from 'express';
import {getAllLocations, createLocation, updateLocation} from '../controllers/locationController.js';
const router = express.Router();

router.get('/', getAllLocations);
router.post('/', createLocation);
router.put('/:id', updateLocation); 

export default router;