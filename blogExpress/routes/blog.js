const express = require('express')
const path = require('path')
const blogs = require("../data/blogs.js")
const router = express.Router()

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname, '../templates/index.html'))
    
    // These "../" means that index.html is not in the routes folder itself it is outside that folder, if we do not include "../" 
    // it searches for the file within the folder only
    res.render("home")
})
router.get('/blog',(req,res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
    res.render("blogHome",{
        listofblogs:blogs
    })

    // These "../" means that index.html is not in the routes folder itself it is outside that folder, if we do not include "../" 
    // it searches for the file within the folder only
})
router.get('/blogpost/:slug', (req,res)=>{
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
    res.render("blogPage",{
        title:myBlog[0].title,   //Writing this "[0]" here is necessary because myBlog is an array from which we need the 0th no. object.
        content:myBlog[0].content
    })

    // These "../" means that index.html is not in the routes folder itself it is outside that folder, if we do not include "../" 
    // it searches for the file within the folder only
})

module.exports = router

