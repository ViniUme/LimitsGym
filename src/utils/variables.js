export function Patterns(){
    return {
        tel: ['(99) 9999-9999', '(99) 99999-9999'],
        rg: '99.999.999-9'
    }
}

export function RegEx(){
    return {
        email: new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'),
        tel: new RegExp(/[\)\(\-\s)]/g),
        rg: new RegExp(/[\.\-]/g),
        password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        space: new RegExp(/\s/g)
    }
}