import Organization from "../model/Organization.js"

const findByName = async (request, response) => {
    const { organization_name } = request.query

    const result = await Organization.findOne({ where: { name: organization_name } })

    if (result)
        return response.json(result)
    else 
        return response.status(404).json({ message: "Organization not found!" })
}

export {
    findByName
}