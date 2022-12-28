import  express  from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../Utils/verifytoken.js";

const router = express.Router();

//create
router.post("/:hotelId",verifyAdmin,createRoom);
//update
router.put("/:id",verifyAdmin,updateRoom);
//check for availability
router.put("availability/:id",updateRoomAvailability);
//deleted
router.delete("/:id",verifyAdmin,deleteRoom);
//Get
router.get("/:id",getRoom);
//Get All
router.get("/",getAllRoom);

export default router;