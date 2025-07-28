const StatusOverlay = ({ isLoading, errorMessage }) => {
  const shouldShowOverlay = isLoading || !!errorMessage;

  if (!shouldShowOverlay) return null;

  return (
    <div className="status-overlay-container">
      {isLoading && <div className="spinner" />}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default StatusOverlay;
