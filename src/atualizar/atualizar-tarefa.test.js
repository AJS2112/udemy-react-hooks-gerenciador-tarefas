import { render } from "@testing-library/react";
import React from "react";
import AtualizarTarefa from "./atualizar-tarefa";

describe('Testes do componente atualizar tarefa', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        render(<AtualizarTarefa id={1} />, div);
    });
});