import {rest} from 'msw'

const data = [
    {
        username:'Kyle',
        title:'Post 1'
    },
    {
        username:'Jim',
        title:'Post 2'
    },
]

export const handlers = [
    rest.get('http://localhost:4000/test',
    (req,res,ctx)=>{
        console.log('msw called')

        return res(
            ctx.status(200),
            ctx.json('Kyle')
        )
    }),

    rest.get('http://localhost:4000/tests',
    (req,res,ctx)=>{
        console.log('msw called')

        return res(
            ctx.status(200),
            ctx.json(data)
        )
    }),

]