const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/Character", createProxyMiddleware({
    target:"http://character:3001/",
    changeOrigin:true
}))
app.use("/Films", createProxyMiddleware({
    target:"http://film:3002/",
    changeOrigin:true
}))
app.use("/Planets", createProxyMiddleware({
    target:"http://planet:3003/",
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