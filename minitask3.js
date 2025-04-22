const fs = require("fs/promises");
const path = require("path");

// memindahkan file
const moveFile = async (data, destination) => {
  try {
    await fs.rename(data, destination)
  } 
  catch (err) {
    console.log(err);
  }
}
// membuat folder
const createFolder = async (folderName) => {
    try { 
        await fs.mkdir(`./music/${folderName}`)
    } 
    catch (err) {
      if (err.code === 'EEXIST') {
        console.log(`Folder ${folderName} sudah ada`)
      } else {
          console.log('Error membuat folder')
      }
    }
}
// check folder
const checkFolder = async (folder) => {
  try {
      await fs.access(`music/${folder}`)
      console.log(`Folder ${folder} sudah ada`)
  } catch {
      await createFolder(folder)
  }
}

const mainProject = async () => {
  try {
    const listSongFiles = (await fs.readdir('music')).filter(item => item.endsWith('.mp3'))
    // console.log(listSongFiles) // list file mp3 di folder music
        for (let file of listSongFiles) {
            let folderName = file.substring(0,file.indexOf(' -'))
            await checkFolder(folderName)
            await moveFile(`music/${file}`, `music/${folderName}/${file}`)
        }
  } catch (err) {
    console.log(err);
  }
};

mainProject();

