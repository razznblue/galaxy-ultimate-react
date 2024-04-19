'use client'
import { useEffect, useState } from "react";
import Image from "next/image"

async function getCard(cardId: string) {
  if (cardId) {
    console.log(`set#= ${cardId}`);
    const res = await fetch(`/api/cards?id=${cardId}`);
    return res.json();
  }
}

export default function Card(req: any) {

  const [card, setCard] = useState({
    NAME: '',
    SET_NUMBER: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(req?.params?.cardId);
        const cardData = await getCard(req?.params?.cardId);
        console.log(cardData); // Verify that data is fetched correctly
        setCard(cardData);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    }
    fetchData();
  }, [req?.params?.cardId]);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#2b376e', padding: '3rem'}}>
      <h3 style={{alignSelf: 'center', padding: '2rem', fontSize: '3vw', fontWeight: 'bold'}}>{card?.NAME}</h3>
      <Image className='card-image' src={`/card_images/${card?.SET_NUMBER}.png`} alt={card.NAME} width={500} height={500} />
    </div>
  );
}
