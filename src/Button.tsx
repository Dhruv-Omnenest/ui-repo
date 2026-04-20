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
      style={{
        padding: "10px 24px",
        cursor: "pointer",
        backgroundColor: "#007AFF",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "500",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </button>
  );
};
