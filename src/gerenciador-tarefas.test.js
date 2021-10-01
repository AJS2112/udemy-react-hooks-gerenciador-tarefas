import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('deve renderizar o projeto sem erro', () => {
  render(<GerenciadorTarefas />);

});
