import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../store/actions/authActions'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'

const Register: React.FC = () => {
  const auth = useSelector((state: any) => state.auth)

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'ชื่อจริงต้องมีความยาวในช่วง 2 - 50 ตัวอักษร')
      .max(50, 'ชื่อจริงต้องมีความยาวในช่วง 2 - 50 ตัวอักษร')
      .required('โปรดระบุชื่อจริง'),
    surname: Yup.string()
      .min(2, 'นามสกุลต้องมีความยาวในช่วง 2 - 50 ตัวอักษร')
      .max(50, 'นามสกุลต้องมีความยาวในช่วง 2 - 50 ตัวอักษร')
      .required('โปรดระบุชื่อจริง'),
    middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    birthDate: Yup.date().required('Birth'),
    idNumber: Yup.number().required('โปรดกรอกรหัสบัตรประชาชน'),
    phoneNumber: Yup.number().required('โปรดกรอกเบอร์โทรศัพท์'),
  })

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">สมัครสมาชิก</div>
        <Divider />
        <Formik
          initialValues={{
            name: '',
            surname: '',
            middleName: '',
            birthDate: '',
            idNumber: '',
            phoneNumber: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values)
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
                <ErrorMessage name="name" className="text-white" component="div" />
              </div>
              <div>
                <Field
                  name="middleName"
                  type="text"
                  placeholder="ชื่อกลาง (ถ้ามี)"
                  className="w-80 my-2 mx-6 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="middleName" className="text-white" component="div" />
              </div>
              <div>
                <Field
                  name="surname"
                  type="text"
                  placeholder="นามสกุล"
                  className="w-80 my-2 mx-6 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="surname" className="text-white" component="div" />
              </div>
              <div>
                <Field
                  name="birthDate"
                  type="text"
                  placeholder="วันเกิด"
                  className="my-2 mx-6 w-80 h-11 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                  onMouseEnter={(e: any) => (e.currentTarget.type = 'date')}
                  onBlur={(e: any) => (e.currentTarget.type = 'text')}
                />
                <ErrorMessage name="birthDate" className="text-white" component="div" />
              </div>
              <div>
                <Field
                  name="idNumber"
                  type="text"
                  placeholder="รหัสบัตรประชาชน"
                  className="my-2 mx-6 w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="idNumber" className="text-white" component="div" />
              </div>
              <div>
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="โทรศัพท์มือถือ"
                  className="my-2 mx-6 w-80 px-8 py-2 text-white text-lg font-semibold bg-purple-lightest rounded-full shadow placeholder-white outline-none focus:outline-none"
                />
                <ErrorMessage name="phoneNumber" className="text-white" component="div" />
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
