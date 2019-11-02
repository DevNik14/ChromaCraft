export default {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors: {
        height: '90%'
    },
    goBack: {
      height: '50%',
      width: '20%',
      cursor: 'pointer',
      position: 'relative',
      display: 'inline-block',
      margin: '0 auto',
      marginBottom: '-4px',
      backgroundColor: '#000',
      '& a': {
        color: '#fff', 
        position: 'absolute',
        width: '100px',
        height: '30px',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none'
      }
    }
  }