import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesBars,SparklinesLine,SparklinesReferenceLine  } from 'react-sparklines';

function average(data){
    return _.round((_.sum(data))/data.length);
}


export default (props) => {
    return(
        <div>
            <Sparklines width={100} height={80} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)} {props.units}
            </div>
        </div>
    );
}