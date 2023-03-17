import React, { useState } from 'react'
import PostInList from '../PostInList'
import PostForm from '../PostForm'

import Modal from 'react-modal'

import IPost from '../../models/IPost'

const formStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '30%',
    width: '30%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#79c5e8',
    border: '1px black solid',
    borderRadius: '8px',
  },
}

Modal.setAppElement('#root')

function SocialPosts() {
  const [showForm, setShowForm] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([
    {
      title: 'title',
      thought: 'thought',
    },
  ])

  const handleNewThoughtClick = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
  const handleDeletePost = (indexToDelete: number) => setPosts(posts.filter((post, index) => index !== indexToDelete))
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, formValues: IPost) => {
    event.preventDefault()

    setPosts(posts.concat(formValues))
    handleCloseForm()
  }

  return (
    <>
      <h1>My Thoughts {`${showForm}`}</h1>
      <button onClick={handleNewThoughtClick} className='new-button'>
        New Thought
      </button>
      <PostInList posts={posts} handleDeletePost={handleDeletePost} />
      <Modal isOpen={showForm} onRequestClose={handleCloseForm} style={formStyles}>
        <PostForm handleCloseForm={handleCloseForm} handleSubmit={handleSubmit} />
      </Modal>
    </>
  )
}

export default SocialPosts
