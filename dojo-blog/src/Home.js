import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // let name = "Mario";
    // const [name, setName] = useState("Mario")
    // const [age, setAGe] = useState(20)
    const [blogs, setblogs] = useState([
        {title: "Title 1", body:"Body 1", author: "Author 1", id:1},
        {title: "Title 2", body:"Body 2", author: "Author 2", id:2},
        {title: "Title 3", body:"Body 3", author: "Author 3", id:3}
    ])


    // const handleClick = (event)=>{
    //     // console.log("Hello Ninjas")
    //     // console.log("Hello Ninjas", event)
    //     // name="Luigi";
    //     // console.log(name)
    //     if (name==="Yoshi") setName("Mario")
    //     else setName("Yoshi")
    // }

    // const handleClickAgain = (name, event)=>{
    //     console.log(`Hello ${name}`)
    //     // console.log(event) 
    // }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
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