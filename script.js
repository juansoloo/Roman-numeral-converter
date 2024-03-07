const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');




convertBtn.addEventListener('click', function() {
const inputVal = parseInt(input.value, 10);

if (inputVal > 0 && inputVal < 4000) {     
    const stringToNum = String(inputVal); 
    const splitNum = stringToNum.split("").map(num => parseInt(num, 10));

    var numeral = '';

    const a = splitNum.length > 3 ? splitNum[splitNum.length - 4] * 1000 : 0;
    const b = splitNum.length > 2 ? splitNum[splitNum.length - 3] * 100 : 0;
    const c = splitNum.length > 1 ? splitNum[splitNum.length - 2] * 10 : 0;
    const d = splitNum.length > 0 ? splitNum[splitNum.length - 1] : 0;

   
    
// Thousands 
    if (a >= 1000) {
        for (let i = 0; i < splitNum[splitNum.length - 4]; i++) {
            numeral += 'M';
        }
    }
// hundreds  
    if (b > 0) {
        if (b <= 300) {
            for (let i = 0; i < splitNum[splitNum.length - 3]; i++) {
                numeral += 'C';        
            }
        } else if (b >= 400 && b < 500) {
            numeral += 'CD';
        } else if (b >= 500 && b < 900) {
            numeral += 'D'
            for (let i = 5; i < splitNum[splitNum.length - 3]; i++) {
                numeral += 'C';
            }
        } else if (b >= 900 && b < 1000) {
            numeral += 'CM';
        }
    }
// tens
    if (c > 0) {
        if (c <= 30) {
            for (let i = 0; i < splitNum[splitNum.length - 2]; i++) {
                numeral += 'X';        
            }
        } else if (c >= 40 && c < 50) {
            numeral += 'XL';
        } else if (c >= 50 && c < 90) {
            numeral += 'L';
            for (let i = 5; i < splitNum[splitNum.length - 2]; i++) {
                numeral += 'X';
            }
        } else if (c >= 90 && c < 100) {
        numeral += 'XC';
        }  
    }
//one 
    if (d > 0) {
        if (d <= 3) {
            for (let i = 0; i < splitNum[splitNum.length - 1]; i++) {
                numeral += 'I';        
            }
        } else if (d >= 4 && d < 5) {
            numeral += 'IV';    
        } else if (d >= 5 && d < 9) {
            numeral += 'V';
            for (let i = 5; i < splitNum[splitNum.length - 1]; i++) {
                numeral += 'I';
            }
        } else if (d >= 9 && d < 10) {
            numeral += 'IX';
        }  
    }

    output.innerHTML = numeral;
   
    } else if (inputVal < 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (inputVal >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
    } else if (isNaN(inputVal)) {
        output.innerHTML = "Please enter a valid number";  
    }
});

output.innerHTML = numeral; 
