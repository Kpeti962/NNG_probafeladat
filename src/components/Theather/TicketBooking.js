import React from 'react'

const TicketBooking = ({ setOccupancyPercentage, setNumberOfReserve, setSubmitted }) => {

    const occupancyPercentageHandler = (e) => {
        setOccupancyPercentage(Number(e.target.value));

    };

    const numberOfReserveHandler = (e) => {
        setNumberOfReserve(Number(e.target.value));

    };

    const persons = [2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="input-section">
            <input placeholder='Foglaltság (%)' type="number" onChange={occupancyPercentageHandler} />
            <select onChange={numberOfReserveHandler}>
                {persons.map((person) => (
                    <option key={person} value={person}>{person}</option>
                ))}
            </select>
            <button onClick={() => setSubmitted(true)}>Foglal</button>
        </div>
    )
}

export default TicketBooking