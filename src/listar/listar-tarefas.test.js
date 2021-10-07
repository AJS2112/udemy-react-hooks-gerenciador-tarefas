import React from "react";
import ListarTarefas from "./listar-tarefas";
import Tarefa from "../models/tarefa.model";
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('Teste do componente de listagem de tarefas', () => {

    const nomeTarefaPrimeira = 'Primeira Tarefa';
    const nomeTarefaSegunda = 'Segunda Tarefa';
    const nomeTarefaTerceira = 'Terceira Tarefa';

    beforeEach(() => {
        localStorage['tarefas'] = JSON.stringify([
            new Tarefa(1, nomeTarefaPrimeira, false),
            new Tarefa(2, nomeTarefaSegunda, false),
            new Tarefa(3, nomeTarefaTerceira, false)
        ]);
    });

    afterEach(() => {
        delete localStorage['tarefas'];
    })


    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        //ReactDOM.render(<ListarTarefas />, div);
        render(<ListarTarefas />, div);
    });

    it('deve exibir uma tabela contendo 3 tarefas', () => {
        const { getByTestId } = render(<ListarTarefas />);
        const tabela = getByTestId('tabela');
        expect(tabela).toHaveTextContent(nomeTarefaPrimeira);
        expect(tabela).toHaveTextContent(nomeTarefaSegunda);
        expect(tabela).toHaveTextContent(nomeTarefaTerceira);
    });

    it('deve filtrar os dados da tabela de tarefas', () => {
        const { getByTestId } = render(<ListarTarefas />);
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: nomeTarefaPrimeira } });
        const tabela = getByTestId('tabela');

        expect(tabela).toHaveTextContent(nomeTarefaPrimeira);
        expect(tabela).not.toHaveTextContent(nomeTarefaSegunda);
        expect(tabela).not.toHaveTextContent(nomeTarefaTerceira);
    });


});