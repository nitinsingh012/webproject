const cityname = document.getElementById("cityname")
const submitbtn = document.getElementById("submitbtn")
const city_name = document.getElementById("city_name")
const temp_real_val  =   document.getElementById("temp_real_val")                     
 
const temp_status = document.getElementById("temp_status")
const datahide =  document.querySelector(".middle_layer")

const getinfo = async (event)=>{
    event.preventDefault();
    let cityVal = cityname.value;
 
   if(cityVal ==""){
       city_name.innerText= `please write the name before you search`;
       datahide.classList.add("data_hide")
      

   }else{
       try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ab219fb0f913cf3bc21416d551fc3e1f`
        const response = await fetch(url)
        const data = await response.json();
        const arrdata = [data]
        city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`
       
        temp_real_val.innerText = arrdata[0].main.temp;
       temp_status.innerText = arrdata[0].weather[0].main;
       }catch {
        city_name.innerText= `please enter the name properly`;
        datahide.classList.add("data_hide")
       }
    
   }

}

submitbtn.addEventListener("click", getinfo)

