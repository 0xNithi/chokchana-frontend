import React from 'react'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import Card from '../../components/Card'

const MyLottery: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">สลากของฉัน</div>
        <Divider />
        <Card className="w-full px-12 py-8">
          <table className="table-auto w-full text-center font-semibold">
            <thead className="text-xl text-purple-lightest">
              <tr className="border-b-2 h-16">
                <th>เวลา</th>
                <th>กองสลาก</th>
                <th>เลขของคุณ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody className="text-lg dark:text-white">
              <tr className="h-24">
                <td>16 มกราคม 2021 14:00</td>
                <td>
                  <div className="flex justify-center items-center space-x-4">
                    <img src="/images/external-lottery.png" alt="external-lottery" className="w-16" />
                    <div>สลากกินแบ่งรัฐบาล</div>
                  </div>
                </td>
                <td>
                  <div className="bg-orange text-gray-darkest text-3xl tracking-widest rounded-xl py-2 mx-4">
                    100000
                  </div>
                </td>
                <td>
                  <button className="btn bg-cyan text-gray-lightest text-xl px-8 py-3 mx-auto">แลกรางวัล</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </Layout>
  )
}

export default MyLottery
