import React ,{ useState, useEffect, }from 'react'


const getWeather = () => {
  

  const [city,setCity]=useState(null)
  const [search,setSearch]=useState("Nagpur")
  

     useEffect(()=>{

      const fetchApi=async ()=>{
            const  key = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={ApiKey}`;
            const responce= await fetch(key)
            const resJson= await responce.json()

            setCity(resJson.main)
      }
      fetchApi()
     },[search])


 // Date
 let d = new Date();
 let date = d.getDate();
 let year = d.getFullYear();
 let month = d.toLocaleString("default", {month:'long'});
 let day = d.toLocaleString("default", {weekday:'long'});

 // Time
 let time = d.toLocaleString([],{
     hour : '2-digit',
     minute: '2-digit',
     second:'2-digit'
 });

    
  return (
    <>
      <div className="main">
        <div className="child">
          <div className="inputData">
          <div class="clock">
            {day}, {month} {date}, {year}
            <br />
            {time}
          </div>
         
            <input
              className="inputFeild"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter City Name"
            />
          </div>
          

          {!city ? (
            <h4 className="errorMsg">Data Not Found</h4>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fa fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className="temp">{city.temp}°C</h1>
                <h3>
                  <p> Max :{city.temp_max} °C</p>
                  <p> Min :{city.temp_min} °C </p>
                  <p> Humidity :{city.humidity}% </p>
                  <p> Pressure :{city.pressure} N/m2</p>
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
          }
  

export default getWeather
