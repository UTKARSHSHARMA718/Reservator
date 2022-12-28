import  express  from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel,countByCity,countByType,getHotelRooms } from "../controllers/hotel.js";
import  Hotel  from "../Models/Hotels.js";
import { createError } from "../Utils/error.js";
import { verifyAdmin } from "../Utils/verifytoken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin,createHotel);
//update
router.put("/:id",verifyAdmin,updateHotel);
//deleted
router.delete("/:id",verifyAdmin,deleteHotel);
//Get
router.get("/find/:id",getHotel);
//Get All
router.get("/",getAllHotel);

router.get("/countByCity",countByCity);
router.get("/countBytype",countByType);

router.get("/rooms/:id",getHotelRooms);

export default router;