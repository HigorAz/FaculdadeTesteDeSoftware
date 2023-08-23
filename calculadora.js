const add = (num1, num2) => {
	return num1 + num2;
}

function dividir (num1, num2){
    if (num2 == 0) {
        throw new Error("Não pode dividir por zero")
    }
    return num1/num2;
}

function mult(num1,num2){
    return num1*num2;
}

function sub(num1, num2){
    return num1-num2;
}

//Espondo código para uso em outros arquivos
module.exports = {
	add, dividir, mult, sub
}