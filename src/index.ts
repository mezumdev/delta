import app from "./server"
import config from "./config"

let serverExport = {}

if (typeof Bun !== undefined) {
    serverExport = {
        port: config.port,
        fetch: (req: Request, server: any) => {
            let modifiedReq = req.clone()
            let requestIP = server.requestIP(req)
            modifiedReq.headers.set("Connecting-IP", `${requestIP.address}`)
            return app.fetch(modifiedReq)
        }
    }
}

export default serverExport