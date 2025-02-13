document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.getElementById("clear");
    let deleteBtn = document.getElementById("delete");
    let equal = document.getElementById("equal");
    let square = document.getElementById("square");

    let expression = "";

    // Event Listener for each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.value;

            if (value === undefined) return;

            // Append numbers and operators
            if (!["=", "AC", "DEL", "x²"].includes(value)) {
                expression += value;
                display.value = expression;
            }
        });
    });

    // Clear Display (AC)
    clear.addEventListener("click", function () {
        expression = "";
        display.value = "";
    });

    // Delete last character (DEL)
    deleteBtn.addEventListener("click", function () {
        expression = expression.slice(0, -1);
        display.value = expression;
    });

    // Square function (x²)
    square.addEventListener("click", function () {
        if (display.value !== "") {
            expression = Math.pow(parseFloat(display.value), 2).toString();
            display.value = expression;
        }
    });

    // Evaluate Expression (=)
    equal.addEventListener("click", function () {
        try {
            expression = eval(expression);
            display.value = parseFloat(expression.toFixed(10)); // Decimal precision handling
        } catch {
            display.value = "Error";
        }
    });
});
