import Image from "next/image"
import cards from '../../data/card_list/card_list.json';
import './styles/index.css';
import Link from "next/link";

export default function Cards() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', background: '#2b376e', padding: '3rem'}}>
      <h3 style={{alignSelf: 'center', padding: '2rem', fontSize: '3vw', fontWeight: 'bold'}}>Galaxy Ultimate - That&apos;s No Moon!</h3>
      <div className='cards-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        {cards.map((card, index) => (
          <Link href={`/cards/${card.SET_NUMBER}`} key={index} style={{ width: '15%', minWidth: '150px', textAlign: 'center', marginBottom: '15px' }}>
            <div className='card'>
              <Image className='card-image' src={`/card_images/${card.SET_NUMBER}.png`} alt={card.NAME} width={200} height={200} style={{ objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


// export default function Cards() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', background: '#2b376e', padding: '3rem' }}>
//       {cards.map((card, index) => (
//         <div key={index} style={{ width: '5vw', textAlign: 'center' }}>
//           {/* <h2>{card.NAME}</h2> */}
//           <Image src={`/card_images/${card.SET_NUMBER}.png`} alt={card.NAME} width={100} height={100} style={{ maxWidth: '100%', height: 'auto' }} />
//           {/* <p>Set Number: {card.SET_NUMBER}</p>
//           <p>Cost: {card.COST}</p>
//           <p>Stars: {card.STARS}</p>
//           <p>Power: {card.POWER}</p>
//           <p>Defense: {card.DEFENSE}</p>
//           <p>Type: {card.TYPE}</p>
//           <p>Keywords: {card.KEYWORDS}</p>
//           <p>Rarity: {card.RARITY}</p>
//           <p>Ability: {card.ABILITY}</p>
//           <p>Special Ability: {card.SPECIAL_ABILITY}</p> */}
//         </div>
//       ))}
//     </div>
//   )
// }