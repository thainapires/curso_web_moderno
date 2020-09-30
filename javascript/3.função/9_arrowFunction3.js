let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) //yes

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //no
comparaComThis(obj) //yes

let comparaComThisArrow = param => console.log(this === param) //this aponta pro modulo corrento o arquivo no qual foi criado

comparaComThisArrow(global) //no
comparaComThisArrow(module.exports) //yes
comparaComThisArrow(this) //yes

comparacomThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //doesn't change, so no
comparaComThisArrow(module.exports) //yes