type Pools = {
  name: string
  contractAddress: string
  internalLottory: boolean
}

const pools: Pools[] = [
  {
    name: 'สลากกินแบ่งรัฐบาล',
    contractAddress: '',
    internalLottory: false,
  },
  {
    name: 'สลากโชคชนะ 5 หลัก',
    contractAddress: '',
    internalLottory: true,
  },
]

export default pools
