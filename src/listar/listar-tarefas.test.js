import React from "react";
import { render, screen } from '@testing-library/react';
import ListarTarefas from "./listar-tarefas";

describe('Teste do componente de listagem de tarefas', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        //ReactDOM.render(<ListarTarefas />, div);
        render(<ListarTarefas />, div);
    });
});