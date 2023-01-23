import React from 'react'
import { useBooking } from '../../context/DataContex';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const BookingPayment = () => {
    const { booking, setBooking } = useBooking()
 
    const MySwal = withReactContent(Swal);
    const priceForStripe = booking.totalAmount * 100;
    const handleSuccess = () => {
        MySwal.fire({
          icon: 'success',
          title: 'Payment was successful',
          time: 4000,
          
        }) 
      };
      const handleFailure = () => {
        MySwal.fire({
          icon: 'error',
          title: 'Payment was not successful',
          time: 4000,
        });
      };
    const onToken = (token) =>{
      setBooking({...booking,token:token})
      console.log(token);
      handleSuccess(); 
    }
  return (
    <div>
          {
             booking.name && booking.email && booking.phone  && booking.checkIn && booking.checkOut && <>
             <StripeCheckout
                 token={onToken}
                 stripeKey="pk_test_51HyfPxG2v0f9y0mmO4iCyDOkmOvviPOgV3N5FhKZKrIDJjMDDKmGjTUtR2SEPN0B20zYIIcSizMlTaWRAL0JmaXm00ijtjVNFU"
                 label="Pay Now"
                 name="Pay With Credit Card"        
                 amount={priceForStripe}
                 description={`Your total is $${booking.totalAmount}`}
                 currency='USD'
                 email={booking.email}
   
               />
         </>
          }
    </div>
  )
}

export default BookingPayment