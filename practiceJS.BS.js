$(document).ready(function(){
    console.log('document.ready is good!');
    function click_handlers() {
        $('.inputs, .operators, .clear').click(button_clicked);
        }
    click_handlers();
});
function button_clicked() {
    console.log('button has been clicked');
    var buttons_value = $(this).val();
    console.log("value of the button is "+ buttons_value);
}

var input_index = 0;
var input =  [''];
var display;

function write_number(number) {
    input[input_index] = input[input_index] + number;
}

function write_operator (operator){
    if (input[input_index] === ""){
        return;
    }
    input_index++;
    input[input_index] = operator;
    input_index++;
    input[input_index] = '';
}

function equal (){
    var num1 = input[0];
    var num2 = input[2];
    var operator = input[1];

    var answer = doMath(num1, num2, operator);
    console.log (answer);

}


write_number('7');
write_number('2');
write_operator('+');
write_number('2');
equal();


function doMath(num1, num2, operator) {
    switch (operator){
        case '+':
            return parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            return parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            return parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            return parseFloat(num1) / parseFloat(num2);
            break
    }

}
