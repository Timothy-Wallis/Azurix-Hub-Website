import './signup.scss'
export default function SignUp() {
    return (
        <div className='sign-body'>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />

            <div className='sign-container'>
                <form>
                    <p>Welcome</p>
                    <input type="email" placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="button" value="Sign in" /><br />
                    <a href="">Forgot Password?</a>
                </form>

                <div className='drops'>
                    <div className="drop drop-1"></div>
                    <div className="drop drop-2"></div>
                    <div className="drop drop-3"></div>
                    <div className="drop drop-4"></div>
                    <div className="drop drop-5"></div>
                </div>
            </div>
        </div>
    )
}