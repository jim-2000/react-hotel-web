
const AboutHotel = ({text}) => {
  return (
    <div className="flex flex-col items-start px-1  ">
        <h1 className="text-xl font-extrabold text-main my-5 "><span className="text-text">About</span> Hotel Lunar</h1>
        
        <p className="text-text font-body">
       {
       text ??  `
        Ladies and gentlemen, history keeps repeating itself  but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
        `
       }
        </p>
         
    </div>
  )
}

export default AboutHotel