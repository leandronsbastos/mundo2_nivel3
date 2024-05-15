import Livro from "../modelo/Livro";

const livros:  Array<Livro>=[
    new Livro(1,2,"Comece pelo Porque", "Como grandes líderes inspiram pessoas e equipes a agir",["Simon Sinek"] ),
    new Livro(2,1, "O Monge e o Executivo", "Uma história sobre a essência da liderança",["James C. Hunter", "Maria da Conceição Fornos De Magalhães (Tradutor)" ] ),
    new Livro(3,3, "Inspirado", "Como criar produtos de tecnologia que os clientes amam", ["Marty Vagan"]),
];
 
class ControleLivro {
    // public constructor(parameters) {};

    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir( livro:Livro ){
        const codigos = livros.map( livro => livro.codigo );
        const CodigoMaisAlto = Math.max( ...codigos );
    
        livro.codigo = CodigoMaisAlto + 1;

        console.log( "livro",livro )
        livros.push( livro );
    }

    excluir( codigo:number ){
       const livroEncontrado = livros.findIndex( livro => livro.codigo === codigo );
       livros.splice( livroEncontrado, 1 );
    }
}

export default ControleLivro

