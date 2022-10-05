export function Patterns(){
    return {
        tel: ['(99) 9999-9999', '(99) 99999-9999'],
        rg: '99.999.999-9'
    }
}

export function RegEx(){
    return {
        email: new RegExp('(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))'),
        tel: new RegExp(/[\)\(\-\s)]/g),
        rg: new RegExp(/[\.\-]/g),
        password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        space: new RegExp(/\s/g),
        name: new RegExp('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9_-]{3,60}$'),
        others: new RegExp('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9_-]{3,30}$')
    }
}