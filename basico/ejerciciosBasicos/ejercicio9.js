console.warn("EJERCICIOS NÚMERO 9");

/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
/*class Pelicula {
    constructor(id="", titulo="", director="", anioEstreno=0, paises=undefined, generos=undefined, calificacion=0){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paises = paises;
        this.generos = generos;
        this.calificacion = calificacion;
    }

    validarEntradas(){
        if(!this.id) return console.warn("No ingresó el id de la película");
        if(typeof this.id !== "string") return console.error(`El valor "${this.id}" ingresado no es una cadena de texto`);
        this.id = this.id.toLowerCase();
        let expRegId = /^[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
        if(!expRegId.test(this.id)) return console.error(`El formato de "${this.id}" es incorrecto, debe tener 9 caracteres, los dos primeros letras y los 7 restantes números`);

        if(!this.titulo) return console.warn("No ingresó el título de la película");
        if(typeof this.titulo !== "string") return console.error(`El valor "${this.titulo}" ingresado no es una cadena de texto`);
        if(this.titulo.length > 100) return console.warn(`El ${this.titulo} no debe tener más de 100 caracteres`);

        if(!this.director) return console.warn("No ingresó el director de la película");
        if(typeof this.director !== "string") return console.error(`El valor "${this.director}" ingresado no es una cadena de texto`);
        if(this.director.length > 50) return console.warn(`El ${director} no debe tener más de 50 caracteres`);
        let expRegDir = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g
        if(!expRegDir.test(this.director)) return console.error(`El director "${this.director}" no es un nombre válido`);

        if(!this.anioEstreno) return console.warn("No ingresó el año de la película");
        if(typeof this.anioEstreno !== "number") return console.error(`El valor "${this.anioEstreno}" ingresado no es un número`);
        let expRegAnio = /^[0-9][0-9][0-9][0-9]/
        if(!expRegAnio.test(this.anioEstreno)) console.error(`El año de estreno debe ser un entero de 4 dígitos`);

        if(!this.paises) return console.warn("No ingresó los países de origen de la película");
        if(this.paises.length === 0) return console.warn(`Debe ingresar valores al arreglo`);
        if(!(this.paises instanceof Array)) return console.error(`El valor "${this.paises}" debe ser un arreglo`);

        if(this.generos === undefined) return console.warn("No ingresó los géneros de la película");
        if(this.generos.length === 0) return console.warn(`Debe ingresar valores al arreglo`);
        if(!(this.generos instanceof Array)) return console.error(`El valor "${this.generos}" debe ser un arreglo`);
        let generosPermitidos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];  
        //this.generos = this.generos.toUpperLowerCase();
        this.generos = [... new Set(this.generos)];
        for(let genero of this.generos) {
            if(typeof genero !== "string") return console.error("Todos los valores del arreglo deben ser cadenas de texto");
        }
        if(this.generos > generosPermitidos.length){
            return console.error(`La cantidad de géneros ingresados es mayor al de los géneros permitidos`)
        }
        for(let i = 0; i<this.generos.length; i++){
            if(generosPermitidos.indexOf(this.generos[i]) === -1){
                return console.error(`El valor "${this.generos[i]}" no es un género permitido`);
            }
            
        }
        let expRegPuntaje = /^[0-9].[0-9]$/
        if(typeof this.calificacion !== "number") return console.error(`El valor "${this.calificacion}" debe ser un número`);
        if(this.calificacion < 0 || this.calificacion > 10){
            return console.error(`La calificación "${this.calificacion}" no está permitida, debe ser un número entre 0 y 10`);
        }else {
            this.calificacion.toFixed(1);
        }
    }
    

    fichaTecnica(){
        console.info(`El id de la película es ${this.id}\nEl título es ${this.titulo}\nEl nombre del director es ${this.director}\nEl año de estreno fue ${this.anioEstreno}\nEl/Los género/géneros de la película son [${this.generos.join(', ')}]\nEl/Los país/países de origen fueron [${this.paises.join(', ')}]\nSu calificación es ${this.calificacion}`);
    }

    static variasPeliculas(peliculas = undefined){
        if(peliculas === undefined) return console.warn(`No ingresó ningún arreglo`);
        if(!(peliculas instanceof Array)) return console.error(`El valor debe ser un arreglo`);
        if(peliculas.length === 0) return console.error(`El arreglo no puede ser vacío`);
        if(peliculas.length !== 3) return console.error(`Solo debe ingresar 3 películas`);
        for(let i = 0; i<peliculas.length; i++){
            peliculas[i].fichaTecnica();
        }
    }

    static generosAceptados(){
        let generosPermitidos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
        console.info(`Los géneros permitidos son ${generosPermitidos.join(', ')}`);
    }

    get getId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }

    get getTitulo(){
        return this.titulo;
    }
    set setTitulo(titulo){
        this.titulo = titulo;
    }

    get getDirector(){
        return this.director;
    }
    set setDirector(director){
        this.director = director;
    }

    get getAnio(){
        return this.anioEstreno;
    }
    set setAnio(anio){
        this.anioEstreno = anio;
    }

    get getPaises(){
        return this.paises;
    }
    set setPaises(paises){
        this.paises = paises;
    }

    get getGeneros(){
        return this.generos;
    }
    set setGeneros(generos){
        this.generos = generos;
    }

    get getCalificacion(){
        return this.calificacion;
    }
    set setCalificacion(calificacion){
        this.calificacion = calificacion;
    }
    
}*/

// const matar = new Pelicula("as1234567","La muerte del perro herido","Jhon Quitian",2002,["Colombia","Argentina"],["Action","Adventure"],10);
// const matar1 = new Pelicula("as1234568","Detrás del último no hay nadie","Jhon Montoya",2012,["Colombia","Uruguay"],["Action","Adventure"],9.9);
// const matar2 = new Pelicula("as1234569","Un charquito bajo el agua","Jhon Correa",2016,["Colombia","Argentina","Francia"],["Action","Adventure"],2.5);
// matar.validarEntradas();
// matar1.validarEntradas();
// matar.fichaTecnica();
// console.log(matar);
// console.log(matar1);
// Pelicula.generosAceptados();
// Pelicula.variasPeliculas([matar, matar1, matar2]);

//Hecho por el tutor
class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
    }

    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }    

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);
        
        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}", NO es un número`);

        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}", NO es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        
        for (const cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restastes números`);
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Título", titulo)){
            this.validarLongitudCadena("Título", titulo, 100)
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director", director)){
            this.validarLongitudCadena("Director", director, 50)
        }
    }    

    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]{4})$/.test(estreno))){
                return console.error(`Año de Estreno "${estreno}" no es válido, debe ser un número de 4 dígitos`);
            }
        }
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Géneros", generos)){
            for (const genero of generos) {
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrectos "${generos.join(', ')}"`)
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación", calificacion)){
            return (calificacion < 0 || calificacion > 10)
                    ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
                    : this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.info(`Ficha técnica:\nEl id de la película es ${this.id}\nEl título es ${this.titulo}\nEl nombre del director es ${this.director}\nEl año de estreno fue ${this.estreno}\nEl/Los género/géneros de la película son [${this.generos.join(', ')}]\nEl/Los país/países de origen fueron [${this.pais.join('-')}]\nSu calificación es ${this.calificacion}`);        
    }



}

// Pelicula.generosAceptados();

/*const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Título de la película",
    director: "Director de la peli",
    estreno: 2020,
    pais: ["México", "Francia"],
    generos: ["Comedy","Sport"],
    calificacion: 7.7889
});
peli.fichaTecnica();*/

const misPelis = [
    {
        id: "tt1234567",
        titulo: "Título de la película",
        director: "Director de la peli",
        estreno: 2020,
        pais: ["México", "Francia"],
        generos: ["Comedy","Sport"],
        calificacion: 7.7889
    },
    {
        id: "tt1234567",
        titulo: "Título de la ",
        director: "Director de la peli",
        estreno: 2020,
        pais: ["México", "Francia"],
        generos: ["Comedy","Sport"],
        calificacion: 7.7889
    },
    {
        id: "tt1234567",
        titulo: "Título",
        director: "Director de la peli",
        estreno: 2020,
        pais: ["México", "Francia"],
        generos: ["Comedy","Sport"],
        calificacion: 7.7889
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());


