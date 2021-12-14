function Square(props) { //criando um componente desestruturado com as {}
    /* const titulo = `${props.titulo} DevInHouse` */ //pra usar o $ não é "" nem '' mas sim crase ``
    return (
        <div
            style={{ background: props.background, width: props.largura }}
            className="square">
        </div>
    )
}

export default Square