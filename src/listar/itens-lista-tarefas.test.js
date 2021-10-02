import React from 'react';
import ReactDOM from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testes do componente que exibe o item da listagem de tarefas', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);
    const tarefaConcluida = new Tarefa(2, nomeTarefa, true);

    it('deve renderizar o componente sem erros', () => {
        render(<ItensListaTarefas tarefas={[]} recarregarTarefas={() => { }} />);
    });

    it('Deve exibir a tarefa', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItensListaTarefas tarefas={[tarefa]} recarregarTarefas={() => false} />
                </tbody>
            </table>
        );

        expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
    });

    it('Deve exibit uma tarefa concluida', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItensListaTarefas tarefas={[tarefaConcluida]} recarregarTarefas={() => false} />
                </tbody>
            </table>
        );

        expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
    });


});