import React, { useState } from "react"
const Create  = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newBlog = {title, body, author}
        // console.log(newBlog)
        fetch("http://localhost:8000/blogs/",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{
            console.log("New Blog Added!")
            setIsPending(false)
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Blog Author:</label>
                <select 
                    value={author}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create ;