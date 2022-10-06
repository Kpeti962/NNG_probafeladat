import React, { useState } from "react";
import { theater } from "../data/lineData";

import Chair from "../components/Chair";

const Theater = () => {
  const [data, setData] = useState(theater);
 

  const getRandomPlaceReserved = () => {
   
/* console.log(data); */
data.auditorium.forEach(element => {
  console.log(element.line_1[Math.floor(Math.random() * 14) + 1]);
});

   /*  data.auditorium.line_1.forEach(element => {
      console.log(element);
    }); */
  

/*   console.log(  
      (data.auditorium.line_1[Math.floor(Math.random() * 14) + 1].reserved)
    );
    console.log(Math.floor(Math.random() * 14) + 1);   */  
  };

  return (
    <div> 
          {/*
      <h1 className="theater">Theater</h1>
      <div className="auditoriumSection">
        <h3>Auditorium</h3>
        <ul>
          {data.auditorium.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        </div>
         <ul>
          {data.auditorium.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_3.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_4.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_5.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_6.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_7.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.auditorium.line_8.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="balconyMidSection">
        <h3>Balcony Mid.</h3>
        <ul>
          {data.balconyMid.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.balconyMid.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="balconyLeftSection">
        <h3>Balcony Left</h3>
        <ul>
          {data.balconyLeft.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.balconyLeft.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="balconyRightSection">
        <h3>Balcony Right</h3>
        <ul>
          {data.balconyRight.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.balconyRight.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="boxLeftSection1">
        <h3>Box Left 1.</h3>
        <ul>
          {data.boxLeft1.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.boxLeft1.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="boxLeftSection2">
        <h3>Box Left 2.</h3>
        <ul>
          {data.boxLeft2.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.boxLeft2.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="boxRightSection1">
        <h3>Box Right 1.</h3>
        <ul>
          {data.boxRight1.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.boxRight1.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>
      <div className="boxRightSection2">
        <h3>Box Right 2.</h3>
        <ul>
          {data.boxRight2.line_1.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
        <ul>
          {data.boxRight2.line_2.map((section, idx) => {
            return <Chair chair={section} key={section.id} />;
          })}
        </ul>
      </div>

      <div className="inputSection">
        <select name="zone" id="zone">
          <option value="">Ülőhelyek keresése</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
        </select>
        <input type="number" placeholder="Hány % foglalt" />
      </div>  */}
      <button onClick={getRandomPlaceReserved}>Mehet</button>
    </div>
  );
};

export default Theater;
