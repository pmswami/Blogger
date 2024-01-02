import { useState, useEffect } from "react";
import React from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [isPending, setIsPending] = useState(true)

    // let name = "Mario";
    // const [name, setName] = useState("Mario")
    // const [age, setAGe] = useState(20)
    // const [blogs, setblogs] = useState([
    //     {title: "Title 1", body:"Body 1", author: "Author 1", id:1},
    //     {title: "Title 2", body:"Body 2", author: "Author 2", id:2},
    //     {title: "Title 3", body:"Body 3", author: "Author 3", id:3}
    // ])
    const [blogs, setblogs] = useState(null)

    // const [name, setName] = useState("Mario")

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter((blog)=>blog.id!==id)
    //     setblogs(newBlogs)
    // }

    // useEffect(()=>{
    //     console.log("useEffect ran")
    //     // never set states of vars inside useEffect, might end up in infinite loop
    //     console.log(name)
    // },[name])

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
            .then(res=>{
                return res.json()
            })
            .then(data =>{
                // console.log(data)
                setblogs(data)
                setIsPending(false)
            })
        }, 1000)
    },[])

    // const handleClick = (event)=>{
    //     // console.log("Hello Ninjas")
    //     // console.log("Hello Ninjas", event)
    //     // name="Luigi";
    //     // console.log(name)
    //     if (name==="Yoshi") setName("Mario")
    //     else setName("Yoshi")
    // }

    // const handleClickAgain = (name,   event)=>{
    //     console.log(`Hello ${name}`)
    //     // console.log(event) 
    // }

    return (
        <div className="home">
            {isPending && <div>Loading</div>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <button onClick={()=>{setName("Luigi")}}>Change Name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="Author 2")} title="Mario's Blogs!"/> */}
            {/* <div>
                {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </div>
                ))} 
            </div> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me!</button> */}
            {/* <button onClick={(event) => {handleClickAgain("Yoshi", event)}}>Click Me!</button> */}
        </div>
    );
}

export default Home;