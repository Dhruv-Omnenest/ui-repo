export const OmneNestButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", cursor: "pointer" }}
    >
      {children}
    </button>
  );
};
