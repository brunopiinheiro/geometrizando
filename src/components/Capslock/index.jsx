const Capslock = ({ children }) => { //para desestruturar posso usar o children no lugar no props ou alguma outra propriedade
    const textoMaiusculo = children.toUpperCase()
    return (
        <div>{textoMaiusculo}</div>
    )
}

export default Capslock;