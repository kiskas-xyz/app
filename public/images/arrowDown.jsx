import * as React from "react"
const ArrowDown = ({ color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={6}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 1 5 5l4.5-4"
    />
  </svg>
)
export default ArrowDown
