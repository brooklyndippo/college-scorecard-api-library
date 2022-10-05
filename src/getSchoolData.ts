type SchoolData = {
    id: number;
    name: string;
    city: string;
    state: string;
    website: string;
}

class CollegeScorecard {
    apiKey: string;
    
    constructor(apiKey : string) {
        this.apiKey = apiKey
    }

    async getSchoolByName(schoolName : string) : Promise<SchoolData[] | null > {
        const path = `http://api.data.gov/ed/collegescorecard/v1/schools?school.name=${schoolName}&api_key=${this.apiKey}`
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
                    website: school.school_url
                })
            } 
            console.log(schoolResults)
            return schoolResults
        } catch(error) {
            console.log(error.message)
        }
    }
}

export { CollegeScorecard }
