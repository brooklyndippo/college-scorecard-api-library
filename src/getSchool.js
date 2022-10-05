const fetch = require('node-fetch')

class CollegeScorecard {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async getSchoolByName(schoolName) {
        const path = `http://api.data.gov/ed/collegescorecard/v1/schools?school.name=${schoolName}&api_key=${this.apiKey}`
        const data = await this.getSchoolData(path)
        return data
    }

    async getSchoolData(path) {
        try {
            const res = await fetch(path)
            const json = await res.json()

            const totalResults = json.metadata.total
            if (totalResults === 0) {
                return null
            }
            const schoolResults = []

            for (let i = 0; i < totalResults; i++) {
                let school = json.results[i].school

                schoolResults.push({
                    id: i, 
                    name: school.name,
                    city: school.city,
                    state: school.state,
                    zip: school.zip,
                    website: school.school_url
                })
            } 
            return schoolResults
        } catch(error) {
           console.log(error.message)
        }
    }
}

module.exports = CollegeScorecard;
