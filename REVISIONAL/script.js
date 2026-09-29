
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const botaoSalvar = document.getElementById('botaoSalvar');

botaoSalvar.addEventListener('click', () => {
  
    const nome = campoNome.value;
    const email = campoEmail.value;

   
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const conteudoTexto = `Nome: ${nome}\nEmail: ${email}`;

    const blob = new Blob([conteudoTexto], { type: 'text/plain;charset=utf-8' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_usuario.txt'; 

    link.click();
    URL.revokeObjectURL(link.href);
});
