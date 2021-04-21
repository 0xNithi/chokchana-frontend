import React from 'react'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import Card from '../../components/Card'

const Info: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">ข้อมูลธุรกรรม</div>
        <Divider />
        <Card className="w-full px-12 py-8">
          <table className="table-auto w-full text-center font-semibold">
            <thead className="text-xl text-purple-lightest">
              <tr className="border-b-2 h-16">
                <th>จาก</th>
                <th>ถึง</th>
                <th>จำนวน</th>
                <th>เวลา</th>
              </tr>
            </thead>
            <tbody className="text-lg dark:text-white">
              <tr className="h-24">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </Layout>
  )
}

export default Info
