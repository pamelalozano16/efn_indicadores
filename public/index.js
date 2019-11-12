
async function getData(){
try{
    const dataJSON = await fetch('http://indicadores.efactornetwork.com:8080/api/indicadores')
    const data = await dataJSON.json()
console.log(data)
for(var i in data){
    console.log(data[i].Id)
    id = data[i].Id
    document.getElementById(id).innerHTML=data[i].Valor;
}

return data

} catch(e){
    console.log(e)
    return e;
}

}
getData()

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}