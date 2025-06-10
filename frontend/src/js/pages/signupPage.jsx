import '../../css/signupPage.css'
import SignupForm from '../components/auth/signupForm.jsx'
import AuthSideImage from '../components/layout/authSideImage.jsx'

export default function SignupPage(){
    return(
        <div className="signupPage">
            <div className="signupFormContainer">
                <SignupForm/>
            </div>
            <aside>
                <AuthSideImage/>
            </aside>
        </div>
    )
}