// fgo24-nodejs
// minitask1.js
const fs = require('fs').promises
const path = require('path')

async function createFile(fileName){
    try {
        const content = ""
        await fs.writeFile(fileName,content)
    } catch (error) {
        console.log(err);
    }
}

const listMusic = [
    "Bernadya - Satu Bulan",
    "Nadhif Basalamah - Penjaga Hati",
    "Lyodra - Tak Dianggap",
    "Jucy Luicy ft Adrian - Sialan",
    "Anggi Marito - Tak Segampang Itu",
    "Feby Putri ft Fiersa Besari -  Runtuh",
    "Last Child - Duka",
    "For Revenge - Serana",
    "Nidji - Laskar Pelangi",
    "Letto - Ruang Rindu"
]

listMusic.forEach(music =>{
    createFile(path.join("music", `${music}).mp3`))
})

