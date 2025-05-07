const PaymentsIcon = ({ active = false }: { active?: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v3H2V6c0-1.1.9-2 2-2zm16 5v9c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9h16zM6 14h4v2H6v-2z"
        fill={active ? '#B084FF' : '#AAAAAA'}
      />
    </svg>
  );
  
  export default PaymentsIcon;
  