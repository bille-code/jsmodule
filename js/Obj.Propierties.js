const obj = {
    name: 'jorge';
    lastname: 'Camarillo';
    set newname (name) {
        this.name = name.valor1
    }

}
Object.defineProperty(obj,'fullname' , {
    get : function () {
        return this.name + ' ' +this.lastname
    }
})

let dataUsers = [
    {
        name: 'Jorge',
        lastname: 'Camarillo'
    },
    {
        name: 'Rubén'
        lastname: 'Flores'
        

    }
]