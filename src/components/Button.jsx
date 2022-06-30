export default function Button ({children, disabled=false, onClick, className="btn btn-primary"}) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>{children}</button>
  )
}