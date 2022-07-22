export async function GET({params}) {

  return {
    status: 200,
    body: {
      id: 1,
      name: 'Random Number',
      number: Math.random() * 10
    }
  }
}
