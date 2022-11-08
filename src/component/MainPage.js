import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

const obj = {
  selected:false,
  img:"",
  title:"",
  text1:"",
  text2:"",
  text3:"",
  priceText:"",
  smallText:"",
  styles: {
      priceTextStyle:{},
      selectedCard: {
          cardStyle:{},
          dividerStyle:{},
          titleStyle:{},
          text1Style:{},
          text2Style:{},
          text3Style:{},
          smallTextStyle:{}
      },
      cardStyle:{},
      dividerStyle:{},
      titleStyle:{},
      text1Style:{},
      text2Style:{},
      text3Style:{},
      smallTextStyle:{}
  }
}

function MainPage() {
    const dataSource = require('../data-source/service-list.json')

    const [dataList, setDataList] = useState(dataSource)
    const [plan, setPlan] = useState(obj)

    useEffect(() => {
        setDataList(dataSource)
    }, [dataSource])

    const clickCard = (e) => {
      setPlan(e);
      const newState = dataList.data.map((item) => {
          if(item.title == e.title) {
              return {...item, selected:true}
          } else {
              return {...item, selected:false}
          }
          
      })
      setDataList({data: newState})
    }

  return (
    <div>
      
      <div>
        <ListComponent 
        dataList={dataList.data} 
        onClick={(e) => clickCard(e)}
        ></ListComponent>
      </div>
      <hr style={{border: '2px solid white'}}></hr>
      <div style={{textAlign: 'center', padding: 24}}>
        <h4 style={{color: 'white'}}>Selected Plan : {plan.title}</h4>
      </div>
      <div style={{color: 'white', padding: 10}}>
        <h6>Nama : Dhea Armalivia Airizah | NIM : 2301962061</h6>
        
      </div>
    </div>
  );
}

export default MainPage;
