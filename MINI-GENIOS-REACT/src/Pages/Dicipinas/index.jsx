import Navbar from '../../Components/Navbar';
import "../Dicipinas/style.css"

function Diciplinas() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1>Lingua Portuguesa</h1>
        </div>

        <form action="">
          <input type="text" className='search' placeholder='Digite aqui a materia de interesse' />
        </form>

      <section className='cardGroup'>

          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Diferença dos porques</p>
          </div>

          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Substantivo</p>
          </div>


          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Verbos</p>
          </div>

      </section>
    </main>
    </>
  );
}

export default Diciplinas;