
async function getData(){
try{
   //const dataJSON = await fetch('http://localhost:5000/api/indicadores')

   const dataJSON = await fetch('http://indicadores.efactornetwork.com:8080/api/indicadores')
    const data = await dataJSON.json()
console.log(data)
for(var i in data){
    //id = data[i].id
    id = data[i].Id
    var arr=$("."+id);
    console.log(arr)
    for(var j=0;j<arr.length;j++){
         //arr[j].innerHTML=data[i].valor;
       arr[j].innerHTML=data[i].Valor;
    }
}

return data

} catch(e){
    console.log(e)
    return e;
}

}
getData()
