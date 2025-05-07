const DotsIcon = ({ color = '#B084FF' }: { color?: string }) => (
    <svg
      width="40"
      height="30"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  )
  
  export default DotsIcon;
  