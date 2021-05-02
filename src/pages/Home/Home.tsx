import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import BuyLottoryCard from './components/BuyLottoryCard'
import ResultLottoryCard from './components/ResultLottoryCard'
import MyLottoryCard from './components/MyLottoryCard'
import AccountCard from './components/AccountCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 md:col-span-8 flex flex-col space-y-8 px-12 py-8">
          <BuyLottoryCard />
          <ResultLottoryCard />
          <MyLottoryCard />
        </Card>
        <Card className="col-span-12 md:col-span-4 flex space-x-6 px-12 py-8 justify-center items-center">
          <AccountCard />
        </Card>
      </div>
    </Layout>
  )
}

export default Home
