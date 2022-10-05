async function getSchoolByName(apiKey, schoolName) {
    const path = `http://api.data.gov/ed/collegescorecard/v1/schools?school.name=${schoolName}&api_key=${apiKey}`
    try {
        const res = await fetch(path)
        const json = await res.json()

        const totalResults = json.metadata.total
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

        if (schoolResults.length === 0) { 
            return 'No results'
        }
        //console.log(schoolResults)
        return schoolResults
    } catch(error) {
        console.log(error.message)
    }
}

const results = getSchoolByName('Harvard')

console.log(results)



export { getSchoolByName }
