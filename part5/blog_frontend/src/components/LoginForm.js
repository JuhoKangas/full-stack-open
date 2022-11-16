const LoginForm = ({ login, username, password, setUsername, setPassword }) => {
  return (
    <>
      <form onSubmit={login}>
        username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <button type="submit">login</button>
      </form>
    </>
  )
}

export default LoginForm
