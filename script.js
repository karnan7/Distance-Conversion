

document.getElementById('btn').addEventListener('click', function(e) {
    e.preventDefault();
    let input = parseFloat(document.getElementById('value').value);
    let result = document.getElementById('result');
    if (input) {
        let conversion = (input*1.609344).toFixed(2);
        result.innerHTML=`${input} miles is ${conversion} Kilometers.`
    }else{
        result.innerHTML="Please enter a valid number."
    }
})