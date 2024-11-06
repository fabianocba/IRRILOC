function enviarLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(abrirWhatsApp, erroLocalizacao);
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function abrirWhatsApp(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Formata a mensagem para o WhatsApp com as coordenadas
    const mensagem = `Olá! Aqui está a minha localização solicitada: \nLatitude: ${latitude} \nLongitude: ${longitude}`;

    // Codifica a mensagem e gera o link para o WhatsApp
    const linkWhatsApp = `https://wa.me/5577981192617?text=${encodeURIComponent(mensagem)}`;

    // Redireciona o cliente para o WhatsApp com a mensagem pronta
    window.location.href = linkWhatsApp;

    // Exibe a mensagem de agradecimento
    exibirMensagemAgradecimento();
}

function exibirMensagemAgradecimento() {
    const mensagemAgradecimento = document.getElementById("mensagem-agradecimento");
    mensagemAgradecimento.style.display = "block";
}

function erroLocalizacao() {
    alert("Não foi possível obter a localização. Verifique as permissões de localização do seu dispositivo.");
}
