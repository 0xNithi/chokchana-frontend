import React from 'react'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'

const Register: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">สมัครสมาชิก</div>
        <Divider />
        <input
          type="text"
          placeholder="ชื่อ - นามสกุล"
          className="w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
        />
        <input
          type="text"
          placeholder="วันเกิด"
          className="w-80 h-11 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
          onMouseEnter={(e) => (e.currentTarget.type = 'date')}
          onBlur={(e) => (e.currentTarget.type = 'text')}
        />
        <input
          type="text"
          placeholder="รหัสบัตรประชาชน"
          className="w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
        />
        <input
          type="text"
          placeholder="โทรศัพท์มือถือ"
          className="w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
        />
        <button className="btn text-white bg-cyan text-3xl px-36 py-4">ยืนยัน</button>
      </div>
    </Layout>
  )
}

export default Register
