const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo') 
const World = document.querySelector('.World')       

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    World.classList.toggle('ativo')
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