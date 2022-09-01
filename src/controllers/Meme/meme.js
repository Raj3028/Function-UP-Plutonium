let axios = require("axios")
// ======================================================================
let meme = async function (req, res) {
    try {
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userName = req.query.userName
        let password = req.query.password
        let ID = req.query.template_id

        console.log(`text0: ${text0},text1: ${text1},userName: ${userName},password: ${password},Template ID: ${ID}`)
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${ID}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
            //     https://api.imgflip.com/caption_image?template_id=87743020&text0=ON&text1=ON&username=raj_8984&password=Rajesh006
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
module.exports = meme