import { useState } from 'react'

const BlogForm = (props) => {
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  })

  return (
    <>
      <h2>create new</h2>

      <form
        onSubmit={(e) => {
          props.addBlog(e, newBlog)
          setNewBlog({ title: '', author: '', url: '' })
        }}
      >
        title:
        <input
          type="text"
          value={newBlog.title}
          name="title"
          onChange={({ target }) =>
            setNewBlog({
              ...newBlog,
              title: target.value,
            })
          }
        />
        <br />
        author:
        <input
          type="text"
          value={newBlog.author}
          name="author"
          onChange={({ target }) =>
            setNewBlog({ ...newBlog, author: target.value })
          }
        />
        <br />
        url:
        <input
          type="text"
          value={newBlog.url}
          name="url"
          onChange={({ target }) =>
            setNewBlog({ ...newBlog, url: target.value })
          }
        />
        <br />
        <button type="submit">create</button>
      </form>
    </>
  )
}
export default BlogForm
