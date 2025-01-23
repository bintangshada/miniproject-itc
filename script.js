async function getKataAnime() {
    const url = "https://katanime.vercel.app/api/getrandom";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Something wrong with API!");
        }
        const json = await response.json();
        console.log(json);
        const result = json.result;
        let kataKataHariIniBang = "";
        result.forEach((element) => {
            kataKataHariIniBang += element.indo + " - " + element.character + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; ";
        });
        document.getElementById("kataAnime").innerHTML = kataKataHariIniBang;
    } catch (err) {
        console.error(err.message);
    }
}

getKataAnime();

