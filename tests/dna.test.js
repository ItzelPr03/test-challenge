
const { default: expect } = require('expect')
const dna2 = require('../dna.js')

test ('prueba de cadena normal',()=>{
    expect(dna2("AATTGCA")).toBe("AATTGCA")
})

test ('prueba de cadena con otras letras',()=>{
    expect(dna2("AMAPTNTGCA")).toBe("AATTGCA")
})

test ('prueba de cadena con minusculas',()=>{
    expect(dna2("AaAtTgTtGCA")).toBe("AATTGCA")
})

test ('prueba de cadena mezclada',()=>{
    expect(dna2("AaBATtHTGgcPCA")).toBe("AATTGCA")
})
test ('prueba de cadena vacia',()=>{
    expect(dna2("")).toBe("")
})
