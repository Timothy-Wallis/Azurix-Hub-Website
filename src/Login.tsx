import './login.css'
export default function Login(){
    return(
        <div>
        <div className='background'>
            <div className='shape'></div>
            <div className='shape'></div>
        </div>
        <form>
            <h3>Login</h3>

            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Email' id="username" autoComplete="username"/>

            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Password' id="password" autoComplete='current-password'/>

            <button>Log in</button>
            <div className='social'>
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div>        
        </form>
        </div>
    )
}