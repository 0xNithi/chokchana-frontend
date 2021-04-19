import { Pools } from './types'

const pools: Pools[] = [
  {
    id: 1,
    name: 'สลากกินแบ่งรัฐบาล',
    risk: 1,
    contractAddress: '',
    internalLottory: false,
  },
  {
    id: 2,
    name: 'สลากโชคชนะ 5 หลัก',
    risk: 0.75,
    contractAddress: '',
    internalLottory: true,
  },
]

export default pools
