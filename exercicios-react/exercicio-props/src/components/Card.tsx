interface CardProps {
    titulo?: string;
    descricao?: string;
}

const Card = ({ titulo = "Sem título", descricao = "Sem descrição" } : CardProps) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
}

export default Card;