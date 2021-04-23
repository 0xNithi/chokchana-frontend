import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useEthers, useContractFunction } from '@usedapp/core'

import { Interface } from '@ethersproject/abi'
import { Contract } from '@ethersproject/contracts'
import { formatUnits } from '@ethersproject/units'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'

import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const TicketCard: React.FC<Props> = ({ pool }) => {
  const { account, library } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const contract = new Contract(
    LotteryAddress,
    ChokchanaLotteryInterface,
    library?.getSigner(),
  )
  const { state, send } = useContractFunction(contract, 'buyTicket')

  const TicketSchema = Yup.object().shape({
    ticketNumber: Yup.number().required('โปรดกรอกเลขที่คุณต้องการ'),
  })

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <div className="text-2xl dark:text-purple-light">ค้นหาหมายเลขสลากของคุณ</div>
      <Divider />
      <div className="relative w-full">
        <Formik
          initialValues={{
            ticketNumber: '',
          }}
          validationSchema={TicketSchema}
          onSubmit={(values) => {
            send(values.ticketNumber)
          }}
        >
          {({ errors, touched }) => (
            <>
              <Form className="flex flex-col">
                <Field
                  name="ticketNumber"
                  type="text"
                  className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                >
                  ซื้อสลาก
                </button>
              </Form>
              <ErrorMessage name="ticketNumber" className="text-white" component="div" />
            </>
          )}
        </Formik>
      </div>
      <div className="w-full bg-gray-light dark:bg-purple font-semibold p-4 rounded-3xl">
        <div className="text-lg text-purple dark:text-purple-light text-center">เลขคล้าย</div>
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
