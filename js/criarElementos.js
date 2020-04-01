function adicionarFuncionarioNaTabela(funcionario) {
    var funcionarioTr = montaTr(funcionario);
    var tabela = document.querySelector('#tabela-funcionarios');
    tabela.appendChild(funcionarioTr);
}

function montaTr(funcionario) {
    var funcionarioTr = document.createElement('tr');

    var codigo = montaTd(funcionario.id);
    var nome = montaTd(funcionario.nome);
    var email = montaTd(funcionario.email);
    var cargo = montaTd(funcionario.cargo);

    funcionarioTr.appendChild(codigo);
    funcionarioTr.appendChild(nome);
    funcionarioTr.appendChild(email);
    funcionarioTr.appendChild(cargo);

    return funcionarioTr;
}

function montaTd(dado) {
    var td = document.createElement('td');
    td.textContent = dado;
    return td;
}

function obterFuncionario(form) {

    var funcionario = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        email: form.email.value,
        salario: form.salario.value,
        telefone: form.telefone.value,
        cargo: form.cargo.value   
    }

    return funcionario;
}