import React from "react";
import { render, screen } from '@testing-library/react';
import CadastrarTarefa from "./cadastrar-tarefa";

describe('Testes do componente cadastrar tarefa', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        render(<CadastrarTarefa />), div;
    });
});

