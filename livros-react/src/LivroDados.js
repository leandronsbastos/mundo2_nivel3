import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LivroDados = () =>{
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();


  const opcoes = controleEditora.getEditoras().map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = event => {
    const codigoEditora = Number( event.target.selectedOptions[0].value );
    setCodEditora( codigoEditora );
  };

  const incluir = event => {

    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluir(livro);
    navigate('/');
  };


  return (
    <main>
      <form onSubmit={incluir} class="container">
        <h1> <b> Dados do Livro</b> </h1>

        <div class="mb-3">
          <label>Título</label>
          <input type="text" class="form-control" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
        </div>

        <div class="mb-3">
          <label>Resumo</label>
          <textarea class="form-control" value={resumo} onChange={(event) => setResumo(event.target.value)} />
        </div>


        <div class="mb-3">
          <label>Editora</label>
          <select class="form-select" value={codEditora} onChange={tratarCombo}>
          {opcoes.map((opcao) => (<option key={opcao.value} value={opcao.value}> {opcao.text} </option> ))}
          </select>
        </div>

        
        <div class="mb-3">
          <label>Autores(1 por linha)</label>
          <textarea class="form-control" value={autores} onChange={(event) => setAutores(event.target.value)} />
        </div>

        <button class="btn btn-primary" type="submit">Salvar Dados</button>
      </form>
    </main>
  );
};
// const LivroDados = () =>{
    
//     return( <main>Olá mundo</main> );
// }

export default LivroDados;