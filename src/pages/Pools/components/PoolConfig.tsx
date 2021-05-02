import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useEthers, useContractCall, useContractFunction } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'

import { LotteryAddress, RandomGeneratorAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import RandomGeneratorABI from '../../../config/abis/RandomGenerator.json'
import Card from '../../../components/Card'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const ConfigPool: React.FC<Props> = ({ pool }) => {
  const { account, library } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)
  const RandomGeneratorInterface = new Interface(RandomGeneratorABI)

  /* Contract Function */
  const contract = new Contract(LotteryAddress, ChokchanaLotteryInterface, library?.getSigner())
  const randomGeneratorContract = new Contract(RandomGeneratorAddress, RandomGeneratorInterface, library?.getSigner())
  const setNextDrawContractFunction = useContractFunction(contract, 'setNextDraw')
  const setLockBeforeDrawContractFunction = useContractFunction(contract, 'setlockBeforeDraw')
  const setPrizeContractFunction = useContractFunction(contract, 'setRewardNumber')
  const summarizedRewardsFunction = useContractFunction(contract, 'summarizedRewards')

  const drawRewardsFunction = useContractFunction(randomGeneratorContract, 'drawRandomReward')

  /* state */
  const [nextDraw, setNextDraw] = useState('')
  const [lockBeforeDraw, setlockBeforeDraw] = useState('')

  const [firstPrize, setFirstPrize] = useState('')
  const [secondPrize, setSecondPrize] = useState('')
  const [thirdPrize, setThirdPrize] = useState('')

  /* handle button */
  const handleSetNextDraw = () => {
    setNextDrawContractFunction.send(nextDraw)
  }

  const handleSetlockBeforeDraw = () => {
    setLockBeforeDrawContractFunction.send(lockBeforeDraw)
  }

  const handleSummarizedReward = () => {
    summarizedRewardsFunction.send()
  }

  const handleRandomReward = () => {
    drawRewardsFunction.send()
  }

  const handleSetPrize = (rank: number) => () => {
    switch (rank) {
      case 1:
        setPrizeContractFunction.send(rank, firstPrize)
        break
      case 2:
        setPrizeContractFunction.send(rank, secondPrize)
        break
      case 3:
        setPrizeContractFunction.send(rank, thirdPrize)
        break
      default:
        break
    }
  }

  /* contract call */
  const curRound: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'getCurRound',
      args: [],
    },
  )

  const nextDrawTime: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'nextDraw',
      args: [],
    },
  )

  const lockBeforeDrawTime: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'lockBeforeDraw',
      args: [],
    },
  )

  const firstPrizeNumber: any = useContractCall(
    account &&
      curRound && {
        abi: ChokchanaLotteryInterface,
        address: LotteryAddress,
        method: 'getReward',
        args: [formatUnits(curRound[0], 0).replace('.0', ''), 1],
      },
  )

  const secondPrizeNumber: any = useContractCall(
    account &&
      curRound && {
        abi: ChokchanaLotteryInterface,
        address: LotteryAddress,
        method: 'getReward',
        args: [formatUnits(curRound[0], 0).replace('.0', ''), 2],
      },
  )

  const thirdPrizeNumber: any = useContractCall(
    account &&
      curRound && {
        abi: ChokchanaLotteryInterface,
        address: LotteryAddress,
        method: 'getReward',
        args: [formatUnits(curRound[0], 0).replace('.0', ''), 3],
      },
  )

  useEffect(() => {
    if (nextDrawTime) {
      setNextDraw(formatUnits(nextDrawTime[0], 0).replace('.0', ''))
    }
  }, [nextDrawTime])

  useEffect(() => {
    if (lockBeforeDrawTime) {
      setlockBeforeDraw(formatUnits(lockBeforeDrawTime[0], 0).replace('.0', ''))
    }
  }, [lockBeforeDrawTime])
  //////
  useEffect(() => {
    if (firstPrizeNumber) {
      setFirstPrize(formatUnits(firstPrizeNumber[0], 0).replace('.0', ''))
    }
  }, [firstPrizeNumber])

  useEffect(() => {
    if (secondPrizeNumber) {
      setSecondPrize(formatUnits(secondPrizeNumber[0], 0).replace('.0', ''))
    }
  }, [secondPrizeNumber])

  useEffect(() => {
    if (thirdPrizeNumber) {
      setThirdPrize(formatUnits(thirdPrizeNumber[0], 0).replace('.0', ''))
    }
  }, [thirdPrizeNumber])

  /* Form Validation Schema */
  const PrizeSchema = Yup.object().shape({
    firstPrize: Yup.number().min(0, 'โปรดระบุรางวัลในช่วง 0 - 9999').max(9999, 'โปรดระบุรางวัลในช่วง 0 - 9999'),
    secondPrize: Yup.number().min(0, 'โปรดระบุรางวัลในช่วง 0 - 9999').max(9999, 'โปรดระบุรางวัลในช่วง 0 - 9999'),
    thirdPrize: Yup.number().min(0, 'โปรดระบุรางวัลในช่วง 0 - 9999').max(9999, 'โปรดระบุรางวัลในช่วง 0 - 9999'),
  })

  const TimingSchema = Yup.object().shape({
    nextDraw: Yup.number().min(0, 'โปรดระบุเวลามากกว่า 0 วินาที'),
    lockBeforeDraw: Yup.number().min(0, 'โปรดระบุเวลามากกว่า 0 วินาที'),
  })

  return (
    <div className="grid grid-cols-12 gap-12">
      <Card className="col-span-12 md:col-span-5 flex flex-col px-12 py-8 space-y-6 items-center">
        <div className="text-2xl dark:text-purple-light">ตั้งค่ากองสลาก</div>
        <Divider />

        <Formik
          validateOnChange
          initialValues={{
            nextDraw,
            lockBeforeDraw,
          }}
          validationSchema={TimingSchema}
          onSubmit={() => {}} // Do Nothing
        >
          {({ errors, touched, handleChange }) => (
            <>
              <Form className="w-full">
                <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลางวดถัดไปออกรางวัล (วินาที)</div>
                <div className="relative">
                  <Field
                    type="number"
                    name="nextDraw"
                    value={nextDraw}
                    onChange={(e: any) => {
                      handleChange(e)
                      setNextDraw(e.target.value)
                    }}
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    onClick={handleSetNextDraw}
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    บันทึก
                  </button>
                  <ErrorMessage name="nextDraw" className="text-red-600" component="div" />
                </div>
              </Form>
              <div className="w-full">
                <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลาล็อกก่อนออกรางวัล (วินาที)</div>
                <div className="relative">
                  <Field
                    type="number"
                    name="lockBeforeDraw"
                    value={lockBeforeDraw}
                    onChange={(e: any) => {
                      handleChange(e)
                      setlockBeforeDraw(e.target.value)
                    }}
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    onClick={handleSetlockBeforeDraw}
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    บันทึก
                  </button>
                  <ErrorMessage name="lockBeforeDraw" className="text-red-600" component="div" />
                </div>
              </div>
            </>
          )}
        </Formik>
      </Card>
      <Card className="col-span-12 md:col-span-7 flex flex-col px-12 py-8 space-y-6 items-center">
        <div className="text-2xl dark:text-purple-light">กำหนดรางวัล</div>
        <Divider />
        <Formik
          validateOnChange
          initialValues={{
            firstPrize,
            secondPrize,
            thirdPrize,
          }}
          validationSchema={PrizeSchema}
          onSubmit={() => {}} // Do Nothing
        >
          {({ errors, touched, handleChange }) => (
            <>
              <Form className="w-full flex items-center justify-center space-x-4">
                <div className="text-3xl dark:text-purple-light">1#</div>
                <div className="relative">
                  <Field
                    type="number"
                    name="firstPrize"
                    value={firstPrize}
                    onChange={(e: any) => {
                      handleChange(e)
                      setFirstPrize(e.target.value)
                    }}
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    onClick={handleSetPrize(1)}
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    บันทึก
                  </button>
                  <ErrorMessage name="firstPrize" className="text-red-600" component="div" />
                </div>
              </Form>
              <div className="w-full flex items-center justify-center space-x-4">
                <div className="text-3xl dark:text-purple-light">2#</div>
                <div className="relative">
                  <Field
                    type="number"
                    name="secondPrize"
                    value={secondPrize}
                    onChange={(e: any) => {
                      handleChange(e)
                      setSecondPrize(e.target.value)
                    }}
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    onClick={handleSetPrize(2)}
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    บันทึก
                  </button>
                  <ErrorMessage name="secondPrize" className="text-red-600" component="div" />
                </div>
              </div>
              <div className="w-full flex items-center justify-center space-x-4">
                <div className="text-3xl dark:text-purple-light">3#</div>
                <div className="relative">
                  <Field
                    type="number"
                    name="thirdPrize"
                    value={thirdPrize}
                    onChange={(e: any) => {
                      handleChange(e)
                      setThirdPrize(e.target.value)
                    }}
                    className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
                  />
                  <button
                    onClick={handleSetPrize(3)}
                    className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
                  >
                    บันทึก
                  </button>
                  <ErrorMessage name="thirdPrize" className="text-red-600" component="div" />
                </div>
              </div>
              <Form className="w-full flex items-center justify-center space-x-4">
                <button
                  onClick={handleSummarizedReward}
                  className="btn py-2 px-6 text-white text-xl text-center bg-cyan"
                >
                  ออกรางวัล
                </button>
                <button
                  onClick={handleRandomReward}
                  className="btn py-2 px-6 text-white text-xl text-center bg-purple-light"
                >
                  ออกรางวัลอัตโนมัติ
                </button>
              </Form>
            </>
          )}
        </Formik>
      </Card>
    </div>
  )
}

export default ConfigPool
