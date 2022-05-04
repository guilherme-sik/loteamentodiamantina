/* Definindo componente de imagens pequenas e largas com título */
/* Passando DADOS por PROPS */
export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      
      <div className='hover-bg'>
        {' '}
          
          <a href={largeImage} title={title} data-lightbox-gallery='portfolio'>

               <div className='hover-text'>
                    <h4>{title}</h4>
               </div>
               <img src={smallImage} className='img-responsive' alt={title} />{' '}
           </a>{' '}
     
      </div>
   </div> 
  )
};