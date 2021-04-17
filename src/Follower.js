import React from 'react'

const Follower = ({ follower_url, avatar_url, login }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a
        href={follower_url}
        className='btn'
        target='_blank'
        rel='noopener noreferrer'
      >
        view profile
      </a>
    </article>
  )
}

export default Follower
