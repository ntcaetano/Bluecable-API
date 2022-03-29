import React, { InputHTMLAttributes } from "react"

interface VendedorProps extends InputHTMLAttributes<HTMLInputElement> {
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Vendedor(props: VendedorProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <select
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    w-full
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            >
                <option placeholder="" value="" >Selecione</option>
                <option>Agatha Santos</option>
                <option>Alexandre Porto</option>
                <option>Alexandre Rocha</option>
                <option>Alexia Netto</option>
                <option>Allyson Silveira</option>
                <option>Amanda Oliveira</option>
                <option>Amanda Silva</option>
                <option>Ana Carli</option>
                <option>Andre Pereira</option>
                <option>Andrey Cabral</option>
                <option>Andriele Forte</option>
                <option>Bluebot</option>
                <option>Brandon Mendes</option>
                <option>Brenda Pierini</option>
                <option>Brunno Silveira</option>
                <option>Bryan Wait</option>
                <option>Bryana Costa</option>
                <option>Camila Freitas</option>
                <option>Camilly Quadros</option>
                <option>Camily Menezes</option>
                <option>Cassia Silva</option>
                <option>Derik Brito</option>
                <option>Eduarda Domingues</option>
                <option>Eduarda Fernandes</option>
                <option>Eduarda Santos</option>
                <option>Emelly Cruz</option>
                <option>Evelyn Farias</option>
                <option>Fernanda Martins</option>
                <option>Fernanda Oliveira</option>
                <option>Fernanda.Martinho</option>
                <option>Francyelli Jacoby</option>
                <option>Frantierry Oliveira</option>
                <option>Gabriel Freitas</option>
                <option>Gabrielle Mattos</option>
                <option>Gabrielle Santos</option>
                <option>Gabrielle Silveira</option>
                <option>Geovana Silva</option>
                <option>Geovane Cardoso</option>
                <option>Gloria Barbosa</option>
                <option>Guilherme Dutra</option>
                <option>Guilherme Oliveira</option>
                <option>Jackson Lafonte</option>
                <option>Jeferson Alves</option>
                <option>Joao Pires</option>
                <option>Joao Vitor</option>
                <option>Jose Vieira</option>
                <option>Julia Camilles</option>
                <option>Julia Vargas</option>
                <option>Kauane Silva</option>
                <option>Laysla Silva</option>
                <option>Leonardo Lima</option>
                <option>Lesley Azevedo</option>
                <option>Lidio Santos</option>
                <option>Livia Vitoria</option>
                <option>Lorenzo Costa</option>
                <option>Lucas Miranda</option>
                <option>Luiz Brum</option>
                <option>Luiz Oliveira</option>
                <option>Luiza Cremer</option>
                <option>Luyse Rosa</option>
                <option>Maicon Santos</option>
                <option>Manuela Pereira</option>
                <option>Maria Almeida</option>
                <option>Maria Rodrigues</option>
                <option>Marjana Garcia</option>
                <option>Mateus Machado</option>
                <option>Matheus Paim</option>
                <option>Murilo Santos</option>
                <option>Natasha Melo</option>
                <option>Nathally Santos</option>
                <option>Nathielly Goncalves</option>
                <option>Natieli Silva</option>
                <option>Nicolas Lima</option>
                <option>Nicolle Silva</option>
                <option>Pedro Rodrigues</option>
                <option>Pierry Fachel</option>
                <option>Rafaela Silva</option>
                <option>Rafaela Vívian</option>
                <option>Rafaella Nunes</option>
                <option>Raissa Lima</option>
                <option>Rayane Adolpho</option>
                <option>Rhyan Rodrigues</option>
                <option>Samuel Rodrigo</option>
                <option>Tamara Oliveira</option>
                <option>Tania Carvalho</option>
                <option>Thaylor Borges</option>
                <option>Tiago Santos</option>
                <option>Vitor Macedo</option>
                <option>Vitoria Lima</option>
                <option>Vitoria Peres</option>
                <option>Vitoria Silva</option>
            </select>
        </div>
    )
}