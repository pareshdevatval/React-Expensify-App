import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
//import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

const ExpenseListFilters = (props) => {
    const [startDate, setStartDate1] = useState(moment());
    const [endDate, setEndDate1] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate1(startDate);
        setEndDate1(endDate);
        // console.log(startDate | endDate);
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    };

    onTextChange = (e) => {
        this.props.setTextFilter({ text: e.target.value });
    }

    onSortChange = (e) => {
        if (e.target.value === "date") {
            props.sortByDate()
        }
        else if (e.target.value === "amount") {
            props.sortByAmount()
        }
    }

    return (
        <div>
            <input
                type='text'
                value={props.filters.text}
                onChange={this.onTextChange} />

            <select
                value={props.filters.sortBy}
                onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={startDate}
                startDateId="tata-start-date"
                endDate={endDate}
                endDateId="tata-end-date"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (disptach) => ({
    setTextFilter: (text) => disptach(setTextFilter(text)),
    sortByDate: () => disptach(sortByDate()),
    sortByAmount: () => disptach(sortByAmount()),
    setStartDate: (date) => disptach(setStartDate(date)),
    setEndDate: (date) => disptach(setEndDate(date)),
});

export default connect(mapStateToProps, mapStateToProps)(ExpenseListFilters);


/* import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null,
        startDate: this.props.filters.startDate,
        endDate: this.props.filters.endDate
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))        
    };

    onFocusChange = ({ focusedInput }) => {
        this.setState(() => ({ focusedInput }));
    };

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter({ text: e.target.value }));
                    }} />

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate())
                        }
                        else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="start_date_id"
                    endDateId="end_date_id"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters); */