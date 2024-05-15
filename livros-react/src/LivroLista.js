import { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ( props ) => {

  const { livro, excluir } = props;

    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr>
          <td>
            {livro.titulo}
            <br></br>  
            <button class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
          </td>
          <td>{livro.resumo}</td>
          <td>{nomeEditora}</td>
          <td>
            <ul>
              {livro.autores.map((autor, index) => ( <li key={index}>{autor}</li>  ))}
            </ul>
          </td>
        </tr>
    );
};

const LivroLista =()=> {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
      const obterLivros = () => {
        const livrosObtidos = controleLivro.obterLivros();
        setLivros(livrosObtidos);
        setCarregado(true);
      };
  
      obterLivros();
    },[carregado]);
  
    const excluir = codigo => {
      controleLivro.excluir(codigo);
      setCarregado(false);
    };
  
    return (
      <main class="container text-start">
        <h1><b>Catálogo de Livros</b></h1>
        <table class="table table-striped">
          <thead>
            <tr class="table-dark">
              <th class="col-2">Título</th>
              <th class="col-4">Resumo</th>
              <th class="col-2">Editora</th>
              <th class="col-2">Autores</th>
            </tr>
          </thead>
          <tbody >
            {carregado && livros.map((livro) => ( <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} /> ))}
          </tbody>
        </table>
      </main>
    );
};
  
  export default LivroLista;