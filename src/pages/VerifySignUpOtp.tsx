import { useEffect } from 'react'
import VerifyOtp from '../components/VerifyOtp/VerifyOtp'
import useApi from '../Hooks/useApi'
import { getToken, storeToken } from '../utils/storage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { UiACtion } from '../store/uiSlice'
import { useNavigate } from 'react-router-dom'

function VerifySignUpOtp() {

  const token = getToken('otpToken')

  const navigate = useNavigate()

  const { sendRequest, resData, clearData, loading } = useApi({
    method: 'POST',
    headers: {
      OTP: token
    },
    endpoint: '/register/verify/otp'
  }, {})
  const dispatch = useDispatch()
  const { errorMessage } = useSelector((state: RootState) => state.ui)

  const handleVerifyOtp = (otp: string) => {
    console.log('value', otp)
    sendRequest({ otp })
  }

  useEffect(() => {
    if (resData) {
      if (resData.token) {
        storeToken('authToken', resData?.token)
      }
      dispatch(UiACtion.showSuccess(resData.message));
    }
  }, [resData, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      dispatch(UiACtion.showError(errorMessage));
    }
  }, [errorMessage, dispatch]);

  // useEffect(() => {
  //   if (resData) {
  //     if (resData?.data?.role_id === 1) {
  //       navigate('/patient/dashboard')
  //     } else {
  //       navigate('/doctor/dashboard')
  //     }
  //   }
  // }, [navigate, resData])

  return (
    <VerifyOtp context='register' onSubmit={handleVerifyOtp} loading={loading} clearData={clearData} />
  )
}

export default VerifySignUpOtp