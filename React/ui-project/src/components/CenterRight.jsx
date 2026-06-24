import React from 'react'
import Card from './Card'

const CenterRight = () => {
  return (
    <div className="w-3/4 flex gap-10">
      <Card
        img="https://images.unsplash.com/photo-1766246099181-2055091f8721?q=80&w=627&auto=format&fit=crop"
        numb={1}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        btnColor="bg-blue-600" btnText="Satisfied"
      />

      <Card
        img="https://images.unsplash.com/photo-1687500293279-4d410bbb4dfb?w=500&auto=format&fit=crop&q=60"
        numb={2}
        text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        btnColor="bg-cyan-600" btnText="Underserved"
      />

      <Card
        img="https://images.unsplash.com/photo-1709085599581-03e868266a56?w=500&auto=format&fit=crop&q=60"
        numb={3}
        text="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        btnColor="bg-red-600" btnText="Underbanked"
      />
    </div>
  )
}

export default CenterRight