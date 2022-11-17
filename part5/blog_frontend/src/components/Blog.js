const Blog = ({ blog, likeBlog }) => (
  <div>
    {blog.title} {blog.author} {blog.likes}
    <button onClick={() => likeBlog(blog)}>like</button>
  </div>
)

export default Blog
