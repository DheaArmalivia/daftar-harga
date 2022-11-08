import React, { useState, useEffect } from 'react';
import ItemComponent from './ItemComponent';

function ListComponent(props) {

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        setDataList(props.dataList)
    }, [props.dataList])

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                {dataList.map((item, i) => {
                    return (
                        <div key={i} style={{padding:20, width:'18rem'}}>
                            <ItemComponent data={item} onClickCard={(e) => props.onClick(item)}></ItemComponent>
                        </div>
                    )
                })}
            </div>
                
        </div>
    );
}

export default ListComponent;
