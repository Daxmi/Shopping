import React from 'react'

export default function Button(props) {
    const {label} = props
    return (
        <div className="headersList">
            {label}
        </div>
    )
}
