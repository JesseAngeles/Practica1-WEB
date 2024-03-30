// EJERCICIO 1: Leer un numero y mostrar si dicho valor es par o impar
document.getElementById(`ej1`).addEventListener(`click`, function () {
    let num = document.getElementById(`in_ej1`).value || 0;
    if (Math.trunc(num) == num) {
        (num % 2 == 0) ? alert(num + ` es par`) : alert(num + ` es impar`);
    } else {
        alert(`Ingrese un numero valido`);
    }
});

// EJERCICIO 2: Leer un numero y mostrar su tabla de multiplicar
document.getElementById(`ej2`).addEventListener(`click`, function () {
    let num = document.getElementById(`num_ej2`).value || 0;
    let max = document.getElementById(`max_ej2`).value || 0;
    if (Math.trunc(max) == max) {
        let table = new Array(max);
        let res = document.getElementById(`res2`);
        res.innerHTML = ``;

        for (let i = 1; i <= max; i++) {
            table[i] = num * i;
            res.innerHTML += `  <tr>
                                <td>${i} </td>
                                <td> * </td>
                                <td>${num} </td>
                                <td> = </td>
                                <td>${table[i]}</td>
                                </tr>`;
        }
    } else {
        alert(`Ingrese un numero valido`);
    }
});

// EJERCICIO 3: Leer dos numeros y mostrar su producto mediante sumas
document.getElementById(`ej3`).addEventListener(`click`, function () {
    let mul1 = document.getElementById(`mul1_ej3`).value || 0;
    let mul2 = document.getElementById(`mul2_ej3`).value || 0;
    let res = document.getElementById(`res3`);
    let multi = 0;

    if (Math.trunc(mul2) == mul2 && mul2 >= 0) {
        res.innerHTML = `${mul1} * ${mul2} `;
        if (mul2 != 0) {
            multi = Number(mul1);
            res.innerHTML += ` = ${mul1}`;
        } else {
            multi = 0;
        };
        for (let i = 1; i < mul2; i++) {
            (mul1 >= 0) ? res.innerHTML += ` + ` : res.innerHTML += ` - `;
            res.innerHTML += `${Math.abs(mul1)}`;
            multi += Number(mul1);
        }

        res.innerHTML += ` = ${multi}`;
    } else {
        alert(`Ingrese un numero valido`);
    }

});

// EJERCICIO 4: Leer una secuencia de n numeros almacenadosen un arreglo y mostrar la posicion donde se encuentra el mayor valor leido
let values_ej4 = [];
let pos_ej4 = document.getElementById(`pos_ej4`);
let val_ej4 = document.getElementById(`val_ej4`);

document.getElementById(`add_ej4`).addEventListener(`click`, function () {
    let num = Number(document.getElementById(`in_ej4`).value) || 0;
    values_ej4.push(num);
    updateTableEj4();
});

document.getElementById('clear_ej4').addEventListener(`click`, function () {
    values_ej4 = [];
    updateTableEj4();
});

document.getElementById(`find_ej4`).addEventListener(`click`, function () {
    if (values_ej4.length > 0) {
        let numericValues = values_ej4.map(Number);
        let maxValue = Math.max(...numericValues);
        alert(`Valor máximo: ${maxValue} en la posición: ${numericValues.indexOf(maxValue)}`);
    } else {
        alert(`Sin valor máximo`);
    }
});

function updateTableEj4() {
    pos_ej4.innerHTML = `<td>Posiciones</td>`;
    val_ej4.innerHTML = `<td>Valores</td>`;

    for (let i = 0; i < values_ej4.length; i++) {
        pos_ej4.innerHTML += `<td>${i}</td>`;
        val_ej4.innerHTML += `<td>${values_ej4[i]}</td>`;
    }
}

// EJERCICIO 5: Dados dos vectores A y B de n elementos cada uno, obtener un arreglo C donde la posición ise almacene  la suma de A[i] + B[i]
let a_values = [];
let b_values = [];
let c_values = [];
let a = document.getElementById(`a_ej5`);
let b = document.getElementById(`b_ej5`);
let c = document.getElementById(`c_ej5`);

document.getElementById(`add_ej5`).addEventListener(`click`, function () {
    let a_val = Number(document.getElementById(`in1_ej5`).value) || 0;
    let b_val = Number(document.getElementById(`in2_ej5`).value) || 0;

    a_values.push(a_val);
    b_values.push(b_val);
    c_values.push(a_val + b_val);

    updateTableEj5();
});

document.getElementById(`clear_ej5`).addEventListener(`click`, function () {
    a_values = []; 
    b_values = []; 
    c_values = [];
    updateTableEj5();
});

function updateTableEj5() {
    a.innerHTML = `<td>A: </td>`;
    b.innerHTML = `<td>B: </td>`;
    c.innerHTML = `<td>C: </td>`;

    for (let i = 0; i < a_values.length; i++) {
        a.innerHTML += `<td>${a_values[i]}</td>`;
        b.innerHTML += `<td>${b_values[i]}</td>`;
        c.innerHTML += `<td>${c_values[i]}</td>`;
    }
}

// EJERCICIO 6: Calcular la media de una secuencia de numeros proporcionados por el usuario
let values_ej6 = [];
let pos_ej6 = document.getElementById(`pos_ej6`);
let val_ej6 = document.getElementById(`val_ej6`);

document.getElementById(`add_ej6`).addEventListener(`click`, function () {
    let num = Number(document.getElementById(`in_ej6`).value) || 0;
    values_ej6.push(num);
    updateTableEj6();
});

document.getElementById('clear_ej6').addEventListener(`click`, function () {
    values_ej6 = [];
    updateTableEj6();
});

document.getElementById(`average_ej6`).addEventListener(`click`, function () {
    if (values_ej6.length > 0) {
        let sum = 0;
        for (let i = 0; i < values_ej6.length; i++) {
            sum += values_ej6[i];
        }
        let average = sum / values_ej6.length;
        alert(`Promedio ${average}`);
    } else {
        alert(`Sin valores`);
    }
});

function updateTableEj6() {
    pos_ej6.innerHTML = `<td>Posiciones</td>`;
    val_ej6.innerHTML = `<td>Valores</td>`;

    for (let i = 0; i < values_ej6.length; i++) {
        pos_ej6.innerHTML += `<td>${i}</td>`;
        val_ej6.innerHTML += `<td>${values_ej6[i]}</td>`;
    }
}

// EJERCICIO 7: Dada una secuencia de numeros leidos y almacenados en un arreglo A mostrar dichos numeros en orden


// EJERCICIO 8: Dado una secuencia de textos proporcionados por el usuario visualizar: la longitud, en mayusculas, minusculas, cada uno de ellas
