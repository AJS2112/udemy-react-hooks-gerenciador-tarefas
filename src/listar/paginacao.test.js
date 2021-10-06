import React from "react";
import ReactDOM from "react-dom";
import Paginacao from './paginacao';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe('Testes do componente de paginacao', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Paginacao
                totalItems={10}
                itemsPorPagina={10}
                paginaAtual={1}
                mudarPagina={() => false}
            />
            , div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('deve exibir a paginacao contendo 3 paginas', () => {
        const { getByTestId } = render(
            <Paginacao
                totalItems={15}
                itemsPorPagina={5}
                paginaAtual={1}
                mudarPagina={() => false}
            />
        );

        const paginacao = getByTestId('paginacao');
        expect(paginacao).toHaveTextContent('1');
        expect(paginacao).toHaveTextContent('2');
        expect(paginacao).toHaveTextContent('3');

    });
});



