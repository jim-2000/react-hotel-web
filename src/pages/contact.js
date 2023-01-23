import HeroSection from '../components/common/Hero'
import ContactForm from '../components/contact/contactForm'
import ContactInfo from '../components/contact/contactInfo'

const Contact = () => {
    return (
      <div className="">
      
        <HeroSection 
        Title={'Contact Us '}  
        subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci magna non enim fames et sed. '}
        imgcls={'https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'}
        />

        
        <div className='container py-5 px-4'>
            <h1 className='text-center section-title'>JUST<span>PING US</span></h1>
            <p className="text-center text-text font-body font-bold text-base">we would like to hear from you</p>
            <div className="flex flex-col items-center  md:flex-row md:justify-between py-5 space-y-3 md:space-y-0">
              <div className='w-full px-2 md:w-1/2'>
                <ContactForm />
              </div>
              <div className="flex flex-col items-start justify-between p-4  w-full md:w-1/2">
                <div className=" w-full ">
                  <p className="text-text font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci magna non enim fames et sed.</p>
                </div>               
                <div className="w-full">
                  <img className="w-[100%] h-[200px] md:h-[240px] object-cover hover:opacity-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 mb-2" src="https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="image description" />               
                </div>
              </div>
            </div>
        </div>
        <div className="container py-5 min-h-max">   
          <ContactInfo />       
        </div>        

      </div>
    )
  }
  
  export default Contact