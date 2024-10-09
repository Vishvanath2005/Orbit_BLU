import React from 'react'

const HeaderButton = ({title,
    hasCreatePermission,
    onClick,}) => {
  return (
    <div className="flex flex-row gap-1 justify-between items-center my-2 mx-8 flex-wrap">
      {hasCreatePermission && (
        <button
          className="flex flex-row gap-2 font-lexend items-center border-2 bg-orange text-white rounded-lg font-Source_Sans_Pro font-normal py-2 px-3 justify-between mb-2 md:text-base text-sm"
          onClick={onClick}
        >
           Add {title}
        </button>
      )}
    </div>
  )
}

export default HeaderButton
