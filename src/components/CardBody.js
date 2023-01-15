function CardBody( { title, content, link } ){

    return <>
      <h5 className = "card-title">{ title }</h5>
      <p className = "card-text">{ content }</p>
      <a href = { link.href } className="btn btn-primary">{ link.linkText }</a> 
    </>
  }
  
  export default CardBody