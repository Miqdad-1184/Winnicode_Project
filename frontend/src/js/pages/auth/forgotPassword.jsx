import React from 'react'
import ButtonText from '../../components/button/buttonText.jsx'
import InputText from '../../components/input/inputText.jsx'
import StepIndicator from '../../components/random/stepIndicator.jsx'
import '../../../css/forgotAuth.css'
import { FaEnvelope } from 'react-icons/fa'

const ForgotPassword = () => {
  return (
    <div className='forgotPassword'>
        <div className="forgotForm">
            <div className='forgotLabel'>
                <h2>Lupa Sandi</h2>
                <StepIndicator currentStep={1}/>
            </div>
            <span><FaEnvelope/></span>
            <label className='descriptionLabel'>Masukan alamat email anda untuk menerima kode verifikasi</label>
            <div className='inputContainer'>
                <label>Email</label>
                <InputText
                placeholder="Masukan email"/>
            </div>
            <button className="sendButton">Kirim kode verifikasi</button>
            <p><ButtonText link="/login" label="Kembali ke halaman masuk"/></p>
        </div>
    </div>
  )
}

export default ForgotPassword