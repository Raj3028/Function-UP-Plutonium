let axios = require("axios")
// ======================================================================
let getList = async function (req, res) {
    try {
        let DistrictID = req.query.ID
        let Date = req.query.DATE
        console.log(`DATA: ${DistrictID} ${Date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${DistrictID}&date=${Date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}
// ======================================================================
module.exports = getList
