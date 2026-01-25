const Card = ({ titulo = "Sem título", descricao = "Sem descrição" } : { titulo?: string; descricao?: string }) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
}

export default Card;