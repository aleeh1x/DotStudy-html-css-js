const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
       

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
})


function trocarTela() {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            conteudo.innerHTML = `<h1>Nova tela</h1>`;
        });
    } else {
        conteudo.innerHTML = `<h1>Nova tela</h1>`;
    }
}