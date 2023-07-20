/*Modulos*/
import React from 'react';

const ShowTitle  = ({TitleConfig}:any) => {
    return (
        <div 
            style={{
                position: 'absolute',
                zIndex: 70,
                left: TitleConfig.XCoord,
                top: TitleConfig.YCoord,
                padding:'7px',
                borderRadius:'7px',
                backgroundColor:'black',
                color:'white',
                fontSize:'0.7rem',
                border:'1px solid white'}}>
            {TitleConfig.Title}
        </div>
    )    
}

export default React.memo(ShowTitle)