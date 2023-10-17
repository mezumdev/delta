import { Hono } from 'hono'

const app = new Hono()

app.use('*', async (c, next) => {
    const startTime = Date.now()
    await next()
    console.log(`${c.req.header('Connecting-IP')} - ${c.req.method} ${c.req.url} - ${Date.now() - startTime}ms`)
})

app.get('/', (c) => c.text('Hello Hono!'))

export default app