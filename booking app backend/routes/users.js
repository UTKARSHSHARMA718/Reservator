import  express  from "express";
import { updateUser,deleteUser,getUser,getAllUser } from "../controllers/user.js";
import { verifyToken, verifyUser ,verifyAdmin } from "../Utils/verifytoken.js";
const router = express.Router();

// //check for authentication
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("logged in")
// });
// //check user
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("user checked")
// });
// //check admin
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("admin checked")
// });
//update
router.put("/:id",verifyUser,updateUser);
//deleted
router.delete("/:id",verifyUser,deleteUser);
//Get
router.get("/:id",verifyUser,getUser);
//Get All
router.get("/",verifyAdmin,getAllUser);

export default router;