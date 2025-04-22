const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"
const fs = require('fs').promises
const path = require('path')

// create file
const createFile = async (name) => {
    try {
        const content = ""
        await fs.writeFile(name, content)
        console.log("write file success: ", name)
    } catch (err) {
        console.log(err)
    }
}


// create file
const songFile = async () =>{
    try {
        const fetchData = await fetch(url)
        const data = await fetchData.json()

        const reverseName = data.map(item => item.split(" - ").reverse().join(" - "))

        reverseName.forEach(music=>{
            createFile(path.join("music", `${music}.mp3`))
        })
    } catch (err){
        console.log(err)
    }
}
songFile()  