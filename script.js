const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

function con()
{
    var fun1 = []
    for (var i =0; i < 10; i++)
        fun1[i] = function() { return i; }
    return fun1
}

var fun1 = con()
console.log(fun1[5]())