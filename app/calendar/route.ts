export async function GET(request: Request): Promise<Response> {
    return Response.json({
        value: new Date(Date.now()).toUTCString()
    })
}