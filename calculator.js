<><div id="calculator">
    < />!-- Screen and clear key --&gt;
    <div class="top">
        <span class="clear">C</span>
        <div class="screen"></div>
    </div>

    <div class="keys">
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span class="operator">+</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span class="operator">-</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span class="operator">÷</span>
        <span>0</span>
        <span>.</span>
        <span class="eval">=</span>
        <span class="operator">x</span>
    </div>
</div><style>
        * {margin}: 0;
        padding: 0;
        box-sizing: border-box;


        font: bold 14px Arial, sans-serif;
        &rbrace;
        html {height}: 100%;
        background: rgba(255, 255, 255, 0.318);
        background: radial-gradient(circle, #ffffff39 20%, #cccccc91);
        background-size: cover;
        &rbrace;

        #calculator {width}: 325px;
        height: auto;

        margin: 100px auto;
        padding: 20px 20px 9px;

        background: #9dd2ea;
        background: linear-gradient(#ea9db0, #8bc8ec);
        border-radius: 3px;
        box-shadow: 0px 4px #d100e43d, 0px 10px 15px rgba(0, 0, 0, 0.2);
        &rbrace;
        .top span.clear {float}: left;
        &rbrace;
        .top .screen {height}: 40px;
        width: 212px;

        float: right;

        padding: 0 10px;

        background: rgba(0, 0, 0, 0.871);
        border-radius: 3px;
        box-shadow: inset 0px 4px rgba(0, 0, 0, 0.304);
        font-size: 17px;
        line-height: 40px;
        color: rgba(255, 255, 255, 0.171);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.718);
        text-align: right;
        letter-spacing: 1px;
        &rbrace;
        .keys,
        .top {overflow}: hidden;
        &rbrace;
        .keys span,
        .top span.clear {float}: left;
        position: relative;
        top: 0;

        cursor: pointer;

        width: 66px;
        height: 36px;

        background: rgba(255, 255, 255, 0.074);
        border-radius: 3px;
        box-shadow: 0px 4px rgba(0, 0, 0, 0.132);

        margin: 0 7px 11px 0;

        color: #88888813;
        line-height: 36px;
        text-align: center;


        user-select: none;


        transition: all 0.2s ease;
        &rbrace;


        .keys span.operator {background}: #fff0f538;
        margin-right: 0;
        &rbrace;

        .keys span.eval {background}: #e492ff32;
        box-shadow: 0px 4px #ea9db0;
        color: #715f8e;
        &rbrace;

        .top span.clear {background}:whitesmoke;
        box-shadow: 0px 4px #fffd7c;
        color: rgb(255, 255, 255);
        &rbrace;
        .keys span:hover {background}: #89f6e9;
        box-shadow: 0px 4px #6fd354;
        color: rgb(255, 255, 255);
        &rbrace;

        .keys span.eval:hover {background}: #b8507a1c;
        box-shadow: 0px 4px #7a3370;
        color:#715f8e;
        &rbrace;

        .top span.clear:hover {background}: #dbf689;
        box-shadow: 0px 4px #8d54d3;
        color: rgb(255, 255, 255);
        &rbrace;
        .keys span:active {box - shadow}: 0px 0px #c454d3;
        top: 4px;
        &rbrace;

        .keys span.eval:active {box - shadow}: 0px 0px #317a6266;
        top: 4px;
        &rbrace;

        .top span.clear:active {top}: 4px;
        box-shadow: 0px 0px #d3545d;
        &rbrace;
    </style><script>
        var keys = document.querySelectorAll("#calculator span");
        var operators = ["+", "-", "x", "÷"];
        var decimalAdded = false;


        for (var i = 0; i <keys.length />; i++) {keys[i].onclick = function (e) {

            var input = document.querySelector(".screen");
            var inputVal = input.innerHTML;
            var btnVal = this.innerHTML;


            if (btnVal == "C") {
                input.innerHTML = "";
                decimalAdded = false;
            }

            else if (btnVal == "=") {
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];


                equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
                if (operators.indexOf(lastChar) > -1 || lastChar == ".")
                    equation = equation.replace(/.$/, "");

                if (equation) input.innerHTML = eval(equation);

                decimalAdded = false;
            }

            else if (operators.indexOf(btnVal) > -1) {

                var lastChar = inputVal[inputVal.length - 1];
                if (inputVal != "" && operators.indexOf(lastChar) == -1)
                    input.innerHTML += btnVal;

                else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;


                if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {

                    input.innerHTML = inputVal.replace(/.$/, btnVal);
                }

                decimalAdded = false;
            }


            else if (btnVal == ".") {
                if (!decimalAdded) {
                    input.innerHTML += btnVal;
                    decimalAdded = true;
                }
            }
            else {
                input.innerHTML += btnVal;
            }
            e.preventDefault();
        } };
        &rbrace;
    </script></>
