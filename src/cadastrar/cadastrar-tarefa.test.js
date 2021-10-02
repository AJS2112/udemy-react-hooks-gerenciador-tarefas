import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CadastrarTarefa from "./cadastrar-tarefa";
import '@testing-library/jest-dom/extend-expect';

describe('Testes do componente cadastrar tarefa', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        render(<CadastrarTarefa />), div;
    });

    it('deve cadastrar uma nova tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefa />);
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' } });
        fireEvent.click(getByTestId('btn-cadastrar'));
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
        expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!');
    });
});

