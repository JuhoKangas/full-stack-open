const Blog = ({ blog, likeBlog, deleteBlog }) => (
  <div>
    {blog.title} {blog.author} {blog.likes}
    <button onClick={() => likeBlog(blog)}>like</button>
    <br />
    <button onClick={() => deleteBlog(blog)}>delete</button>
    <br />
    <br />
  </div>
)

export default Blog
