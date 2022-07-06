document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(() => {
    i++;


    const icon = document.querySelector('.section-1-icons i.change');
// After 1 second the icon will be hiden because the class 'change' will be removed
    icon.classList.remove('change');

    if (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        // The next sibling icon will be displayed cause it's added the class 'change'
        icon.nextElementSibling.classList.add('change');
    }
},4000)

