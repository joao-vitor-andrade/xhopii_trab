document.addEventListener('DOMContentLoaded', () => {


    const galeria = document.getElementById('galeria');

    if (galeria) {
        const imagemPrincipal = document.querySelector('#galeria figure img');
        const miniaturas = document.querySelectorAll('#galeria aside img');
        const botoesModelo = document.querySelectorAll('.opcoes-estilo:nth-of-type(1) button');
        const botoesTamanho = document.querySelectorAll('.opcoes-estilo:nth-of-type(2) button');
        const textoTamanho = document.getElementById('tamanho-selecionado');

        const mapaCores = {
            'Preto': '../assets/img/produto1.png',
            'Azul':  '../assets/img/produto2.png',
            'Verde': '../assets/img/produto3.png',
            'Cinza': '../assets/img/produto4.png',
            'Rosa':  '../assets/img/produto5.png'
        };

        const atualizarThumbnailAtiva = (src) => {
            miniaturas.forEach(miniatura => {
                // Compara o final do src para evitar problemas de caminho absoluto vs relativo
                const minSrc = miniatura.src.split('/').pop();
                const alvoSrc = src.split('/').pop();
                if (minSrc === alvoSrc) {
                    miniatura.classList.add('miniatura-focada');
                } else {
                    miniatura.classList.remove('miniatura-focada');
                }
            });
        };

        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('mouseover', () => {
                imagemPrincipal.src = miniatura.src;
                atualizarThumbnailAtiva(miniatura.src);
            });

            miniatura.addEventListener('click', () => {
                imagemPrincipal.src = miniatura.src;
                atualizarThumbnailAtiva(miniatura.src);
            });
        });

        botoesModelo.forEach(botao => {
            botao.addEventListener('click', () => {
                const cor = botao.textContent.trim();
                if (mapaCores[cor]) {
                    imagemPrincipal.src = mapaCores[cor];
                    atualizarThumbnailAtiva(mapaCores[cor]);
                }
            });
        });

        botoesTamanho.forEach(botao => {
            botao.addEventListener('click', () => {
                textoTamanho.textContent = `Tamanho Selecionado: ${botao.textContent}`;
            });
        });
    }

    const formCliente = document.getElementById('form-cliente');
    const inputFotoCliente = document.getElementById('foto-cliente');
    const spanNomeFileCliente = document.getElementById('file-name-cliente');

    if (formCliente && inputFotoCliente && spanNomeFileCliente) {
        inputFotoCliente.addEventListener('change', () => {
            spanNomeFileCliente.textContent = inputFotoCliente.files[0]
                ? inputFotoCliente.files[0].name
                : 'Nenhum arquivo escolhido';
        });

        formCliente.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Cliente cadastrado com sucesso!');
            formCliente.reset();
            spanNomeFileCliente.textContent = 'Nenhum arquivo escolhido';
        });
    }

    const formFuncionario = document.getElementById('form-funcionario');
    const inputFotoFuncionario = document.getElementById('foto-funcionario');
    const spanNomeFileFuncionario = document.getElementById('file-name-funcionario');

    if (formFuncionario && inputFotoFuncionario && spanNomeFileFuncionario) {
        inputFotoFuncionario.addEventListener('change', () => {
            spanNomeFileFuncionario.textContent = inputFotoFuncionario.files[0]
                ? inputFotoFuncionario.files[0].name
                : 'Nenhum arquivo escolhido';
        });

        formFuncionario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Funcionário cadastrado com sucesso!');
            formFuncionario.reset();
            spanNomeFileFuncionario.textContent = 'Nenhum arquivo escolhido';
        });
    }

    const formProduto = document.getElementById('form-produto');
    const inputFotoProduto = document.getElementById('foto-produto');
    const spanNomeFileProduto = document.getElementById('file-name-produto');

    if (formProduto && inputFotoProduto && spanNomeFileProduto) {
        inputFotoProduto.addEventListener('change', () => {
            spanNomeFileProduto.textContent = inputFotoProduto.files[0]
                ? inputFotoProduto.files[0].name
                : 'Nenhum arquivo escolhido';
        });

        formProduto.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Produto cadastrado com sucesso!');
            formProduto.reset();
            spanNomeFileProduto.textContent = 'Nenhum arquivo escolhido';
        });
    }

    const formLoja = document.getElementById('form-loja');
    const inputLogoLoja = document.getElementById('logo-loja');
    const spanNomeFileLoja = document.getElementById('file-name-loja');

    if (formLoja && inputLogoLoja && spanNomeFileLoja) {
        inputLogoLoja.addEventListener('change', () => {
            spanNomeFileLoja.textContent = inputLogoLoja.files[0]
                ? inputLogoLoja.files[0].name
                : 'Nenhum arquivo escolhido';
        });

        formLoja.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Loja cadastrada com sucesso!');
            formLoja.reset();
            spanNomeFileLoja.textContent = 'Nenhum arquivo escolhido';
        });
    }


    const formCupom = document.getElementById('form-cupom');

    if (formCupom) {
        formCupom.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Cupom cadastrado com sucesso!');
            formCupom.reset();
        });
    }

    const botoesExcluir = document.querySelectorAll('.btn-excluir');
    const botoesEditar = document.querySelectorAll('.btn-editar');

    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', () => {
            const confirmado = confirm('Tem certeza que deseja excluir este registro?');
            if (confirmado) {
                const linha = botao.closest('tr');
                if (linha) linha.remove();
            }
        });
    });

    botoesEditar.forEach(botao => {
        botao.addEventListener('click', () => {
            alert('Abrindo tela de edição...');
        });
    });
});
