import Editora from "../modelo/Editora";

const editoras:  Array<Editora>=[
    new Editora(1, "GMT"),
    new Editora(2, "Sextante"),
    new Editora(3, "Alta Books"),
];
 
class ControleEditora {
    // public constructor(parameters) {};

    getNomeEditora(codEditora: number): string  {
        const editora = editoras.filter( editora => editora.codEditora === codEditora );
        return editora[0] ? editora[0].nome: "não encontrado!";
      }

    getEditoras(): Array<Editora> {
        return editoras;
    }
}

export default ControleEditora