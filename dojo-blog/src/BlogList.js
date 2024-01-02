// const BlogList = (props) => {
const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs
    // const title = props.title
    // console.log(props)


    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;