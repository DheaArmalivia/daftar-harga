import React from 'react';
import { CardBody, Card } from 'reactstrap';
import { useState, useEffect } from 'react';

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

function ItemComponent(props) {

    const [data, setData] = useState(obj)

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (
        <div>
            <Card
            onClick={props.onClickCard}
            className="item"
            style={data.selected ? 
                data.styles.selectedCard.cardStyle : 
                data.styles.cardStyle}
            >
            <CardBody>
                <div className={data.img}></div>
                {/* <h5 style={data.styles.titleStyle}>{data.title}</h5> */}
                <h5 style=
                {data.selected ? 
                    data.styles.selectedCard.titleStyle : 
                    data.styles.titleStyle}
                >{data.title}</h5>
            </CardBody>
            <div style={data.selected ?
                data.styles.selectedCard.dividerStyle : 
                data.styles.dividerStyle}
            ></div>
            <CardBody>
                {/* <span style={data.styles.text1Style}>{data.text1}</span><br/>
                <span style={data.styles.text2Style}>{data.text2}</span><br/>
                <span style={data.styles.text3Style}>{data.text3}</span><br/> */}
                <span style={data.selected ? 
                    data.styles.selectedCard.text1Style : 
                    data.styles.text1Style}
                >{data.text1}</span><br/>
                <span style={data.selected ? 
                    data.styles.selectedCard.text2Style : 
                    data.styles.text2Style}
                >{data.text2}</span><br/>
                <span style={data.selected ? 
                    data.styles.selectedCard.text3Style : 
                    data.styles.text3Style}
                >{data.text3}</span><br/>
            </CardBody>
            <div style={data.selected ?
                data.styles.selectedCard.dividerStyle : 
                data.styles.dividerStyle}
            ></div>
            <CardBody>
                <h5 style={data.styles.priceTextStyle}>{data.priceText}</h5>
                {/* <small style={data.styles.smallTextStyle}>{data.smallText}</small> */}
                <small style={data.selected ? 
                    data.styles.selectedCard.smallTextStyle : 
                    data.styles.smallTextStyle}
                >{data.smallText}</small>
            </CardBody>
            </Card>
        </div>
    );
}

export default ItemComponent;
