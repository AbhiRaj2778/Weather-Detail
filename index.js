function upper(){
    let a = document.getElementById("city").value
    document.getElementById("city").value = a.toUpperCase()
}
function output(){
    let UserCity = document.getElementById("city").value
    let url =`https://goweather.herokuapp.com/weather/${UserCity}`;
    let fetchUrl= fetch(url)
    fetchUrl.then((resp)=>{
    return resp.json()
    }).then((data)=>{
        if(data == '' || data['temperature'] == undefined){
            temp.innerHTML = 'Data Not Found';
        }else{
            temp.innerHTML = `Weather Report Of ${UserCity} : <br> Temprature : ${data['temperature']} <br> Wind Speed : ${data['wind']} <br> Description : ${data['description']}`
        }
    }).catch((error)=>{
    document.getElementById("temp").innerHTML= "No Data Found";
})
}
