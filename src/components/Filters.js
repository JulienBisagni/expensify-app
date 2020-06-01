import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class Filters extends Component {
  state = {
    calendarFocussed: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocussed) => {
    this.setState(() => ({ calendarFocussed }));
  };
  handleSetFilter = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  };

  handleSortBy = (e) => {
    if (e.target.value === "date") {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === "amount") {
      this.props.dispatch(sortByAmount());
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.handleSetFilter}
        />
        <select value={this.props.filters.sortBy} onChange={this.handleSortBy}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.startDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocussed}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(Filters);
