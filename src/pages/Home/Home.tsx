import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-9 row-span-2">Home</Card>
        <Card className="col-span-3">Home</Card>
        <Card className="col-span-3">Home</Card>
      </div>
    </Layout>
  )
}

export default Home
