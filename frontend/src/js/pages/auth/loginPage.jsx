import '../../../css/loginPage.css';
import AuthSideImage from '../../components/layout/authSideImage.jsx';
import LoginForm from '../../components/auth/loginForm.jsx';

export default function LoginPage() {
    return(
        <div className="loginPage">
            <aside>
                <AuthSideImage/>
            </aside>
            <div className="loginFormContainer">
                <LoginForm/>
            </div>
        </div>
    );
}