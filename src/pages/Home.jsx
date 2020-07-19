import React from 'react'

import { Card } from '../components'

function Home({ items }) {
  return items.map((e, i) => (
    <Card key={`${e.name}__${e.id + i}`} name={e.name} imageUrl={e.imageUrl} />
  ))
}

export default Home
