import DonationForm from "../components/DonationForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51PoVvEP2RWLzwwb6SVGDSvR06XaB75718yTN6dB485qlB4fLUVtYlxs6gPK3r1WDnoWRlJqab5LmlTxXtmbG9qfZ00tOhjkkLP')

function DonatePage() {
    return (
        <div className='container'>

        <Elements stripe={stripePromise}>
        <DonationForm />
        </Elements>

        </div>
    
    );
}

export default DonatePage;