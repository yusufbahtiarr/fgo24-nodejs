//minitask 2 - membalik nama artis ke posisi depan

const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"
fetch(url)
.then(res => res.json())
.then(data=> {
    // versi 1
    let result = []
    for(let i = 0; i < data.length; i++){
        let index = data[i].indexOf(" - ")
        const title = data[i].substring(0, index);
        const artist = data[i].substring(index+3);
        const titleArtist = `${artist} - ${title}`
        result = [...result, titleArtist]
    }
    console.log(result);

    //versi 2
    const song = data.map(item => {
        const[title, artist] = item.split(" - ")
        return `${artist} - ${title}`
    })
    console.log(song);
})

