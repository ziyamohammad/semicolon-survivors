import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { getAllCareGivers, registerCareGiver } from "../controllers/careGiver.controller.js";

const router= Router();

// register route

router.route("/register").post(
    upload.fields([
        {
            name: "image",
            maxCount: 1
        },
        {
            name:"aadharDetail",
            maxCount:1
        }
    ]), registerCareGiver )

router.route("/fetch").get(getAllCareGivers)

    export default router
