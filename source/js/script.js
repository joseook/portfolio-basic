document.querySelector('#contact').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
            e.target.reset();
        } else {
            alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    });
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}