const text = document.querySelector("#area-texto");
const btn = document.querySelectorAll(...[".btn"]);

btn.forEach((bt) => {
    bt.addEventListener('click', function () {
        text.value += bt.value;
    })
})