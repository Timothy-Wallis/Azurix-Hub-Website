interface WarningProps{
    WarningMessage: string;
}
export default function Warning({ WarningMessage }: WarningProps) {
  return (
    <div className="warning">
      <p>{WarningMessage}</p>
    </div>
  );
}