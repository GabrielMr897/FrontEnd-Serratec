let contatos = [
    {
        nome: 'João',
        celular: '22981205064',
        email: 'joao@gmail.com',
        data: '02/05/1989'
    },
    {
        nome: 'Fulano',
        celular: '2298156064',
        email: 'fulano@gmail.com',
        data: '05/02/1968'
    },
    {
        nome: 'Gabriel',
        celular: '22981308291',
        email: 'gabriel@gmail.com',
        data: '05/02/1989'
    }
]



console.log(contatos)

contatos.forEach((contato) => {
    console.log(contato.nome)
})