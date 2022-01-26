import React from 'react'
import { LoadingContainer } from "./productListingStyledComponent";
function LoadingError(props) {
    const {error} = props
    return (
        <LoadingContainer>
      {`Error! ${error.message}`}
    </LoadingContainer>
    )
}

export default LoadingError
