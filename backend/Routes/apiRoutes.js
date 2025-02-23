import express from "express";
import memberRoutes from "./member.routes.js";
import issuanceRoutes from "./issuance.routes.js";

const router = express.Router();

router.use("/members", memberRoutes);
router.use("/issuances", issuanceRoutes);

export default router;
