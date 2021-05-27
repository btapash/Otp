import React from 'react';
import OTP from './components/Otp/Otp';
import './App.css';


const App = () => {
    return (
        <>
            <OTP
                autoFocus
                isNumberInput
                length={6}
                className="otpContainer"
                inputClassName="otpInput"
                onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
            />            
        </>
    )
}

export default App
