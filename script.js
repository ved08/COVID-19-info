// getting the elements
let enteredDate = document.getElementById('dateBox');
let months = document.getElementById('months');
let enteredValue;
let month;
const setDate = () => {
    if(enteredDate.value.length === 1){
        enteredDate.value = '0' + enteredDate.value;
    }
    // concatenation of the date and month    
    month = months.options[months.selectedIndex].value;
    enteredValue = `${enteredDate.value} ${month}`
    return enteredValue
}

function submit(){ 
    setDate();
 // used Fetch API to render the data
    fetch('https://api.covid19india.org/data.json')
	.then(response => response.json())
	.then(({ cases_time_series: cases }) =>
            cases.find(
            x => {
            if(x.date === enteredValue + ' '){ //here x is the data.json
    //               date = x.date;
                        document.getElementById('dailyconfirmed').textContent = x.dailyconfirmed;
                        document.getElementById('dailydeceased').textContent = x.dailydeceased;  
                        document.getElementById('dailyrecovered').textContent = x.dailyrecovered;
                        document.getElementById('totalconfirmed').textContent = x.totalconfirmed;      
                        document.getElementById('totaldeceased').textContent = x.totaldeceased;
                        document.getElementById('totalrecovered').textContent = x.totalrecovered;    
                }
            })
        )
}
// End of Main Code
$(document).ready(() => {
	$.getJSON('https://covid19.mathdro.id/api', (data) => {
		$('#confirmed').html(data.confirmed.value);
		$('#active').html(data.confirmed.value - data.recovered.value - data.deaths.value);
		$('#recovered').html(data.recovered.value);
		$('#deaths').html(data.deaths.value);
		$('#recovery-rate').html('Recovery Percentage: '+Math.floor((data.recovered.value/data.confirmed.value)*100)+'% (approx*)')
		$('#death-rate').html('Death Percentage: '+Math.floor((data.deaths.value/data.confirmed.value)*100)+'% (approx*)')
    })
    $.getJSON('https://covid19.mathdro.id/api/countries/india', (data) => {
		$('#confirmedI').html(data.confirmed.value);
		$('#activeI').html(data.confirmed.value - data.recovered.value - data.deaths.value);
		$('#recoveredI').html(data.recovered.value);
		$('#deathsI').html(data.deaths.value);
		$('#recovery-rateI').html('Recovery Percentage: '+Math.floor((data.recovered.value/data.confirmed.value)*100)+'% (approx*)')
		$('#death-rateI').html('Death Percentage: '+Math.floor((data.deaths.value/data.confirmed.value)*100)+'% (approx*)')
	})
})