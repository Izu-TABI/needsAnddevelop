import React, { useEffect, useState } from 'react'

const DetailPage = (props) => {
  return (
    <>
      {
        props.detailState ? (
          <div>
            {props.detailState.name}
          </div>
        ) : (
          ""
        )
      }

    </>
  )
}

export default DetailPage
