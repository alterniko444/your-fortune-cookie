document.addEventListener("DOMContentLoaded", ()=>{
    fetch('affirmations.json')
    .then(response=>response.json())
    .then(data=>{
        const random=data[Math.floor(Math.random()*data.length)];
        document.getElementById("fortune-text").textContent=random;
    })
    .catch(error=>{
        document.getElementById("fortune-text").textContent="Something went wrong.";
        console.error(error);
    });
});