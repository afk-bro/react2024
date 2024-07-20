import React from 'react'

const PillButton = ( {children} ) => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                { children }
            </button>
        </div>
    )
}

export default PillButton
