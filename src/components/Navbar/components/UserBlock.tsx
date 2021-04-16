import React from 'react'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setItem } from '../../../store/actions/templateActions'
import useModal from '../../../hooks/useModal'
import LoginModal from './LoginModal'

const UserBlock: React.FC = () => {
  const { onPresentCallback } = useModal(LoginModal)
  const template = useSelector((state: any) => state.template)
  const dispatch = useDispatch()

  const provider = new firebase.auth.GoogleAuthProvider()
  const handleLoginWithGoogle = () => {
    dispatch(setItem('test'))
    console.log(template)
    // firebase.auth().signInWithPopup(provider);
  }

  return (
    <button
      className="px-4 py-1 text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple flex rounded-full focus:outline-none hover:opacity-75"
      aria-haspopup="true"
      onClick={onPresentCallback}
    >
      <span className="sr-only">Open user menu</span>
      {/* เข้าสู่ระบบ / ลงทะเบียน */}
      {template.text}
    </button>
  )
}

export default UserBlock
