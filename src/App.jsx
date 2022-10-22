
import './App.css'
import quotes from './quotes.json'
import Author from './components/Author';
import ContentQuotes from './components/ContentQuotes';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const indexArrQuotes = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(indexArrQuotes)

  const activeBtn = () => {
    const indexRandonBtn = Math.floor(Math.random() * quotes.length);
    setIndex(indexRandonBtn)
  }

  const boxColor = [
          "yellow",
          "#845ec2",
          "pink",
          "blueviolet",
          "#d65db1",
          "#ff6f91", 
          "#ff9671",
          "#ff9671", 
          "#ffc75f",
          "#5ec2ff",
          "#59f4bc",
          "#f9f871", 
          "#a62e71", 
          "#976fc2",
          "red",
          "green",
          "orange",
          "blue",
          "#602139",
          "#6e7e28",
          "#a59d92"
 ]

  let indexColor = Math.floor(Math.random() * boxColor.length)
  const colores = document.body.style = `background: ${boxColor[indexColor]}`;

  return (
    <>
    <div className="App">
            <ContentQuotes quotes ={quotes[index].quote} colorH1 ={boxColor[indexColor]}/>
            <Author authorContent={quotes[index].author} colorP ={boxColor[indexColor]}/>
            <Button btn = {activeBtn} color ={boxColor[indexColor]} />
        </div>
    </>
  )
}

export default App
