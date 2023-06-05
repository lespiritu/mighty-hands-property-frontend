
import './App.css'
import {Hero, Navigation, Intro, Properties} from './components'


function App() {


  return (
    <>
      <Navigation/>
      <Hero title="Choose to live that provides your family the ultimate sanctuary" />
      <Intro textDetails="Et laboris mollit culpa et dolor cillum nostrud eu deserunt elit elit consectetur. Esse quis cupidatat dolore tempor esse. Elit Lorem aute do minim magna Lorem magna magna velit enim est deserunt."
        title="Land Property is a good investment"
       
      />
      <Properties />
      
      
      <div className='h-screen bg-red-800'>
        <h1>sample</h1>
        <p>Exercitation tempor laborum ex nostrud culpa Lorem esse quis commodo tempor ea anim nulla non. Est do ad veniam non enim enim eu do consectetur. Consequat sint pariatur eu nisi reprehenderit ex ut ea elit dolore sunt mollit fugiat cillum. Officia voluptate tempor ex esse. Commodo dolore cillum cillum velit qui nisi id id officia sint irure non pariatur qui.</p>
      </div>
    </>
  )
}

export default App
