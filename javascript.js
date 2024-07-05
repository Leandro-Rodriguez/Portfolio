function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensaje enviado correctamente!');
        // Aquí puedes agregar código para enviar el formulario a tu correo
        // Ejemplo: usando fetch para enviar a un servidor
    } else {
        alert('Por favor completa todos los campos.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});