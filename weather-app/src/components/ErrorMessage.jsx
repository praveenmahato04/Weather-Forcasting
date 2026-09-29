export default function ErrorMessage({ message }) {
  return (
    <div className="error" role="alert">
      <strong>Couldn't load the weather.</strong>
      <p>{message}</p>
    </div>
  );
}
