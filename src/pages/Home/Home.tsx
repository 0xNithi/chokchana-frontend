import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import BuyLottoryCard from './components/BuyLottoryCard'
import ResultLottoryCard from './components/ResultLottoryCard'
import MyLottoryCard from './components/MyLottoryCard'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-6 row-span-2 flex flex-col space-y-8 px-12 py-8">
          <BuyLottoryCard />
          <ResultLottoryCard />
          <MyLottoryCard />
        </Card>
        <Card className="col-span-6">Home</Card>
        <Card className="col-span-6">Home</Card>
      </div>
    </Layout>
  )
}

export default Home
