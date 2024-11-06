function showSkill(skill) {
    const body = document.body
    const parameter = skill
    const boxContent = document.querySelector('.skill-modal')

    let divContent
    let content

    
    if (boxContent.classList.contains('skill-modal-hidden')) {
        body.classList.add("dark-background")
        boxContent.classList.remove('skill-modal-hidden')
    }

    validateParameter()
    showContent()

    function validateParameter() {
        if (parameter == 'html') {
            content = 'HTML é uma linguagem de marcação usada para criar páginas da web. Quais tags são usadas para estruturar o conteúdo.'
        }
        else if (parameter == 'css') {
            content = 'CSS é uma linguagem usada para estilizar a apresentação de páginas da web, definindo o design, o layout e a aparência visual dos elementos HTML.'
        }
        else if (parameter == 'js') {
            content = 'JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web, permitindo a manipulação dinâmica do conteúdo e comportamento dos elementos da página.'
        }
        else if (parameter == 'tailwind') {
            content = 'Tailwind CSS é uma estrutura CSS utilitária que permite construir interfaces web de forma eficiente usando classes predefinidas para estilo.'
        }
        else if (parameter == 'sass') {
            content = 'Sass é uma linguagem de estilo (pré-processador CSS) que estende a sintaxe CSS, permitindo o uso de funções e aninhamento para facilitar a escrita e organização do código CSS.'
        }
        else if (parameter == 'figma') {
            content = 'Figma é uma ferramenta de design que permite a criação e colaboração em tempo real de protótipos de interface de usuário.'
        }
        else if (parameter == 'git') {
            content = 'Git é um sistema de controle de versão que registra alterações em arquivos, facilitando o gerenciamento do histórico de um projeto de software.'
        }
        else if (parameter == 'react') {
            content = 'React é uma biblioteca JavaScript para construção de interfaces de usuário. É baseado em componentes reutilizáveis ​​e usa um Virtual DOM para otimizar as atualizações da UI, tornando-o popular em aplicações web dinâmicas.'
        }
        else if (parameter == 'nextjs') {
            content = 'O Next.js é uma boa opção para quem já sabe usar o React e quer dar um passo adiante. Ele também é uma excelente escolha para quem está aprendendo sobre frameworks e deseja aprimorar suas habilidades em React.'
        }
        else if (parameter == 'typescript') {
            content = 'O TypeScript é um superconjunto do JavaScript, ou seja, adiciona tipagem estática opcional à linguagem.'
        }
    }

    function showContent() {
        divContent = `
            <img class="skill-modal-close" src="img/skills/fechar.svg" alt="Btn close modal">
            <p class="skill-modal-text">${content}</p>
        `

        boxContent.innerHTML = divContent

        closeSkill()
    }

    function closeSkill() {
        const btnClose = document.querySelector('.skill-modal-close')

        btnClose.addEventListener('click', hidden)

        function hidden() {
            boxContent.classList.add('skill-modal-hidden')
            body.classList.remove('dark-background')
        }
    }
}