async function getKataAnime( lang = "id") {
    const url = "https://katanime.vercel.app/api/getrandom";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Something wrong with API!");
        }
        const json = await response.json();
        const result = json.result;
        let kataKataHariIniBang = "";
        result.forEach((element) => {
            const text = lang == "id" ? element.indo : element.english;
            kataKataHariIniBang += text + " - " + element.character + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; " + " &nbsp; &nbsp; ";
        });
        document.getElementById("kataAnime").innerHTML = kataKataHariIniBang;
    } catch (err) {
        console.error(err.message);
    }
}

document.getElementById("idLink").addEventListener("click", function(){
    getKataAnime("id");
});

document.getElementById("enLink").addEventListener("click", function(){
    getKataAnime("en");
});

getKataAnime();
