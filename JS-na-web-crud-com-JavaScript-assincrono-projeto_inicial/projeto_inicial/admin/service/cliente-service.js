async function listaClientes() {
    try {
        const conectaAPI = await fetch('http://localhost:3000/profile')
        const conectaTraduzido = await conectaAPI.json()

        return conectaTraduzido
    } catch (error) {
        throw new Error ("Não foi possivel listar os clientes")
    }
}

async function criaCliente(nome, email) {
    try {
        const resposta = await fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })
        const dados = await resposta.json()

        return dados
    } catch (error) {
        throw new Error ("Não foi possivel criar um cliente")
    }
}

async function removeCliente (id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE',
        })
        return resposta
    } catch (error) {
        throw new Error ("Não foi possivel deletar um cliente")
    }
}

async function detalhaCliente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`)
        const respostaTraduzida = await resposta.json()
        return respostaTraduzida
    } catch (error) {
        throw new Error ("Não foi possivel detalhar um cliente")
    }
}

async function atualizaCliente(id, nome, email) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })

        const dados = await resposta.json()
        return dados
    } catch (error) {
        throw new Error ("Não foi possivel atualizar um cliente")
    }
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}