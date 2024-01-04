const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanString(str) {
    return str.toLowerCase()
    .split('')
    .filter(
        (element) => {
            return /[a-z]|[0-9]/g.test(element);
        }
        )
        .join('');
}
    
function palindromeChecker(str){
    return str === str.split('').reverse().join('');
}
    
function submit(){

    const input = document.getElementById('text-input').value;
    const resultParagraph = document.createElement('p');
    const bold = document.createElement('span');
    result.replaceChildren(resultParagraph);

    if(input === ''){
        alert('Please input a value');

    } else {
        if(palindromeChecker(cleanString(input))){
            resultParagraph.innerText = `${input} is a palindrome.`;
        } else {
            resultParagraph.innerText = `${input} is not a palindrome.`;
        }
    }
}

button.addEventListener('click', submit);