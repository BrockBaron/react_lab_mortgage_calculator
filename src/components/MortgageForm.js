import React, {useState} from 'react';


const MortgageForm = () => {
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [interestRate, setInterestRate] = useState(0);


    return (
        <form className="mortgage-form">
            <p>
            <label for="salary1">Salary 1</label>
            <input type="number" placeholder="30000" value={salary1} required autofocus/>
            </p>
            <p>
            <label for="salary2">Salary 2</label>
            <input type="number" placeholder="optional" value={salary2}/>
            </p>
            <p>
            <label for="deposit">Deposit</label>
            <input type="number" value={deposit}/>
            </p>
            <p>
            <label for="interest rate">Interest Rate</label>
            <input type="number" value={interestRate}/>
            </p>
            <p>
            <input type="submit" value="Calculate Mortgage"/>
            </p>
        </form>
    ) 
}

export default MortgageForm;

