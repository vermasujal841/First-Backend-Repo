require('dotenv').config()

const express = require('express') // import express from 'express';
const app = express()
const port = 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('mikkudotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>login pe chalo</h1>')
})
app.get('/youtube',(res,req)=>{
    res.send('<h1>youtube pe chalo</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})