const { Buffer } = require('buffer')

var token = process.env.tunnel_token
var id = process.env.tunnel_id

if (!token) {
  console.log(
    'error tunnel_token,',
    'make sure provide environment with key of tunnel_token'
  )
  process.exit(1)
}

if (!id) {
  console.log(
    'error tunnel_id,',
    'make sure provide environment with key of tunnel_id'
  )
  process.exit(1)
}

token = Buffer.from(token, 'base64').toString()

token = JSON.parse(token)

token = {
  AccountTag: token.a,
  TunnelSecret: token.s,
  TunnelID: token.t
}

token = JSON.stringify(token)

process.stdout.write(token)
process.exit(0)
