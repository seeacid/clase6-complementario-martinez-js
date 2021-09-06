class Alumno {
    constructor(nombre,nota){
        this.nombre=nombre
        this.nota=nota
    }
}


let p1 = new Alumno("Juan",8)
let p2 = new Alumno("Abel",5)
let p3 = new Alumno("Pedro",9)
let p4 = new Alumno("Ana",3)
let p5 = new Alumno("Maria",6)
let p6 = new Alumno("Jorge",10)
let p7 = new Alumno("Miguel",1)
let p8 = new Alumno("Sebastian",9)
let p9 = new Alumno("Jose",4)



let alumnos = []

alumnos.push(p1)
alumnos.push(p2)
alumnos.push(p3)
alumnos.push(p4)
alumnos.push(p5)
alumnos.push(p6)
alumnos.push(p7)
alumnos.push(p8)
alumnos.push(p9)



alumnos.sort((a,b) => {
    if(a.nota<b.nota){
        return -1
    }
    if(a.nota>b.nota){
        return 1
    }else{
        return 0
    }
})
console.log(alumnos)


