const addButton = document.getElementById("button-add");
const minusButton = document.getElementById("button-minus");
const counterDisplay = document.getElementById("counter");


async function fetchCounter(getUrl){
    try{
        const response = await fetch(getUrl);
        if(!response.ok){
            throw new Error("Response Status:", response.status);}
        const json = await response.json();
        return json.count;

    }catch(error){
        console.error(error);
    }
}

async function updateCounter(){
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL";
    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;
}

async function addButtonClick(){
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/up";
    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;

}

async function minusButtonClick(){
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/down";
    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;

}

addButton.onclick = addButtonClick;
minusButton.onclick = minusButtonClick;

updateCounter();
setInterval(updateCounter, 60000);
