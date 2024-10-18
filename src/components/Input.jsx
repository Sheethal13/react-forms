export default function Input({label,id,errorMsg, ...props}){
    return(
        <div className="control no-margin">
          <label htmlFor="email">{label}</label>
          <input id="email" {...props} />
          <div className="control-error">{errorMsg && <p>{errorMsg}</p>}</div>
        </div>
    )
}