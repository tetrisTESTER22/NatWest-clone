const BankAccountCircleIcon = ({ color = '#B084FF' }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Точки */}
    <circle cx="12" cy="4" r="1" fill={color} />
    <circle cx="5" cy="17" r="1" fill={color} />
    <circle cx="19" cy="17" r="1" fill={color} />

    {/* Дуги между ними */}
    <path d="M12 5 C8 7, 5 12, 5 16" stroke={color} fill="none" />
    <path d="M19 16 C19 12, 16 7, 12 5" stroke={color} fill="none" />
    <path d="M5 16 C10 21, 14 21, 19 16" stroke={color} fill="none" />
  </svg>
);

export default BankAccountCircleIcon;
