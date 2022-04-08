function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Sthephanny', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Nath', 'Admin')

console.log(getAdmins(usuarios))