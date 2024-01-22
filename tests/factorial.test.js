const factorial= require('../factorial.js')


test('factorial de 5',()=>{
    expect(factorial(5)).toBe(120);
});

test ('factorial de 0',()=>{
    expect(factorial(0)).toBe(1);
});

test ('factorial de 10',()=>{
    expect(factorial(10)).toBe(3628800)
})




