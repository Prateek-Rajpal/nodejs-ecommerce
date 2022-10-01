import React from 'react'

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            {/* writing reviews star logic */}
            <span>
                {/* So the logic is if value of rating is >=1 then('?', this means then) we show full star icon(font awesome icon(fas fa-star)) 
        else(':', this means else) value of rating >=0.5 we show half star icon, else(:) we show empty star icon)
        */}
                <i style={{ color }}
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }>

                </i>
            </span>
            <span>
                {/* Similarly implementing logic for other ratings */}
                <i style={{ color }} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>{text && text}</span>
        </div>
    )
}

// defining color as default prop and providing yellow color code in it.
Rating.defaultProps = {
    color: '#f8e825'
}
export default Rating