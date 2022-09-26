import React, {forwardRef} from 'react'

const ForwardRef = (props, ref) => {
  return (
    <div>
     <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(ForwardRef)
