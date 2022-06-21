import React from 'react';
import ItemCounter from './ItemCount';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
    const addToCart = (num) => {
        console.log(`Seleccionaste ${ num } productos`);
    }
    return (
        <div className="text-center">
            <h1 className="text-lg">{ greeting }</h1>
            <div style={styles.counterContainer}>
                <ItemCounter stock="5" onAdd={ addToCart } />
            </div>
        </div>
    );
}

const styles = {
    counterContainer: {
        width: '25rem',
        margin: '3rem auto'
    },
}

export default ItemListContainer;