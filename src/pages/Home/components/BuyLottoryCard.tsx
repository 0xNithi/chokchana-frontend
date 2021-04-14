import React from 'react'

const BuyLottoryCard: React.FC = () => {
  return (
    <div className="flex flex-auto p-8 dark:bg-purple rounded-3xl items-center space-x-8">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="max-h-24 max-w-24">
        <linearGradient id="linear-gradient">
          <stop offset={0} stopColor="#12bee5" />
          <stop offset=".5" stopColor="#c071e9" />
          <stop offset={1} stopColor="#f24f5a" />
        </linearGradient>
        <path
          d="m488 216h-17.578l-297.984-198.656a8 8 0 0 0 -11.133 2.278l-47.083 72a8 8 0 0 0 2.536 11.212 40 40 0 1 1 -42.173 67.975 8 8 0 0 0 -11.185 2.691l-25.082 42.5h-14.318a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8 40 40 0 0 1 0 80 8 8 0 0 0 -8 8v88a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-88a8 8 0 0 0 -8-8 40 40 0 0 1 0-80 8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8zm-414.709-27.778a56.01 56.01 0 0 0 58.519-94.263l38.468-58.825 67.859 45.239-12.793 19.189a8 8 0 1 0 13.312 8.876l12.793-19.19 190.129 126.752h-107.819l-73.459-46.75a8 8 0 0 0 -8.59 13.5l52.246 33.25h-247.056zm406.709 108.348a56.005 56.005 0 0 0 0 110.86v72.57h-80v-24a8 8 0 0 0 -16 0v24h-352v-72.57a56.005 56.005 0 0 0 0-110.86v-64.57h352v24a8 8 0 0 0 16 0v-24h80zm-80-8.57v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm0 56v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm0 56v24a8 8 0 0 1 -16 0v-24a8 8 0 0 1 16 0zm-64-136h-232a8 8 0 0 0 -8 8v104a8 8 0 0 0 8 8h232a8 8 0 0 0 8-8v-104a8 8 0 0 0 -8-8zm-8 104h-216v-88h216zm16 40a8 8 0 0 1 -8 8h-232a8 8 0 0 1 0-16h232a8 8 0 0 1 8 8zm0 32a8 8 0 0 1 -8 8h-232a8 8 0 0 1 0-16h232a8 8 0 0 1 8 8zm-121.344-307.562-16 24a8 8 0 1 1 -13.312-8.876l16-24a8 8 0 1 1 13.312 8.876zm-32 48-16 24a8 8 0 1 1 -13.312-8.876l16-24a8 8 0 0 1 13.312 8.876zm74.594-40.733a8 8 0 0 1 11.05-2.455l88 56a8 8 0 1 1 -8.59 13.5l-88-56a8 8 0 0 1 -2.46-11.045z"
          fill="url(#linear-gradient)"
        />
      </svg>
      <div className="text-3xl dark:text-white">ซื้อสลาก</div>
    </div>
  )
}

export default BuyLottoryCard
