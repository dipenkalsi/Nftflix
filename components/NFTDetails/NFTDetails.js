import {GrTextAlignLeft} from 'react-icons/gr';
import {BsFillBookmarkFill} from 'react-icons/bs';
import Dropdown from './Dropdown.js'
const style={
  wrapper:`flex flex-col divide-y rounded-lg overflow-hidden border mx-2 mb-10`,
  icon:'h-5 w-5 text-gray-600'
  
}
const NFTDetails=()=>{
  const randomRank=Math.floor(Math.random() * (3125 - 1024 + 1) + 1024);

  const dropdownData=[
    {
      title:'Description',
      icon:<GrTextAlignLeft className={style.icon}/>,
      data:`By 
      nekonation. 
      Neko Nation is a world of feels, laughter, and tears that soothe the spirit of those disheartened and exhausted from dealing with the sharp edges of reality.
      
      Founded by Rociel and her Catbinet, Zenavi, Vissch, Roost, and Wayne. The team consists of industry artists who have worked with brands like MasterCard, McDonald’s, Samsung, and IPs such as Wonder Woman, Street Fighter, and Pokemon.
      
      9 legendary artists - Seerlight, Kaejunni, Nik, Jarvinart, Shavonne Wong, Ronald Ong, Kumo, Rynja, and Rociel have each created a unique 1/1 Bakeneko.
      
      These rare legendaries express each artist’s individual style. They are fully animated with music composed by Varien, a musician who’s repertoire includes John Wick 3, Overwatch, Doki Doki Literature Club, and The Walking Dead.
      
      We are home to Catizens, Nekosinners, Nekomancers, and Bakenekos. Every citizen with their own unique personality.`,
      type:""
    },
  ]
  return(
    <>
    <div className={style.wrapper}>
      {dropdownData.map((item,index)=>(
      <Dropdown title={item.title} key={index} icon={item.icon} data={item.data} type={item.type}/>
      ))}
    </div>
    <div className="mt-0 text-center flex items-center justify-between mx-2 mb-10">
      <h2 className="text-3xl text-indigo-500">Rarity Rank</h2>
      <div className="text-teal-400">#{randomRank}/3125</div>
    </div>
    </>
  )
}
export default NFTDetails