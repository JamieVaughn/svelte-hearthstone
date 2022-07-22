export async function GET({params}) {

  return {
    status: 200,
    body: {
      id: params.id,
      name: 'Random Number * id',
      number: Math.random() * params.id
    }
  }
}
