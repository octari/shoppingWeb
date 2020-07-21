import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreView = ({ title, items}) => (
    <div className = 'collection-preview'>
        <h1 className = 'tittle'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {items
                .filter((item, idx)=>idx <4)
                .map(({id, ...otherItermProps}) => (
                    <CollectionItem key= {id} {...otherItermProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreView;