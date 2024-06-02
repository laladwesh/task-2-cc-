const data = "https://coding-week-2024-api.onrender.com/api/data";

const getData = async () => {
    for(let i = 0; i<10;i++){
        let img = document.querySelector(`#heli${i}`);
        let creA = document.querySelector(`#wo${i}`);
        let leti = document.querySelector(`#xnxx${i}`);
        let day = document.querySelector(`#xx${i}`);
        let headline = document.querySelector(`#x${i}`);
        let response = await fetch(data);
        let dat = await response.json();
        console.log(response);
        console.log(dat[i]);
        creA.innerText = "Author - " + dat[i].author + "  \nType - " + dat[i].type; 
        img.src = dat[i].image;
        day.innerText = "Date - " + dat[i].date;
        leti.innerText = dat[i].content + "\n" + "ID - " + dat[i].id;
        headline.innerText = dat[i].headline
    } 
}
getData();