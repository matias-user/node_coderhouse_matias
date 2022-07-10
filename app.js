
class Usuario{
    constructor(name, lastName, books = [], pets = []){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    addPet( namePet ){
        this.pets.push( namePet );
    }
    countPets(){
        return this.pets.length;
    }
    addBook( name, author ){
        this.books.push( { name, author } );
    }
    getBooksNames(){
        return this.books.map( book => book.name );
    }
}
const usuario = new Usuario('Elon','Musk');

usuario.addPet('dog');
usuario.addPet('cat');

usuario.addBook('El señor de las moscas','Willian golding');
usuario.addBook('Fundación','Isaac Asimov');

console.log( usuario.countPets() );
console.log( usuario.getBooksNames() );
console.log( usuario.getFullName() );