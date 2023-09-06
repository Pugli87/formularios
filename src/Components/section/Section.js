import React from 'react'
import {SectionStyles} from '../styledComponents/SectionStyles';

function Section({children}) {
  return (
    <SectionStyles>{children}</SectionStyles>
  )
}

export default Section