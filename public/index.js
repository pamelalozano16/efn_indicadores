
async function getData(){
try{
    const dataJSON = await fetch('http://localhost:5000/api/indicadores')
    const data = await dataJSON.json()
console.log(data)
for(var i in data){
    console.log(data[i].id)
    id = data[i].id
    document.getElementById(id).innerHTML=data[i].valor;
}

return data

} catch(e){
    console.log(e)
    return e;
}

}
getData()