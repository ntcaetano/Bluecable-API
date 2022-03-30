import React, { InputHTMLAttributes } from "react"

interface CidadeProps extends InputHTMLAttributes<HTMLInputElement> {
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Cidade(props: CidadeProps) {
    return (
        <div className={`flex flex-col ${props.className}`}
        >
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
                <option>Adamantina</option>
                <option>Aguai</option>
                <option>Agudos</option>
                <option>Alegrete</option>
                <option>Almirante Tamandare</option>
                <option>Alvares Machado</option>
                <option>Alvorada</option>
                <option>Americana</option>
                <option>Amparo</option>
                <option>Ananindeua</option>
                <option>Anapolis</option>
                <option>Andradina</option>
                <option>Angra Dos Reis</option>
                <option>Aparecida</option>
                <option>Aparecida De Goiania</option>
                <option>Apucarana</option>
                <option>Aquiraz</option>
                <option>Aracaju</option>
                <option>Aracatuba</option>
                <option>Aracoiaba Da Serra</option>
                <option>Araguaina</option>
                <option>Araguari</option>
                <option>Arapongas</option>
                <option>Ararangua</option>
                <option>Araraquara</option>
                <option>Araras</option>
                <option>Araruama</option>
                <option>Araucaria</option>
                <option>Armacao Dos Buzios</option>
                <option>Arraial Do Cabo</option>
                <option>Arroio Do Meio</option>
                <option>Artur Nogueira</option>
                <option>Aruja</option>
                <option>Assis</option>
                <option>Atibaia</option>
                <option>Bage</option>
                <option>Balneario Camboriu</option>
                <option>Barra Bonita</option>
                <option>Barra Do Garcas</option>
                <option>Barra Mansa</option>
                <option>Barretos</option>
                <option>Barrinha</option>
                <option>Barueri</option>
                <option>Batatais</option>
                <option>Bauru</option>
                <option>Belem</option>
                <option>Belford Roxo</option>
                <option>Belo Horizonte</option>
                <option>Bento Goncalves</option>
                <option>Bertioga</option>
                <option>Betim</option>
                <option>Biguacu</option>
                <option>Birigui</option>
                <option>Blumenau</option>
                <option>Blumenau Btv</option>
                <option>Boa Vista</option>
                <option>Boituva</option>
                <option>Botucatu</option>
                <option>Braganca Paulista</option>
                <option>Brasilia</option>
                <option>Brusque</option>
                <option>Cabedelo</option>
                <option>Cabo Frio</option>
                <option>Cabreuva</option>
                <option>Cacador</option>
                <option>Cacapava</option>
                <option>Cachoeira Do Sul</option>
                <option>Cachoeira Paulista</option>
                <option>Cachoeirinha</option>
                <option>Cachoeiro De Itapemirim</option>
                <option>Caieiras</option>
                <option>Caldas Novas</option>
                <option>Camacari</option>
                <option>Cambe</option>
                <option>Camboriu</option>
                <option>Campina Grande</option>
                <option>Campina Grande Do Sul</option>
                <option>Campinas</option>
                <option>Campo Bom</option>
                <option>Campo Grande</option>
                <option>Campo Largo</option>
                <option>Campo Limpo Paulista</option>
                <option>Campo Mourao</option>
                <option>Campos Do Jordao</option>
                <option>Campos Dos Goytacazes</option>
                <option>Canela</option>
                <option>Canoas</option>
                <option>Capao Da Canoa</option>
                <option>Capivari</option>
                <option>Caraguatatuba</option>
                <option>Carapicuiba</option>
                <option>Carazinho</option>
                <option>Cariacica</option>
                <option>Carlos Barbosa</option>
                <option>Caruaru</option>
                <option>Cascavel</option>
                <option>Castanhal</option>
                <option>Castro</option>
                <option>Catanduva</option>
                <option>Caucaia</option>
                <option>Caxias Do Sul</option>
                <option>Cerquilho</option>
                <option>Chapeco</option>
                <option>Charqueadas</option>
                <option>Cianorte</option>
                <option>Colatina</option>
                <option>Colombo</option>
                <option>Concordia</option>
                <option>Conselheiro Lafaiete</option>
                <option>Contagem</option>
                <option>Coronel Fabriciano</option>
                <option>Corumba</option>
                <option>Cosmopolis</option>
                <option>Cotia</option>
                <option>Cravinhos</option>
                <option>Criciuma</option>
                <option>Cruz Alta</option>
                <option>Cruzeiro</option>
                <option>Cubatao</option>
                <option>Cuiaba</option>
                <option>Curitiba - Cabo</option>
                <option>Curitiba - Mmds</option>
                <option>Descalvado</option>
                <option>Diadema</option>
                <option>Divinopolis</option>
                <option>Dois Irmaos</option>
                <option>Dourados</option>
                <option>Dracena</option>
                <option>Duque De Caxias</option>
                <option>Eldorado Do Sul</option>
                <option>Elias Fausto</option>
                <option>Embu Das Artes</option>
                <option>Embu-Guacu</option>
                <option>Encantado</option>
                <option>Erechim</option>
                <option>Espirito Santo Do Pinhal</option>
                <option>Estancia Velha</option>
                <option>Esteio</option>
                <option>Estrela</option>
                <option>Eusebio</option>
                <option>Farroupilha</option>
                <option>Fazenda Rio Grande</option>
                <option>Feira De Santana</option>
                <option>Fernandopolis</option>
                <option>Florianopolis</option>
                <option>Fortaleza</option>
                <option>Foz Do Iguacu</option>
                <option>Fraiburgo</option>
                <option>Franca</option>
                <option>Francisco Beltrao</option>
                <option>Garanhuns</option>
                <option>Garibaldi</option>
                <option>Gaspar</option>
                <option>Goiania</option>
                <option>Governador Valadares</option>
                <option>Gramado</option>
                <option>Gravatai</option>
                <option>Guaiba</option>
                <option>Guaramirim</option>
                <option>Guarapuava</option>
                <option>Guaratingueta</option>
                <option>Guaratuba</option>
                <option>Guaruja</option>
                <option>Guarulhos</option>
                <option>Hortolandia</option>
                <option>Ibirite</option>
                <option>Ibiuna</option>
                <option>Icara</option>
                <option>Igaracu Do Tiete</option>
                <option>Igrejinha</option>
                <option>Ijui</option>
                <option>Ilheus</option>
                <option>Imbe</option>
                <option>Imperatriz</option>
                <option>Indaial</option>
                <option>Indaiatuba</option>
                <option>Ipatinga</option>
                <option>Ipero</option>
                <option>Itabira</option>
                <option>Itabuna</option>
                <option>Itajai</option>
                <option>Itajuba</option>
                <option>Itanhaem</option>
                <option>Itapecerica Da Serra</option>
                <option>Itapema</option>
                <option>Itapetininga</option>
                <option>Itapeva</option>
                <option>Itapevi</option>
                <option>Itapira</option>
                <option>Itaquaquecetuba</option>
                <option>Itatiba</option>
                <option>Itu</option>
                <option>Ituiutaba</option>
                <option>Itupeva</option>
                <option>Ituverava</option>
                <option>Ivoti</option>
                <option>Jaboatao Dos Guararapes</option>
                <option>Jacarei</option>
                <option>Jaguariuna</option>
                <option>Jales</option>
                <option>Jandira</option>
                <option>Jaragua Do Sul</option>
                <option>Jarinu</option>
                <option>Jau</option>
                <option>Joacaba</option>
                <option>Joao Pessoa</option>
                <option>Joinville</option>
                <option>Juiz De Fora</option>
                <option>Jundiai</option>
                <option>Lages</option>
                <option>Lagoa Santa</option>
                <option>Lajeado</option>
                <option>Lauro De Freitas</option>
                <option>Lavras</option>
                <option>Leme</option>
                <option>Limeira</option>
                <option>Lins</option>
                <option>Londrina</option>
                <option>Lorena</option>
                <option>Louveira</option>
                <option>Lucas Do Rio Verde</option>
                <option>Macae</option>
                <option>Macapa</option>
                <option>Maceio</option>
                <option>Mafra</option>
                <option>Mairinque</option>
                <option>Mairipora</option>
                <option>Manaus</option>
                <option>Mangaratiba</option>
                <option>Maraba</option>
                <option>Marau</option>
                <option>Marilia</option>
                <option>Maringa</option>
                <option>Matao</option>
                <option>Maua</option>
                <option>Mesquita</option>
                <option>Mirassol</option>
                <option>Mococa</option>
                <option>Mogi Das Cruzes</option>
                <option>Mogi Guacu</option>
                <option>Mogi Mirim</option>
                <option>Mongagua</option>
                <option>Monte Mor</option>
                <option>Montenegro</option>
                <option>Montes Claros</option>
                <option>Mossoro</option>
                <option>Natal</option>
                <option>Navegantes</option>
                <option>Nilopolis</option>
                <option>Niteroi</option>
                <option>Nova Friburgo</option>
                <option>Nova Iguacu</option>
                <option>Nova Lima</option>
                <option>Nova Odessa</option>
                <option>Nova Petropolis</option>
                <option>Novo Hamburgo - Cabo</option>
                <option>Novo Hamburgo - Mmds</option>
                <option>Olinda</option>
                <option>Orlandia</option>
                <option>Osasco</option>
                <option>Osorio</option>
                <option>Ourinhos</option>
                <option>Palhoca</option>
                <option>Palmas</option>
                <option>Panambi</option>
                <option>Paranagua</option>
                <option>Parnamirim</option>
                <option>Parobe</option>
                <option>Passo Fundo</option>
                <option>Pato Branco</option>
                <option>Paulinia</option>
                <option>Paulista</option>
                <option>Pedreira</option>
                <option>Pelotas</option>
                <option>Penapolis</option>
                <option>Peruibe</option>
                <option>Petrolina</option>
                <option>Petropolis</option>
                <option>Pindamonhangaba</option>
                <option>Pinhais</option>
                <option>Piracaia</option>
                <option>Piracicaba</option>
                <option>Piraquara</option>
                <option>Pirassununga</option>
                <option>Poa</option>
                <option>Pocos De Caldas</option>
                <option>Ponta Grossa</option>
                <option>Porto Alegre - Cabo</option>
                <option>Porto Alegre - Mmds</option>
                <option>Porto Feliz</option>
                <option>Porto Ferreira</option>
                <option>Porto Real</option>
                <option>Porto Velho</option>
                <option>Potim</option>
                <option>Pouso Alegre</option>
                <option>Praia Grande</option>
                <option>Presidente Bernardes</option>
                <option>Presidente Prudente</option>
                <option>Rafard</option>
                <option>Recife</option>
                <option>Resende</option>
                <option>Ribeirao Pires</option>
                <option>Ribeirao Preto</option>
                <option>Rio Branco</option>
                <option>Rio Claro</option>
                <option>Rio Das Ostras</option>
                <option>Rio De Janeiro</option>
                <option>Rio Do Sul</option>
                <option>Rio Grande</option>
                <option>Rio Grande Da Serra</option>
                <option>Rio Negrinho</option>
                <option>Rio Verde</option>
                <option>Rolandia</option>
                <option>Rondonopolis</option>
                <option>Rosario Do Sul</option>
                <option>Sabara</option>
                <option>Salto</option>
                <option>Salto De Pirapora</option>
                <option>Salvador</option>
                <option>Santa Barbara D Oeste</option>
                <option>Santa Branca</option>
                <option>Santa Cruz Do Rio Pardo</option>
                <option>Santa Cruz Do Sul</option>
                <option>Santa Helena De Goias</option>
                <option>Santa Isabel</option>
                <option>Santa Luzia</option>
                <option>Santa Maria</option>
                <option>Santa Rosa</option>
                <option>Santana</option>
                <option>Santana De Parnaiba</option>
                <option>Santana Do Livramento</option>
                <option>Santo Andre</option>
                <option>Santo Angelo</option>
                <option>Santos</option>
                <option>Santos Abc</option>
                <option>Sao Bento Do Sul</option>
                <option>Sao Bernardo Do Campo</option>
                <option>Sao Borja</option>
                <option>Sao Caetano Do Sul</option>
                <option>Sao Carlos</option>
                <option>Sao Gabriel</option>
                <option>Sao Goncalo</option>
                <option>Sao Joao Da Boa Vista</option>
                <option>Sao Joao De Meriti</option>
                <option>Sao Joaquim Da Barra</option>
                <option>Sao Jose</option>
                <option>Sao Jose Do Rio Pardo</option>
                <option>Sao Jose Do Rio Preto</option>
                <option>Sao Jose Dos Campos</option>
                <option>Sao Jose Dos Pinhais</option>
                <option>Sao Leopoldo - Cabo</option>
                <option>Sao Leopoldo - Mmds</option>
                <option>Sao Lourenco Do Sul</option>
                <option>Sao Luis</option>
                <option>Sao Miguel Arcanjo</option>
                <option>Sao Paulo</option>
                <option>Sao Pedro Da Aldeia</option>
                <option>Sao Roque</option>
                <option>Sao Sebastiao</option>
                <option>Sao Vicente</option>
                <option>Sapiranga</option>
                <option>Sapucaia Do Sul</option>
                <option>Saquarema</option>
                <option>Serra</option>
                <option>Serra Negra</option>
                <option>Serrana</option>
                <option>Sertaozinho</option>
                <option>Sete Lagoas</option>
                <option>Sinop</option>
                <option>Sobral</option>
                <option>Sorocaba</option>
                <option>Sorriso</option>
                <option>Sumare</option>
                <option>Suzano</option>
                <option>Taboao Da Serra</option>
                <option>Taquara</option>
                <option>Tatui</option>
                <option>Taubate</option>
                <option>Teofilo Otoni</option>
                <option>Teresina</option>
                <option>Teresopolis</option>
                <option>Teutonia</option>
                <option>Tiete</option>
                <option>Timbo</option>
                <option>Timoteo</option>
                <option>Toledo</option>
                <option>Torres</option>
                <option>Tramandai</option>
                <option>Tremembe</option>
                <option>Tres Coracoes</option>
                <option>Tres Coroas</option>
                <option>Tres Lagoas</option>
                <option>Tubarao</option>
                <option>Tupa</option>
                <option>Uba</option>
                <option>Ubatuba</option>
                <option>Uberaba</option>
                <option>Uberlandia</option>
                <option>Umuarama</option>
                <option>Uruguaiana</option>
                <option>Vacaria</option>
                <option>Valinhos</option>
                <option>Valparaiso De Goias</option>
                <option>Vargem Grande Paulista</option>
                <option>Varginha</option>
                <option>Varzea Grande</option>
                <option>Varzea Paulista</option>
                <option>Venancio Aires</option>
                <option>Vera Cruz</option>
                <option>Veranopolis</option>
                <option>Vespasiano</option>
                <option>Viamao</option>
                <option>Videira</option>
                <option>Vila Velha</option>
                <option>Vinhedo</option>
                <option>Vitoria</option>
                <option>Vitoria Da Conquista</option>
                <option>Volta Redonda</option>
                <option>Votorantim</option>
                <option>Xangri-La</option>
                <option>Xanxere</option>
            </select>
        </div>
    )
}