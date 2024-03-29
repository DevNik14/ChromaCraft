import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
    width: '20%',
    height: '25%',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '-4px',
    '&:hover svg': {
        color: '#fff',
        transform: 'scale(1.5)'
    },
    [sizes.down('lg')]: {
        width: '25%',
        height: '20%'
    },
    [sizes.down('md')]: {
        width: '50%',
        height: '10%'
    },
    [sizes.down('sm')]: {
        width: '100%',
        height: '5%'
    }
    },
    boxContent: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        padding: '10px',
        width: '100%',
        color: props => 
            chroma(props.color).luminance() <= 0.08 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(0, 0, 0, 0.6)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: 'all 0.2s ease-in-out'
    }
}

export default styles;