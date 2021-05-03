import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { setUserProfile } from '../../store/actions/authActions'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'

const Register: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector((state: any) => state.auth)

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'ชื่อจริงต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .max(50, 'ชื่อจริงต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .matches(/^[ก-๙]+$/, 'ชื่อจริงต้องเป็นภาษาไทยเท่านั้น')
      .required('โปรดระบุชื่อจริง'),
    surname: Yup.string()
      .min(2, 'นามสกุลต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .max(50, 'นามสกุลต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .matches(/^[ก-๙]+$/, 'นามสกุลต้องเป็นภาษาไทยเท่านั้น')
      .required('โปรดระบุชื่อจริง'),
    middleName: Yup.string()
      .min(2, 'ชื่อกลางต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .max(50, 'ชื่อกลางต้องมีความยาวในช่วง 2 - 50 ตัวอักษรเท่านั้น')
      .matches(/^[ก-๙]+$/, 'ชื่อกลางต้องเป็นภาษาไทยเท่านั้น'),
    birthDate: Yup.date()
      .required('โปรดระบุวันเกิด')
      .test('age', 'อายุต้องอยู่ในช่วง 18 ปีบริบูรณ์ เเละไม่เกิน 120 ปีเท่านั้น', (birthdate: any) => {
        const cutoff18 = new Date()
        const cutoff120 = new Date()
        cutoff18.setFullYear(cutoff18.getFullYear() - 18)
        cutoff120.setFullYear(cutoff120.getFullYear() - 121)
        return birthdate >= cutoff120 && birthdate <= cutoff18
      }),
    idNumber: Yup.number()
      .required('โปรดกรอกรหัสบัตรประชาชน')
      .min(1000000000000, 'โปรดกรอกรหัสบัตรประชาชน 13 หลัก')
      .max(9999999999999, 'โปรดกรอกรหัสบัตรประชาชน 13 หลัก'),
    phoneNumber: Yup.string()
      .min(10, 'เบอร์โทรศัพท์มือถือต้องมีความยาว 10 ตัวเท่านั้น')
      .max(10, 'เบอร์โทรศัพท์มือถือต้องมีความยาว 10 ตัวเท่านั้น')
      .matches(/^(06|08|09)[0-9]+$/, 'เบอร์โทรศัพท์มือถือต้องขึ้นต้นด้วย 06, 08, 09 เท่านั้น')
      .required('โปรดกรอกเบอร์โทรศัพท์'),
  })

  if (!auth) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">{'เพิ่ม/แก้ไข ข้อมูลสมาชิก'}</div>
        <Divider />
        <Formik
          validateOnChange
          initialValues={{
            name: auth.name || '',
            surname: auth.surname || '',
            middleName: auth.middleName || '',
            birthDate: auth.birthDate || '',
            idNumber: auth.idNumber || '',
            phoneNumber: auth.phoneNumber || '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log('values', values)
            dispatch(setUserProfile(history, values))
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col">
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="ชื่อ"
                  className="w-80 my-2 mx-6 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                {/* TODO: style this! */}
                <ErrorMessage name="name" className="text-red-600" component="div" />
              </div>
              <div>
                <Field
                  name="middleName"
                  type="text"
                  placeholder="ชื่อกลาง (ถ้ามี)"
                  className="w-80 my-2 mx-6 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="middleName" className="text-red-600" component="div" />
              </div>
              <div>
                <Field
                  name="surname"
                  type="text"
                  placeholder="นามสกุล"
                  className="w-80 my-2 mx-6 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="surname" className="text-red-600" component="div" />
              </div>
              <div>
                <Field
                  name="birthDate"
                  type="date"
                  className="my-2 mx-6 w-80 h-11 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="birthDate" className="text-red-600" component="div" />
              </div>
              <div>
                <Field
                  name="idNumber"
                  type="text"
                  placeholder="รหัสบัตรประชาชน"
                  className="my-2 mx-6 w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="idNumber" className="text-red-600" component="div" />
              </div>
              <div>
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="โทรศัพท์มือถือ"
                  className="my-2 mx-6 w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="phoneNumber" className="text-red-600" component="div" />
              </div>
              <button type="submit" className="btn text-white bg-cyan text-3xl px-36 py-4">
                ยืนยัน
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Register
