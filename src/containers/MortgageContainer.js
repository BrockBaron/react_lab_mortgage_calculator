import React, {useState} from 'react';
import MortgageForm from '../components/MortgageForm';


const MortgageContainer = () => {
    const [mortgage, setMortgage] = useState(0)




return (
    <>
    <h1>Mortgage Calculator</h1>
    <MortgageForm />
    </>
)

}

export default MortgageContainer;

