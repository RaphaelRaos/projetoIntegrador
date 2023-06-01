const redirectToHistory = document.getElementById('history');

let list = document.querySelectorAll('.sidebar-list-item');
list.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.getAttribute('value');        
        redirectTo(value)
    });

});
let menu = document.querySelectorAll('.card-inner');
menu.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.getAttribute('value');
        redirectTo(value);
    })

})

function redirectTo(value) {

    window.location = `regioes/${value}/index.html`
}

function teste() {

}