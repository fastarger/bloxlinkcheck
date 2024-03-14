function verificarLink() {



    // Pra DIV do resultado sumir e não ficar lá parada
    setTimeout(function () {
        resultDiv.style.display = 'none';
    }, 5000);


    var linkInput = document.getElementById('linkInput').value.trim().toLowerCase();
    var resultDiv = document.getElementById('resultDiv');

    // Verifica se tem algo escrito no input ou não
    if (linkInput === "") {
        resultDiv.innerHTML = "Coloque algum link!";
        resultDiv.className = 'unofficial';
        resultDiv.style.display = 'block';
        return;
    }


    // Verificação simples se o link é oficial roblox.com e verificar se é um link válido caso o usuário digite qualquer coisa
    if (linkInput.startsWith("http:") || linkInput.startsWith("https:")) {
        var linksOficiais = [
            'https://www.roblox.com',
            'https://roblox.com'
        ];


        var linkOficial = false;

        for (var i = 0; i < linksOficiais.length; i++) {
            if (linkInput.includes(linksOficiais[i])) {
                linkOficial = true;
                break;
            }
        }

        resultDiv.innerHTML = linkOficial ? '<i class="fas fa-check correct-icon"></i> Esse link é oficial, pode acessar!' : '<i class="fas fa-exclamation-triangle warning-icon"></i> Esse link não é oficial, não entre nesse link.';
        resultDiv.className = linkOficial ? 'official' : 'unofficial';
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = "Link inválido. Por favor, inclua https://";
        resultDiv.className = 'unofficial';
        resultDiv.style.display = 'block';
    }

}
