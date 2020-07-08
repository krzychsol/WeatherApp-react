import React from 'react';
import './Result.css'

const Result = props => {

    const {err, city, temp, sunrise, sunset, wind ,pressure,date} =  props.weather 
    let content = null
    if(!err && city){
        const sunriseTime = new Date(sunrise *1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset *1000).toLocaleTimeString()
        content = (
            <>
                <div class="table100 ver3 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Wyniki wyszukiwania dla miasta <em>{city}</em></th>
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
								<tr class="row100 body">
									<td class="cell100 column1">Dane dla dnia i godziny</td>
									<td class="cell100 column2">{date}</td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Aktualna temperatura</td>
									<td class="cell100 column2">{temp} &#176;C</td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Wschód słońca dzisiaj</td>
									<td class="cell100 column2">{sunriseTime}</td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Zachód słońca dzisiaj</td>
									<td class="cell100 column2">{sunsetTime}</td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Aktualna siła wiatru</td>
									<td class="cell100 column2">{wind} m/s</td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Aktualne ciśnienie</td>
									<td class="cell100 column2">{pressure} hPa</td>
								</tr>

								
							</tbody>
						</table>
					</div>
				</div>
            </>
        )
    }
    return ( 
        <div className="result">
            {err ? <div className="error">
                <p>Nie znaleziono wyników dla {city}</p>
            </div> : content}
        </div>
     );
}
 
export default Result;
