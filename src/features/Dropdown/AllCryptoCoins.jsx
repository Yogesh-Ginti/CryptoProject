import {useSelector} from 'react-redux'

function AllCryptoCoins() {
  const { cryptocurrencies } = useSelector((state) => state.cryptocurrencies);
  return (
    <>
      <select name="" id="">
      {cryptocurrencies.map(item=>
        <option key={item.id}>{item.name}</option>
      )}
      </select>

      
    </>
  )
}

export default AllCryptoCoins
