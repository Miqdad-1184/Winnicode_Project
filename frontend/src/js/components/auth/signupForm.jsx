import '../../../css/auth.css';
import InputText from '../input/inputText';
import ButtonText from '../button/buttonText';

export default function  SignupForm(){
    return(
        <div className="signupForm">
            <h1>Daftar</h1>
            <div className='nama'>
                <label>Nama</label>
                <InputText
                placeholder="Masukan nama"/>
            </div>
            <div className='email'>
                <label>Email</label>
                <InputText
                placeholder="Masukan email"/>
            </div>
            <div className="password">
                <div className='passwordLabel'>
                    <label>Password</label>
                </div>
                <InputText
                placeholder="Masukan password"/>
            </div>
            <button className="loginButton">Daftar</button>
            <button className='googleButton'>Masuk Menggunakan Google</button>
            <p>Sudah punya akun? <ButtonText link="/login" label="Masuk"/></p>
        </div>
    );
}