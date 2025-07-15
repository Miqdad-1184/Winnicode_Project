import React from 'react'
import ButtonText from '../../components/button/buttonText'
import InputText from '../../components/input/inputText'
import StepIndicator from '../../components/random/stepIndicator.jsx'
import InputCode from '../../components/input/inputCode.jsx'
import { FaShieldAlt } from 'react-icons/fa'
import '../../../css/forgotAuth.css'

const Verification= ({email}) => {
  return (
    <div className='forgotPassword'>
        <div className="forgotForm">
            <div className='forgotLabel'>
                <h2>Lupa Sandi</h2>
                <StepIndicator currentStep={2}/>
            </div>
            <span><FaShieldAlt/></span>
            <label className='descriptionLabel'>Masukan kode verifikasi yang telah dikirim ke email anda</label>
            <label>{email='miqdad@gmail.com'}</label>
            <div className='inputContainer'>
                <InputCode/>
            </div>
            <button className="sendButton">Verifikasi code</button>
            <p>tidak menerima kode? <ButtonText label='Kirim ulang'/></p>
            <p><ButtonText link="/forgotpassword" label="Kembali ke halaman sebelumnya"/></p>
        </div>
    </div>
  )
}

export default Verification