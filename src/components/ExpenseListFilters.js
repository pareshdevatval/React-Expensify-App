/* import React, { useState } from "react";
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); */

import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates';
import moment from "moment";
//import "react-dates/lib/css/_datepicker.css";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null,
            startDate: moment(),
            endDate: moment()
        };
    }

    handleDatesChange = ({ startDate, endDate }) => {
        this.setState({
            startDate,
            endDate
        })
        // console.log(startDate | endDate);
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };

    onTextChange = (e) => {
        this.props.setTextFilter({ text: e.target.value });
    }

    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate()
        }
        else if (e.target.value === "amount") {
            this.props.sortByAmount()
        }
    }

    setFocusedInput = (focusedInput) => {
        this.setState({
            focusedInput
        });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextChange} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.startDate}
                    startDateId="tata-start-date"
                    endDate={this.props.endDate}
                    endDateId="tata-end-date"
                    onDatesChange={this.handleDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => this.setFocusedInput(focusedInput)}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (disptach) => ({
    setTextFilter: (text) => disptach(setTextFilter(text)),
    sortByDate: () => disptach(sortByDate()),
    sortByAmount: () => disptach(sortByAmount()),
    setStartDate: (date) => disptach(setStartDate(date)),
    setEndDate: (date) => disptach(setEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);