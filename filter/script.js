function renderData() {
    let country = $('#input-country')[0].value.toLowerCase();
    let url = 'https://covid19.mathdro.id/api/countries/'.concat(country)
    // $.getJSON(url, (data) => {
    //     if()
    //     $('#confirmed').html(data.confirmed.value);
    // })
    $.ajax({
        type: 'GET',
        url: 'https://covid19.mathdro.id/api/countries/'.concat(country),
        success: (data) => {
            console.log(data)
            $('#confirmed').html(data.confirmed.value);
            $('#active').html(data.confirmed.value - data.recovered.value - data.deaths.value);
            $('#recovered').html(data.recovered.value);
            $('#deaths').html(data.deaths.value);
            $('#recovery-rate').html('Recovery Percentage: '+Math.floor((data.recovered.value/data.confirmed.value)*100)+'% (approx*)')
            $('#death-rate').html('Death Percentage: '+Math.floor((data.deaths.value/data.confirmed.value)*100)+'% (approx*)');
            if((data.deaths.value/data.confirmed.value)*100 < 1){
                $('#death-rate').html('Death Percentage: Good news!!! Less than 1%');              
            }
        },
        error: () => {
            $('#confirmed').html('Error 400');
            $('#active').html('Error 400');
            $('#recovered').html('Error 400');
            $('#deaths').html('Error 400');
            alert("oops an error occured check country's spelling or your internet connection maybe weak");            
            $('#input-country')[0].value = '';
            $('#input-country')[0].placeholder = 'Try Again';
        }
    })
    console.log(country)
}