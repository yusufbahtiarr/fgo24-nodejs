// const fs = require('fs').promises

// const arr = [
//     'My Cahemical Romance - Teenager',
//     'My Cahemical Romance - Welcome to the Black Parade',
//     'My Cahemical Romance - Helena',
//     'Paramore - Misery Business',
//     'Paramore - Ignorance',
//     'Paramore - Decode',
//     'Paramore - The Only Exception',
//     'Linkin Park - Numb',
//     'Linkin Park - In The End',
//     'Linkin Park - Burn It Down'
// ]
// const 

// const main = async()=> {
//     const listFiles = await fs.readdir('music')
//     arr.forEach(file => {
//         if(listFiles.includes(`${file}.mp3`)){
//             console.log(`${file} sudah ada`);
//     }else{
//         // proses untuk membuat file
//         console.log(`Berhasil membuat file ${file}`);
//     }
//     })
//     console.log(listFiles);
// }
// main()


const url =
  "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json";
const fs = require("fs/promises");
const path = require("path");

async function createFile(fileName) {
  try {
    const content = "";
    await fs.writeFile(fileName, content);
    console.log(" file success");
  } catch (err) {
    console.log(err);
  }
}
const createFolder = async (folderName) => {
    try {
    await fs.mkdir(folderName, {recursive: true}) 
    } catch (err) {
        console.log(err);
      }
}
const fetchSong = async () => {
  try {
    const result = await fetch(url);
    const res = await result.json();
    let arr = []
    let artistName = []
    res.forEach((item) => {
      const [ _, artis ] = item.split(" - ")  
      artistName.push(artis)
      const result = item.split(" - ").reverse().join(" - ");
      arr.push(result);
    });
    // console.log(arr);
    // console.log(artistName);
    
    artistName.forEach((folder)=> {
        createFolder(`${folder}`)
    })
    
    arr.forEach((songs) => {
        const [artis,_] = songs.split(" - ") 
      createFile(path.join(`${artis}`, `${songs}.mp3`));
    });
    console.log(arr);
  } catch (err) {
    console.log(err);
  }
};
fetchSong();
