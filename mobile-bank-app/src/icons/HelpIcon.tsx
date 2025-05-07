const HelpIcon = ({ active = false }: { active?: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17h2v2h-2v-2zm1-3c-0.55 0-1-0.45-1-1v-1c0-0.55 0.45-1 1-1s1-0.45 1-1-0.45-1-1-1-1 0.45-1 1H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.31-0.84 2.42-2 2.83V13c0 0.55-0.45 1-1 1z"
        fill={active ? '#B084FF' : '#AAAAAA'}
      />
    </svg>
  );
  
  export default HelpIcon;
  