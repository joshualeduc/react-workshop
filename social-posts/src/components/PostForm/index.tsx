import React, { useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import IPost from '../../models/IPost'

function PostForm({
  handleCloseForm,
  handleSubmit,
}: {
  handleCloseForm: () => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>, formValues: IPost) => void
}) {
  const [titleValue, setTitleValue] = useState('')
  const [thoughtValue, setThoughtValue] = useState('')

  return (
    <>
      <div style={{ textAlign: 'right', fontSize: '1.5rem' }}>
        <FontAwesomeIcon icon={faTimesCircle} onClick={handleCloseForm} />
      </div>
      <form className='thought-form' onSubmit={e => handleSubmit(e, { title: titleValue, thought: thoughtValue })}>
        <div>
          <label htmlFor='title-value'>Title</label>
          <input type='text' id='title-value' value={titleValue} onChange={e => setTitleValue(e.currentTarget.value)} />
        </div>
        <div>
          <label htmlFor='thought-value'>Thought</label>
          <textarea
            id='thought-value'
            value={thoughtValue}
            onChange={e => setThoughtValue(e.currentTarget.value)}
          ></textarea>
        </div>
        <button type='submit'>Add Post</button>
      </form>
    </>
  )
}

export default PostForm
