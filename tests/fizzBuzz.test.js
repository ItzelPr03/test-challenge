const fizzBuzz= require('../fizzBuzz')


test ('Prueba FizzBuzz',()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test ('Prueba Fizz',()=>{
    expect(fizzBuzz(6)).toBe("Fizz")
})

test ('Prueba Buzz',()=>{
    expect(fizzBuzz(10)).toBe("Buzz")
})


