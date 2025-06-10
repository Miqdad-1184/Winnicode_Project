import '../../../css/auth.css'
import InputText from '../input/inputText';
import ButtonText from '../button/buttonText'

export default function LoginForm() {
    return (
        <div className="loginForm">
            <h1>Masuk</h1>
            <div className='email'>
                <label>Email</label>
                <InputText
                placeholder="Masukan email"/>
            </div>
            <div className="password">
                <div className='passwordLabel'>
                    <label>Password</label>
                    <ButtonText
                    link="/news"
                    label="lupa password?"/>
                </div>
                <InputText
                placeholder="Masukan password"/>
            </div>
            <button className="loginButton">Masuk</button>
            <button className='googleButton'>Masuk Menggunakan Google</button>
            <p>Tidak punya akun? <ButtonText link="/signup" label="Daftar"/></p>
        </div>
    );
}