// Hook
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useResetComponentMessage } from "../../hooks/useResetComponent";

// Redux
import { getPhotos, like } from '../../slices/photoSlice';
//Component
import { PhotoItem } from "../../components/PhotoItem"
import { LikeContainer } from "../../components/LikeContainer"
import { Link } from 'react-router-dom';

import './Home.css'

export const Home = () => {

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const {user} = useSelector((state) => state.auth)
  const {photos, loading} = useSelector((state) => state.photo)

  useEffect(() => {
    dispatch(getPhotos())

  }, [dispatch])

 const handleLike = (photo) => {

  dispatch(like(photo._id))

  resetMessage()
 }

 if(loading) {
  return <p>Carregando...</p>
 }

  return (
    <div id="home">
      {photos && photos.map((photo) => (
        <div key={photo._id}>
          <PhotoItem photo={photo}/>
          <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
          <Link className='btn' to={`/photos/${photo._id}`}>Ver mais</Link>
        </div>
      ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
           Ainda não há fotos publicadas,
           <Link to={`/users/${user._id}`}>Clique aqui</Link>
        </h2>
      )}
    </div>
  )
}
