import React, { useState } from "react";
import {
    Button,
} from "reactstrap";

const Years = (props) => {
    const [years, setYears] = useState([
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
    ]);
    let buttonStyle = {
        margin: 5,
    };
    let buttons = years.map((year) => {
        return (
            <Button
                color={props.year === year ? "success" : "info"}
                style={buttonStyle}
                onClick={() => props.clickHandler(year)}
            >
                {year}
            </Button>
        );
    });
    return (
        years.map((year) => <Button
            color={props.year === year ? "success" : "info"}
            style={buttonStyle}
            onClick={() => props.clickHandler(year)}
        >
            {year}
        </Button>
        )
    );
};

export default Years;
