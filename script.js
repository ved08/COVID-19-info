// getting the elements
let enteredDate = document.getElementById('dateBox');
let months = document.getElementById('months');
function submit(){
 // adds prefix 0 if the enteredDate.value is a single digit    
    if(enteredDate.value.length === 1){
        enteredDate.value = '0' + enteredDate.value;
    }
 // concatenation of the date and month    
    let month = months.options[months.selectedIndex].value;
    let enteredValue = `${enteredDate.value} ${month}` 
 // used Fetch API to render the data
    fetch('https://api.covid19india.org/data.json')
	.then(response => response.json())
	.then(({ cases_time_series: cases }) => cases
        .find(x => {
           if(x.date === enteredValue + ' '){ //here x is the data.json
               date = x.date
           }
			if(x.date === enteredValue + ' '){
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

