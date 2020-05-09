import React from "react";

const styles = {
    page: {
        width: '1200px',
        height: '90vh',
        boxShadow: '7px 9px 32px -9px rgba(0,0,0,0.75)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 20,
        boxSizing: 'border-box'
    }
}

export default ({children}) => (
    <div style={styles.page}>
        {children}
    </div>
)