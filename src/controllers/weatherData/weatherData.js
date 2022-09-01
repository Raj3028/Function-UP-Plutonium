let axios = require("axios")
// ======================================================================
let weatherData = async function (req, res) {
    try {
        let cityNames = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objArr = []
        for (let city = 0; city < cityNames.length; city++) {
            let objOfCity = { city: cityNames[city] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityNames[city]}&appid=6b31c9805cd7bce4d56e091e11f75837`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)
            objOfCity.temp = result.data.main.temp
            objArr.push(objOfCity)
        }
        let sort = objArr.sort((a, b) => { return b.temp - a.temp })
        console.log(sort)
        res.status(200).send({ msg: sort })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}
// ======================================================================
module.exports = weatherData
