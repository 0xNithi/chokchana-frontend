import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useEthers, useContractFunction, useTokenAllowance } from '@usedapp/core'
import { BigNumber } from 'ethers'
import { Interface } from '@ethersproject/abi'
import { Contract } from '@ethersproject/contracts'

import { LotteryAddress, THBTokenAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import THBTokenABI from '../../../config/abis/THBToken.json'

import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const TicketCard: React.FC<Props> = ({ pool }) => {
  const { account, library } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)
  const THBTokenInterface = new Interface(THBTokenABI)

  const contract = new Contract(LotteryAddress, ChokchanaLotteryInterface, library?.getSigner())
  const buyTicketContractFunction = useContractFunction(contract, 'buyTicket')

  const allowance = useTokenAllowance(THBTokenAddress, account, LotteryAddress)
  const tokenContract = new Contract(THBTokenAddress, THBTokenInterface, library?.getSigner())
  const approveContractFunction = useContractFunction(tokenContract, 'approve')

  const [ticketNumber, setTicketNumber] = useState<any>()

  const handleApprove = () => {
    approveContractFunction.send(LotteryAddress, BigNumber.from('1000000000000000000000000000000000000000000000000000'))
  }

  const handleLuckyNumber = () => {
    setTicketNumber(Math.floor(Math.random() * 10000))
  }

  const TicketSchema = Yup.object().shape({
    ticketNumber: Yup.number()
      .required('โปรดกรอกเลขที่คุณต้องการ')
      .min(0, 'โปรดระบุรางวัลในช่วง 0 - 9999')
      .max(9999, 'โปรดระบุรางวัลในช่วง 0 - 9999'),
  })

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <div className="text-2xl dark:text-purple-light">ค้นหาหมายเลขสลากของคุณ</div>
      <Divider />
      <div className="relative w-full">
        {allowance && !allowance.isZero() && (
          <Formik
            initialValues={{
              ticketNumber: '',
            }}
            validationSchema={TicketSchema}
            onSubmit={(values) => {
              if (allowance && !allowance.isZero()) {
                buyTicketContractFunction.send(values.ticketNumber)
              } else {
                console.log('Allow!')
              }
            }}
          >
            {({ errors, touched, handleChange }) => (
              <>
                <Form className="flex flex-col">
                  <Field
                    name="ticketNumber"
                    value={ticketNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e)
                      setTicketNumber(+e.target.value)
                    }}
                    type="number"
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    {'ซื้อสลาก'}
                  </button>
                </Form>
                <ErrorMessage name="ticketNumber" className="text-red-500" component="div" />
              </>
            )}
          </Formik>
        )}

        {allowance && allowance.isZero() && (
          <button
            type="submit"
            className="btn inset-y-0 right-0	py-2 w-full text-white text-base text-center bg-cyan"
            onClick={handleApprove}
          >
            {'Approve'}
          </button>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center font-semibold p-4 rounded-3xl">
        <button onClick={handleLuckyNumber}>
          <img src={`/images/random-number.png`} alt={'สุ่มเลข'} className="w-32" />
          <p className="text-xl dark:text-purple-light">สุ่มเลขเด็ด!</p>
        </button>
      </div>
    </div>
  )
}

export default TicketCard
