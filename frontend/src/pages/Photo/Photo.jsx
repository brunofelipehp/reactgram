import { useParams } from 'react-router-dom'
import './Photo.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPhoto, like } from '../../slices/photoSlice'
import { PhotoItem } from '../../components/PhotoItem'
import { LikeContainer } from '../../components/LikeContainer'
import { Message } from '../../components/Message'
import { useResetComponentMessage } from '../../hooks/useResetComponent'


export const Photo = () => {
  const {id} = useParams()

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const {user} = useSelector((state) => state.auth)
  const {photo, loading, error, message} = useSelector((state) => state.photo)
  
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  const handleLike = () => {
    dispatch(like(photo._id))

    resetMessage()
  }

  if(loading) {
    return <p>Carregando...</p>
  }


  return (
    <div id="photo">
     <PhotoItem photo={photo} />
     <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
     <div className="message-container">
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
     </div>
    </div>
  )
}
