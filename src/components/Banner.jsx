import PropTypes from  'prop-types';
import '../stylesheet/banner.css'


function Banner(props){
  const{titulo, subtitulo} = props
  return (
<>
      <div className="wrap">
          <div className="wrap-text">
              <h1>{titulo}</h1>
              <h2>{subtitulo}</h2>
          </div>
      </div>
</>
    )
  }

  Banner.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
  };

  export default Banner