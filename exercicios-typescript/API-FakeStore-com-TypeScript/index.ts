type Produto = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}

async function buscarProdutos(): Promise<Produto[] | undefined> {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data: Produto[] = await response.json()
        return data 
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
    finally {
        console.log('Busca de produtos finalizada.');
    }
}

async function mostrarProduto() {
    const produtos = await buscarProdutos()
    if (!produtos) {
        console.error('Produto não disponível.')
        return
    }

    produtos.forEach((produto, i) => {
        if (i <= 0) return console.log('#####################//////##########################')
        console.log(produto)
        console.log('#####################~~~~~~##########################')
        console.log(produto.title)
        console.log('#####################~~~~~~##########################')
        console.log(`por R$${produto.price}`)
        console.log('#####################//////##########################')
    })
}

mostrarProduto()