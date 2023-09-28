const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/Character", createProxyMiddleware({
    target:"http://localhost:3001/",
    changeOrigin:true
}))
app.use("/Films", createProxyMiddleware({
    target:"http://localhost:3002/",
    changeOrigin:true
}))
app.use("/Planets", createProxyMiddleware({
    target:"http://localhost:3003/",
    changeOrigin:true
}))
app.use("/database", createProxyMiddleware({
    target:"http://localhost:3004/",
    changeOrigin:true
}))

const PORT = 8000
app.listen(PORT, ()=>{
    console.log("Gateway Operative 100%");
} )