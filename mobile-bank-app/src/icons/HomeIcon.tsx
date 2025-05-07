const HomeIcon = ({ active = false }: { active?: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? '#B084FF' : '#AAAAAA'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z" />
    </svg>
  );
  
  export default HomeIcon;
  