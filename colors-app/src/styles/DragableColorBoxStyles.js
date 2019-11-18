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
    }
    },
    boxContent: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        padding: '10px',
        width: '100%',
        color: 'rgba(0, 0, 0, 0.5)',
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