import { Router } from "express";
import OrganizationRoutes from "./OrganizationRoutes.js"

const routes = Router()
    .use('/organization', OrganizationRoutes)

export default routes