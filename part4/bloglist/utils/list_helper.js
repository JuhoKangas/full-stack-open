const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const totalLikes = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return totalLikes
}

const favoriteBlog = (blogs) => {
  const mostLikes = blogs.reduce(
    (favorite, blog) => (favorite.likes > blog.likes ? favorite : blog),
    {}
  )
  const favoriteBlog = {
    title: mostLikes.title,
    author: mostLikes.author,
    likes: mostLikes.likes,
  }
  return favoriteBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
