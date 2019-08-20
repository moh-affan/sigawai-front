import React from 'react';
import WithLayout from "components/WithLayout/WithLayout";
import Main from "layouts/Main";
import Grid from '@material-ui/core/Grid';
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";


const MaterialUIPickers = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (<Grid container justify="space-around">
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
        <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
        <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change time',
            }}
        />
    </Grid>);
}

const Index = props => {
    return (<WithLayout component={MaterialUIPickers} layout={Main} loginRequired={true} redirectLogin="/" />);
}
export default Index;