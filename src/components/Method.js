import React from 'react'
import payment from '../payment'

export default function Method() {
    const {method} = payment;
    console.log(method)
    return (
        <div className="payment">
            {method.map(eachMethod => {
                return (
                    <div className="eachPayment" key={eachMethod.id}>
                        <div className="eachImage">
                         <img className="" src={eachMethod.image} alt={eachMethod.name} />
                        </div>
                        <div className="eachName">
                            <h1>
                                {eachMethod.name}
                            </h1>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}
