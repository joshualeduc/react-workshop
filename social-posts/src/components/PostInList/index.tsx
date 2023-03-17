import React from 'react'
import IPost from '../../models/IPost'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function PostInList({ posts, handleDeletePost }: { posts: IPost[]; handleDeletePost: (index: number) => void }) {
  return (
    <>
      <p>PostInList</p>
      <ul className='post-list'>
        {posts.map((post, index) => (
          <div key={index}>
            <li>
              <h2>{post.title}</h2>
              <div className='flex-row'>
                <p>{post.thought}</p>
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDeletePost(index)} />
              </div>
            </li>
            <hr></hr>
          </div>
        ))}
      </ul>
    </>
  )
}

export default PostInList
