import cardsData from '../../../data/card_list/card_list.json';

export async function GET(req: any) {
  try {
    if (req.method === 'GET') {
      if (req?.url && req?.url.includes("?id=")) {
        const setNumber = req.url.split("?id=")[1];
        console.log(`setNumber: ${setNumber}`);
        return Response.json(cardsData.find(card => card.SET_NUMBER.toString() === setNumber));
      }
      return Response.json(cardsData);
    }
  } catch(err) {
    return Response.error();
  }
}