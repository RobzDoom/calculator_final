$(document).ready(function(){
    console.log('document.ready is good!');
        function click_handlers() {
            $('.inputs, .clear').click(button_clicked)
        }
    click_handlers();
});

var input_index = 0;
var input =  [''];
var display;


function button_clicked() {
    console.log('Button has been clicked');
    var buttons_value = $(this).val();

    switch (buttons_value){
        case 'C':
            console.log('You have cleared all data.');
            input = [''];
            input_index=0;
            $('.display').text();
            break;
        case '=':
            console.log ('This will compute your output.');
            equal();
            $('.display').text();
            break;
        case "*":
        case "/":
        case "+":
        case "-":
        default:
            console.log("you have selected a number");
            write_number(buttons_value);
            $(".display").text();
            break;
    }
}


function write_number(number) {
    if (number === '.'){
        for (var i = 0; i < input[input_index].length; i++){
            if (input[input_index][i] === '.'){
                return;
            }
        }
    }

    input[input_index] = input[input_index] + number;

    //console.log(input);
}
function write_operator(operator) {
    if (input[input_index] === ""){
        return;
    }
    input_index++;
    input[input_index] = operator;
    input_index++;
    input[input_index] = '';
}

function equal (){
    var answer = input.join(' ');
    console.log(answer);
    var answer = eval(answer);
    console.log(answer);



    $('.display').text(answer)
}



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






