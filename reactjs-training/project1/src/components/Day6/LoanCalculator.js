import React, { useState } from "react";

const Loancalculator = () => {
    const [loanAmt, setLoanAmt] = useState(0);
    const [years, setYears] = useState(0);
    const [interstRate, setInterestRate] = useState(12);
    const [showResults, setShowResults] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculateLoan = (e) => {
        e.preventDefault();
        let interestAmt = (loanAmt * interstRate * years) / 100;
        let totalAmt = loanAmt + interestAmt;
        setTotalAmount(totalAmt);
        setMonthlyPayment((totalAmt / (years * 12)).toFixed(2));
        setShowResults(true);
    };

    return (
        <div className="row">
            <div className="card p-3 col-md-4 m-auto border-success">
                <h3 className="text-primary">Loan Calculator</h3>
                <div className="form-group my-3">
                    <form method="POST" onSubmit={calculateLoan}>
                        <h5 className="my-2">Interest Rate: 12%</h5>
                        <label htmlFor="loanAmt">Loan Amount: </label>
                        <input
                            className="form-control my-2"
                            type="number"
                            value={loanAmt}
                            onChange={(e) =>
                                setLoanAmt(parseInt(e.target.value))
                            }
                        />

                        <label htmlFor="years">Years: </label>
                        <input
                            className="form-control my-2"
                            type="number"
                            value={years}
                            onChange={(e) => setYears(parseInt(e.target.value))}
                        />

                        <button className="btn btn-success my-2">
                            Calculate Loan
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-3 m-auto">
                <div className="alert alert-success">
                    <h2>Results</h2>
                    {showResults && (
                        <>
                            <p>Total Amount: ₹{totalAmount}</p>
                            <p>Monthly Payment: ₹{monthlyPayment}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Loancalculator;
