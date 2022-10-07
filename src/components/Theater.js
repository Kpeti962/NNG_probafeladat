import React, { useEffect, useState } from "react";
import { theater } from "../data/lineData";
import { v4 as uuidv4 } from "uuid";
import Chair from "../components/Chair";

const Theater = ({ /*  occupancyPercentage = 0  */ }) => {
  const [data, setData] = useState(theater);
  const [freePlaces, setFreePlaces] = useState(0);
   const [occupancyPercentage, setOccupancyPercentage] = useState (0) 

  const occupancyHandler = (e) =>{
  setOccupancyPercentage(e.target.value)
    
  }

  const getRandomIndex = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
  };

  const getAllChairsNumber = () => {
    let result = 0;
    data.forEach((section) =>
      section.lines.forEach((line) => {
        result += line.length;
        line.forEach((chair) => {
          // set unique id for every chair
          chair.id = uuidv4();
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
    console.log("modi", modifiedData);
  };
  /*   const setToReservedByOccupancy = () => {
    const randomSection = data[getRandomIndex(data.length)];
    const randomLine =
      randomSection.lines[getRandomIndex(randomSection.lines.length)];
    const randomChair = randomLine[getRandomIndex(randomLine.length)];

    const modifiedData = data.map((section) => {
      return {
        section: section.section,
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
  }; */

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
    console.log("eredmény", result);
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
  }, []);
  
  useEffect(() => {
    setFreePlaces(getAllChairsNumber() - getReservedChairs())
  }, []);
    
       /*  data.forEach((section) => {
          section.lines.forEach((line) => {
            line.forEach((chair) => {
              switch (chair.reserved) {
                case false:
                  setFreePlaces(freePlaces +1);
                  break;
        
               
              
              };
              return setFreePlaces;
    
              if (chair.reserved === true) {
                setFreePlaces((freePlaces + 1));
                
              }
              console.log("v", chair);
            });
          });
        }); */
    /*     let freeChairs = [];
    let freeLines = [];
    let freeSections = [];
console.log("ujadatok", data[0]);
    for (let i = 0; i < data.length; i++) {
      freeSections.push(data[i])
      console.log("i",freeSections);
    }
    for(let j = 0; j < freeSections.length; j++) {
    freeLines.push(freeSections[j])
    console.log("j",freeLines);
  }
  for ( let k = 0; k < freeLines.length; k++) {
    freeChairs.push(freeLines[k])
    console.log("k",freeChairs);
  } 
  */

  console.log("adatok", data);

  return (
    <div>
      <h1 className="theater">Theater</h1>
      <h1>Szabad ülőhelyek: {freePlaces}</h1>
      {data.map((section) => (
        <div className={`${section.section_class}`}>
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
      <div className="input-section">
        <input type="number" onChange={occupancyHandler}/>
      </div>
    </div>
  );
};

export default Theater;
