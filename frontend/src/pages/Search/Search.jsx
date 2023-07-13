import { useDispatch, useSelector } from "react-redux"
import { useQuery } from "../../hooks/useQuery"
import { useResetComponentMessage } from "../../hooks/useResetComponent";

import "./Search.css"
import { useEffect } from "react";
import { like, searchPhotos } from "../../slices/photoSlice";
import { PhotoItem } from "../../components/PhotoItem";
import { LikeContainer } from "../../components/LikeContainer";
import { Link } from "react-router-dom";

export  const Search = () => {
  const query = useQuery()
  const search = query.get("q")

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const {user} = useSelector(state => state.auth)
  const {photos, loading} = useSelector(state => state.photo)

  useEffect(() => {

    dispatch(searchPhotos(search))

  }, [dispatch, search])

  const handleLike = (photo) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="search">
    <h2>Você está buscuando por: {search}</h2>
    {photos && photos.map((photo) => (
        <div key={photo._id}>
          <PhotoItem photo={photo}/>
          <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
          <Link className='btn' to={`/photos/${photo._id}`}>Ver mais</Link>
        </div>
      ))}

{photos && photos.length === 0 && (
        <h2 className="no-photos">
           Não foram encontrado resultados para sua busca...
        </h2>
      )}
    </div>
  )
}


