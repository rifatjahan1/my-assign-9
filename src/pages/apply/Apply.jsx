import React, { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../../utils';
import MyApply from '../my-apply/MyApply';
import Empty from '../empty/Empty';

const Apply = () => {
        const [displayApply, setDisplayApply] = useState([])
    useEffect(() => {
        const favorites = getFavorites()
        setDisplayApply(favorites)
    }, [])

    const handleRemove = id => {
        removeFavorite(id)
        const favorites = getFavorites()
        setDisplayApply(favorites)
    }
    if (displayApply.length < 1) {
        return <Empty></Empty>
    }
    return (
        <div>
            <div>
                {displayApply.map(item => (
                <MyApply key={item.id}
                    item={item} handleRemove={handleRemove}></MyApply>
                ))}
            </div>
                        
        
            
        </div>
    );
};

export default Apply;