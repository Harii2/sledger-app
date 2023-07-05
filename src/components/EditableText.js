import React from 'react'
import { useState } from 'react'
import './index.css'

const list = ["3 Nahni Trap", "5 layer 1000 liter water tank", "Ball Valve 25MM Box 10 UPVC", "Ball Valve 40MM Box 3 UPVC", "Bearing 30210", "Bearing 30305", "Bearing 30307", "Bearing 30308", "Bearing 30308 NBC", "Bearing 30309 NBC", "Bearing 30311", "Bearing 32016 DTech", "Bearing 32206", "Bearing 32207 NBC", "Bearing 32208", "Bearing 32209", "Bearing 32209 NBC", "Bearing 32210 CBS", "Bearing 32210 NBC", "Bearing 32211 CBS", "Bearing 32211 NBC", "Bearing 32212", "Bearing 32212 NBC", "Bearing 32213 NBC", "Bearing 32214", "Bearing 32214 NBC", "Bearing 32308", "Bearing 32310", "BEARING 51113", "Bearing 51313 CBS", "Bearing 51314 CBS", "Bearing 51315", "Bearing 6004 RS HCH", "Bearing 6007", "Bearing 6012ZZ", "Bearing 6013 NBU", "Bearing 6201Z NBC", "Bearing 6202Z NBC", "Bearing 6203 ZZ", "Bearing 6203Z NBC", "Bearing 6204Z NBC", "Bearing 6204ZZ", "Bearing 6205Z NBC", "Bearing 6205ZZ MPZ", "Bearing 6206 NBC", "Bearing 6206ZZ", "Bearing Ls8", "Bearing MAHK 22211 MBK", "Bearing MAHK 22212 MBK", "Bearing MS 13 NBC", "Bearing MS10 NBC", "Bearing MS11 NBC", "Bearing MS11.5 NBC", "Bearing MS12 NBC", "Bearing MS14 NBC", "Bearing N210", "Bearing NBC - 539/ 532X", "Bearing NBC 6206Z", "Bearing Round Goli", "Bearing Sleave 1208S", "Bearing Sleave 1210K/s", "Bearing Sleave 1211S", "Bearing Sleave 1213S", "Bearing Sleeve 1206k", "Bearing Sleeve 1206S", "Bearing Sleeve 1208k", "Bearing Sleeve 1209S", "Bearing Sleeve 1210K", "Bearing Sleeve 1211k", "Bearing Sleeve 1212S", "Bearing Sleeve 1213k/s", "Bend  4 RingType 87.5 Deg Box 35 SWR", "Bend 160MM 6 Ring Type 87.5 Deg Box 12 SWR", "Bend 4 45 Deg Pasting Type SWR", "Bend 75MM 3 Ring Type 87.5 Deg Box 70 SWR", "Bitumen Belt Paste 1 Kg 2713", "Bitumen Belt Paste 20kg", "Bitumen Belt Paste 300 G", "Bitumen Belt Paste 4kg", "Casing Pipe 5 1250MM DN-CM Type 3 M", "MIRTEE 20x15 Pk 20 UPVC", "MP3 Grease 1kg", "MP3 Grease 200g", "MP3 Grease 500g", "MTA 25MM Box 500 UPVC", "MTA 32MM CPVC", "NAHNI TRAP W/O JALI 110 MM 4 Box 30 SWR", "P Trap Pasting Type 110x110MM Box 18 SWR", "P Trap Pasting Type 125x110MM Box 18 SWR", "Reducer 110x75 4x3 Box 35 SWR ring fit", "Reducer Bush 25x20 Box 500 UPVC", "Reducer Bush 32x25MM Box 300 UPVC", "Reducer Ring Type 160x110 6x4 Box 15 SWR", "Reducer Tee 25x20MM UPVC", "Rigid Agri Pipe 40MM 6Kg/cm2 3M", "Rigid Agri Pipe 50MM 6kg/cm2 3M", "Single TEE RIng Type 110MM 4 Box 25 SWR", "Single TEE W Door RIng Type 110MM 4 Box 20 SWR", "Step Over Bend 25mm CPVC", "Swept Tee Ring Type 160MM 6 Box 6 SWR", "SWR 3 75 MM Ringtype A 3M Single Socket", "SWR 4 110 MM Ringtype A 3M Single Socket", "Tank Connector 25MM Box 50 UPVC", "Tank Connector 25mm Pk 25 CPVC", "TEE 25MM Pk 25 CPVC", "TEE 32mm UPVC (100)", "Tee 50MM Rigid Agri PVC", "UCP 205-16 FKD", "UCP 205/16 HGMT", "UCP 206 FKD", "UCP 208-24 DWZY", "UCP 208/24 HGMT", "UCP 211 FKD", "UCT 210 FKD", "Union 25MM Box 100 UPVC", "Union 25MM Pk 25 CPVC", "UPVC 15 mm SCH-40 3 M Pack 50", "UPVC 20MM SCH-40 3M Pack 25", "UPVC 25 mm SCH-40 3 M Pack 25", "UPVC 32 MM SCH-40 3 M Pack 15"]


const EditableText = () => {

    const d = [
        {
            name: '16" V/d GM',
            hsnCode: '8437',
            gstPercentage: '18%',
            quantity: "1.0 Pair",
            rateInclTax: 4800.00,
            ratePer: "4067.80 Pair",
            discountPercentage: "",
            amount: 4067.80,
          },
          {
            name: 'Belt Fastener 2.5/8"',
            hsnCode: '7326',
            gstPercentage: '18%',
            quantity: "40.0 Pcs",
            rateInclTax: 9.99,
            ratePer:"8.47 Pcs",
            discountPercentage: "",
            amount : 338.80
          },
        {
            name: 'Belt Fastener 3/8"',
            hsnCode: '7326',
            gstPercentage: '18%',
            quantity: "3.0 Pcs",
            rateInclTax: 12.33,
            ratePer:"10.45 Pcs",
            discountPercentage: "",
            amount:31.35
        }
    ]

    const [data, setData] = useState(d);
    const [filteredList, setFilteredList] = useState([]);
    const [typedWord, setTypedWord] = useState('');
    const [showSideBox, setShowSideBox] = useState(false);

    const HSN = [{
        id:1,
        name : "CGST",
        value : 399.41
    },{
        id : 2,
        name : "SGST",
        value : 399.41
    },{
        id : 3,
        name : "Round off",
        value : 0.23
    }]

  const handleEdit = (index, field, value) => {
    console.log(value)
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
    handleFilter(value)
  };

  const handleFilter = (value) => {
    const typedValue = value;
    setTypedWord(typedValue);

  if (typedValue.trim() !== '') {
    let filteredItems = [];

    if (typedValue.toLowerCase() === 'barig' || typedValue.toLowerCase() === 'beg') {
      filteredItems = list.filter((item) => item.toLowerCase().includes('bearing'));
    }

    setFilteredList(filteredItems);
  } else {
    setFilteredList([]);
  }
  };

  console.log(typedWord)

  const handleFocus = (e) => {
    setShowSideBox(true);
    setTypedWord(e.target.value);
    handleFilter(e.target.value)
  };

  const handleBlur = () => {
    setShowSideBox(false);
  };

  return (
    <div style={{marginBottom:"300x"}}>
      <table>
        <thead>
          <tr>
            <th style={{width:"40%",fontSize:"small"}}>Name of Item</th>
            <th style={{width:"10%",fontSize:"small"}}>HSN/SAC Code</th>
            <th style={{width:"10%",fontSize:"small"}}>GST %</th>
            <th className='no-border' style={{width:"10%",fontSize:"small"}}>Quantity</th>
            <th className='no-border' style={{width:"10%",fontSize:"small"}}>Rate (Incl. of Tax)</th>
            <th className='no-border' style={{width:"10%",fontSize:"small"}}>Rate Per</th>
            <th className='no-border' style={{width:"10%",fontSize:"small"}}>Dsc %</th>
            <th className='no-border' style={{width:"10%",fontSize:"small"}}>Amount</th>
          </tr>
        </thead>
        <tbody>
        {showSideBox && typedWord && filteredList.length > 0 &&(
        <div className="side-box">
            <h2 style={{fontSize:"small"}}>List of Stock Items</h2>
            <p>{filteredList.length} items</p>
          <ul>
            {filteredList.map((item, index) => (
              <li style={{cursor:"pointer"}} onClick={() => console.log("li clicked")} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleEdit(index, 'name', e.target.value)}
                    onFocus={(e) => handleFocus(e)}
                    onBlur={handleBlur}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.hsnCode}
                  onChange={(e) =>
                    handleEdit(index, 'hsnCode', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.gstPercentage}
                  onChange={(e) =>
                    handleEdit(index, 'gstPercentage', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) =>
                    handleEdit(index, 'quantity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.rateInclTax}
                  onChange={(e) =>
                    handleEdit(index, 'rateInclTax', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.ratePer}
                  onChange={(e) =>
                    handleEdit(index, 'ratePer', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.discountPercentage}
                  onChange={(e) =>
                    handleEdit(index, 'discountPercentage', e.target.value)
                  }
                />
              </td>
              <td>{item.amount}</td>
            </tr>
          ))}
            <tr>
            <td colSpan="20"></td>
          </tr>
            {HSN.map((item,index) => 
                (<tr key  = {index}>
                    <td>
                        <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleEdit(index, 'name', e.target.value)}
                        />
                    </td>
                    <td>
                        
                    </td>
                    <td>
                      
                    </td>
                    <td>
                       
                    </td>
                    <td>
                        
                    </td>
                    <td>
                       
                    </td>
                    <td>
                        
                    </td>
                    <td>{item.value}</td>
                </tr>)
          )}

        <tr>
            <td colSpan="8"></td>
          </tr>
          
          <tr >
                    <td>
                        <input
                        type="text"
                        value="Narration"
                        // onChange={(e) => handleEdit(index, 'name', e.target.value)}
                        />
                    </td>
                    <td>
                        
                    </td>
                    <td>
                      
                    </td>
                    <td>
                       
                    </td>
                    <td>
                        
                    </td>
                    <td>
                       
                    </td>
                    <td>
                        
                    </td>
                    <td>5237.00</td>
                </tr>
          
        </tbody>


      </table>
    </div>
  );

}

export default EditableText