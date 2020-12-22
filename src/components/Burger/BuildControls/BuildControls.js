import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Lettuce', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.addIngredient(ctrl.type)}
                removed={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
            ))}
            <button onClick={props.ordered} disabled={!props.purchaseable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );


};

export default buildControls;