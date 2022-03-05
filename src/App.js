import { useCallback, useEffect, useState } from 'react';
import './styles/styles.scss'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Certification from './components/Certification';
import Skill from './components/Skills';
import Footer from './components/Footer';
const App = () => {
    // 윈도우 창의 크기가 변경 되면 해당 창의 크기를 조절해 준다
    const [widthSize, setWidthSize] = useState(window.innerWidth); // 창의 가로 사이즈
    const [heightSize, setHeightSize] = useState(window.innerHeight);// 창의 세로 사이즈
    const handleSize = useCallback(() => {
      setWidthSize(window.innerWidth);
      setHeightSize(window.innerHeight);
    }, []);
    useEffect(() => {
      window.addEventListener("resize", handleSize);
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }, [handleSize]);
    useEffect(() =>{
      console.log(heightSize)
      console.log(widthSize)
    },[widthSize,heightSize])
    //=====================================================================================
  return (
    <div className='container'>
      <Header/>
      {/* <AboutMe height={heightSize}/>
      <Skill height={heightSize}/>
      <Certification height={heightSize}/>
      <Career height={heightSize}/>
      <Footer height={heightSize}/> */}
    </div>
  );
}

export default App;
