const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/characters", createProxyMiddleware({
    target:"http://characters:3001/",
    changeOrigin:true
}))
app.use("/films", createProxyMiddleware({
    target:"http://films:3002/",
    changeOrigin:true
}))
app.use("/planets", createProxyMiddleware({
    target:"http://planets:3003/",
    changeOrigin:true
}))
app.use("/database", createProxyMiddleware({
    target:"http://database:3004/",
    changeOrigin:true
}))

const PORT = 8000
app.listen(PORT, ()=>{
    console.log("Gateway Operative 100%");
} )