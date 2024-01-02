import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// const BlogList = (props) => {
const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs
    // const title = props.title
    // console.log(props)


    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written By {blog.author}</p>
                            {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                        </Link> 
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;