function Card( { imgUrl, alt, children } ){
  
  return ( 
  <div className="card text-start mt-4">
    {(imgUrl && <img src={imgUrl} className="card-img-top" alt = {alt ? alt : ""} />)}
    <div className="card-body">
      {children}    
    </div>
  </div>
  )
}

export default Card