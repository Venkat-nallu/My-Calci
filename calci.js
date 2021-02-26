var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) 
{
    return value == "+" || value == "-" || value == "*" || value == "/";
}

                                        // adding mouse events

for (var i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener('click', function ()
     {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) 
        {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = " ";
        } 
        else if (value == "ac") 
        {
            display.textContent = "";
        } 
        else if (value == "sign")
        {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        }
        else if (value == ".")
        {
            if (text.length && !text.includes('.'))
            {
                display.textContent = text + '.';
            }
        } 
        else if (value == "%") 
        {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } 
        else if (value == "=") 
        {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);

            if(result)
            {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;   
            }       
        } 
        else 
        {
            display.textContent += value;
        }
    });
}  

                                        // Adding keyboard events


    addEventListener('keypress', function (event)
     {        
        var text = display.textContent.trim();
        console.log(event.key);

        // if pressed key is an operator(+,-,*,/)

        if (isOperator(event.key)) 
        {
            operator = event.key;
            operand1 = parseFloat(text);
            display.textContent = " ";

            if(event.key == "+")
            {
                console.log("I'm inside + checking for events adding");

                document.getElementById('button-plus').classList.add('effect-added-blue');
                setTimeout(() => {
                    document.getElementById('button-plus').classList.remove('effect-added-blue');
                }, 150); 
            }

            else if(event.key == "-")
            {
                document.getElementById('button-minus').classList.add('effect-added-blue');
                setTimeout(() => {
                    document.getElementById('button-minus').classList.remove('effect-added-blue');
                }, 150); 
            }

            else if(event.key == "*")
            {
                document.getElementById('button-multiply').classList.add('effect-added-blue');
                setTimeout(() => {
                    document.getElementById('button-multiply').classList.remove('effect-added-blue');
                }, 150); 
            }

            else if(event.key == "/")
            {
                document.getElementById('button-divide').classList.add('effect-added-blue');
                setTimeout(() => {
                    document.getElementById('button-divide').classList.remove('effect-added-blue');
                }, 150); 
            }
        }

        // if pressed key is ctrl+backspace

        else if (event.code === "Backspace")
        {
            document.getElementById('button-clear').classList.add('effect-added');                
            setTimeout(() => {
                document.getElementById('button-clear').classList.remove('effect-added');
            }, 150); 

            display.textContent = "";
        }       

        // if pressed key is ~(tilde)

        else if (event.code === "Backquote")  // key = tilde symbol to perform +/- operation
        {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;

            document.getElementById('button-sign').classList.add('effect-added');                
            setTimeout(() => {
                document.getElementById('button-sign').classList.remove('effect-added');
            }, 150); 
        }

        // if pressed key is .(dot)

        else if (event.code === "Period")
        {
            if (text.length && !text.includes('.'))
            {
                display.textContent = text + '.';

                document.getElementById('button-decimal').classList.add('effect-added');                
                setTimeout(() => {
                    document.getElementById('button-decimal').classList.remove('effect-added');
                }, 150); 
            }
        } 

        // if pressed key is %

        else if (event.key == "%") 
        {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;

            document.getElementById('button-percent').classList.add('effect-added');                
            setTimeout(() => {
                document.getElementById('button-percent').classList.remove('effect-added');
            }, 150); 
        } 

         // if pressed key is enter or = 

        else if (event.key == "Enter" || event.key == "=")
        {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);

            if(result)
            {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;   
            }      
            
            document.getElementById('button-equals').classList.add('effect-added-blue');                
            setTimeout(() => {
                document.getElementById('button-equals').classList.remove('effect-added-blue');
            }, 150);
        } 

        // if pressed key is a number

        else if(event.key >=0 && event.key <=9)
        {
            display.textContent += event.key;

            if(event.key == 0)
            {
                document.getElementById('button-zero').classList.add('effect-added');
                setTimeout(() => {
                    document.getElementById('button-zero').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 1)
            {
                document.getElementById('button-one').classList.add('effect-added');
                setTimeout(() => {
                    document.getElementById('button-one').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 2)
            {
                document.getElementById('button-two').classList.add('effect-added');

                setTimeout(() => {
                    document.getElementById('button-two').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 3)
            {
                document.getElementById('button-three').classList.add('effect-added');

                setTimeout(() => {
                    document.getElementById('button-three').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 4)
            {
                document.getElementById('button-four').classList.add('effect-added');

                setTimeout(() => {
                    document.getElementById('button-four').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 5)
            {
                document.getElementById('button-five').classList.add('effect-added');

                setTimeout(() => {
                    document.getElementById('button-five').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 6)
            {
                document.getElementById('button-six').classList.add('effect-added');

                setTimeout(() => {
                    document.getElementById('button-six').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 7)
            {
                document.getElementById('button-seven').classList.add('effect-added');
                setTimeout(() => {
                    document.getElementById('button-seven').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 8)
            {
                document.getElementById('button-eight').classList.add('effect-added');
                setTimeout(() => {
                    document.getElementById('button-eight').classList.remove('effect-added');
                }, 150);                           
            }
            else if(event.key == 9)
            {
                document.getElementById('button-nine').classList.add('effect-added');
                setTimeout(() => {
                    document.getElementById('button-nine').classList.remove('effect-added');
                }, 150);                           
            }
        }
    });


