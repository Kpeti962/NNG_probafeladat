import React, { useEffect, useState } from "react";
import { theater } from "../../data/lineData";
import Chair from "./Chair";
import { v4 as uuidv4 } from "uuid";


const Map = ({ occupancyPercentage, numberOfReserve = 3 }) => {
    const [data, setData] = useState(theater);
    const [freePlaces, setFreePlaces] = useState(0);

    const getRandomIndex = (maxNumber) => {
        return Math.floor(Math.random() * maxNumber);
    };

    const getAllChairsNumber = () => {
        let result = 0;
        data.forEach((section) =>
            section.lines.forEach((line, lineIndex) => {
                result += line.length;
                line.forEach((chair, chairIndex) => {
                    // set unique id for every chair
                    chair.id = uuidv4();
                    chair.name = `seat-${lineIndex + 1}/${chairIndex + 1}`
                });
            })
        );
        return result;
    };

    const chairsToBeReserved = () => {
        // Calculate how many seats should be occupied based on the total number of seats and the percentage of occupancy.
        return Math.floor(getAllChairsNumber() * (occupancyPercentage / 100));
    };

    const setToReservedByOccupancy = (e) => {
        const randomSection = data[getRandomIndex(data.length)];
        const randomLine =
            randomSection.lines[getRandomIndex(randomSection.lines.length)];
        const randomChair = randomLine[getRandomIndex(randomLine.length)];

        const modifiedData = data.map((section) => {
            return {
                section_class: section.section_class,
                section_name: section.section_name,
                lines: section.lines.map((line) => {
                    return line.map((chair) => {
                        if (chair.id === randomChair.id && !chair.reserved)
                            chair.reserved = true;
                        return chair;
                    });
                }),
            };
        });
        setData(modifiedData);
    };

    const getReservedChairs = () => {
        // All reserved chairs
        let result = 0;
        data.forEach((section) =>
            section.lines.forEach((line) => {
                line.forEach((chair) => {
                    if (chair.reserved) {
                        result += 1;
                    }
                });
            })
        );
        return result;
    };

    useEffect(() => {
        // First run the loop as many times as the number of chairs to be reserved.
        for (let i = 0; i < chairsToBeReserved(); i++) {
            setToReservedByOccupancy();
        }

        // There may be a case where a random number finds a seat that is already taken
        // We compare the reserved chairs with the chairs to be reserved.
        // The cycle is repeated until the two values are equal.
        while (chairsToBeReserved() > getReservedChairs()) {
            const countOfMissing = chairsToBeReserved() - getReservedChairs();

            for (let i = 0; i < countOfMissing; i++) {
                setToReservedByOccupancy();
            }
        }

        let avaiableChairs = [];
        data.forEach(section => {
            section.lines.forEach(line => {
                line.forEach((chair) => {
                    if (!chair.reserved && chair.price === 5000) {
                        avaiableChairs.push(chair);
                    }
                })
            })
        });

        avaiableChairs.forEach((chair, index) => {
            if (Number(avaiableChairs[index + numberOfReserve - 1]?.name?.slice(7)) === Number(avaiableChairs[index].name?.slice(7)) + numberOfReserve - 1) {
                console.log('megtalált', chair);
            }
        })
        setFreePlaces(getAllChairsNumber() - getReservedChairs());
    }, []);


    return (
        <div className="map-wrapper">
            <div>
                <h1 className="theater">Theater</h1>
                <h1>Szabad ülőhelyek: {freePlaces}</h1>
                {data.map((section) => (
                    <div key={section.section_name} className={`${section.section_class}`}>
                        <h3>{section.section_name}</h3>


                        {section.lines.map((line, lineIndex) => (
                            <ul>{lineIndex + 1}
                                {line.map((chair, index) => (
                                    <Chair chair={chair} index={index} key={chair.id} lineIndex={lineIndex} />
                                ))}
                            </ul>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Map;