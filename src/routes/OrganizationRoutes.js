import { Router } from "express";
import { findByName } from "../controller/OrganizationController.js"

const OrganizationRoutes = Router()
    .get('/find-by-name', findByName)

export default OrganizationRoutes