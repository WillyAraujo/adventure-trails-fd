import * as PropTypes from "prop-types"

function CardTrilha({dadosTrilha}) {
    return (
        <>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <span>{dadosTrilha.duracao}</span>
            <span>{dadosTrilha.trajeto}</span>
            <span>{dadosTrilha.dificuldade}</span>
            <span>{dadosTrilha.tipo}</span>
            <span>{dadosTrilha.nomeUsuario}</span>
            <img width={200} src={dadosTrilha.urlImagem} alt="imagem-trilha" />
        </>
    )
}

CardTrilha.PropTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.oneOf(['caminhada /trekking', 'ciclismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired,
    })
}

export default CardTrilha