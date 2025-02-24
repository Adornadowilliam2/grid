import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    { id: 1, name: "RED" },
    { id: 2, name: "BLUE" },
    { id: 3, name: "GREEN" },
    { id: 4, name: "YELLOW" },
    { id: 5, name: "ORANGE" },
    { id: 6, name: "PURPLE" },
    { id: 7, name: "PINK" },
    { id: 8, name: "ORANGERED" },
    { id: 9, name: "DARKGREEN" },
    {
      id:10,
      name:'BLACK'
    },
    {
      id:11,
      name:"GRAY"
    }
  ]

  const gridAreas = [
    "content1 content2 content2 content3",
    "content1 content2 content2 content4",
    "content5 content6 content7 content8",
    "content9 content9 content9 content9"
  ];

  return (
    <>
      <div id="grid" style={{ gridTemplateAreas: `"${gridAreas.join('" "')}"` }}>
        {data.map((item) => (
          <div className={`content${item.id}`} key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
