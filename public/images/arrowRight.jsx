import * as React from "react"
const ArrowRight = ({color='currentColor', ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 8h14M8 1l7 7-7 7"
    />
  </svg>
)
export default ArrowRight
