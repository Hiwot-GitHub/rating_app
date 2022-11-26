import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SmallStar from './components/SmallStar'
import ThankYou from './components/ThankYou'
const Home: NextPage = () => {
  function clickHandler () {
    return <div><ThankYou /></div>
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center  bg-VeryDarkBlue">

          <div className="flex-col flex-wrap w-96 shodow rounded-2xl  bg-DarkBlue">
           
            <div className='mt-4 ml-5'>
              <button className='bg-MediumGray py-2 px-2 rounded-full'><SmallStar/></button></div>
            <h1 className="font-bold text-White mt-6 ml-5 align-self-left ">How did we do?</h1>
            <p className="font-overpass text-LightGray 15px mt-4 ml-5 mr-2 left-0">
              Please let us know how we did with your support
              request. All feedback is appreciated to help us improve our offering!
               
            </p>
            <div className="flex-col ">
              <div className="flex ml-5 mr-10 mt-4 mb-4 justify-between">
                
                <button className="bg-MediumGray focus:bg-White hover:bg-LightGray text-LightGray border-solid-VeryDarkBlue py-2 px-4 rounded-full">1</button>
                <button className="bg-MediumGray focus:bg-White hover:bg-LightGray text-LightGray  py-2 px-4 rounded-full ">2</button>
                <button className="bg-MediumGray focus:bg-White hover:bg-LightGray text-LightGray  py-2 px-4 rounded-full">3</button>
                <button className="bg-MediumGray focus:bg-White hover:bg-LightGray  text-LightGray font-weight-700 py-2 px-4 rounded-full">4</button>
                <button className="bg-MediumGray focus:bg-White  hover:bg-LightGray text-LightGray py-2 px-4 rounded-full ">5</button>
              </div>
              <button className="bg-Orange hover:bg-LightOrange  ml-5 mb-4  py-1 px-32 rounded-3xl text-White onClick={() => {return <div><ThankYou /></div> }}">SUBMIT</button>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
