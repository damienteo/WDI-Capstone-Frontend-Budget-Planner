import React, { Component } from 'react';

import {
	TextField,
	MenuItem,
	Button,
	Grid,
	InputAdornment
}
	from '@material-ui/core';

import ExpenseList from './ExpenseList'

const styles = {
	menu: {
		width: 200,
	},
	input: {
		width: 150,
		margin: 10,
	},
};

const months = [
	{
		value: 0,
		label: 'Jan',
	},
	{
		value: 1,
		label: 'Feb',
	},
	{
		value: 2,
		label: 'Mar',
	},
	{
		value: 3,
		label: 'Apr',
	},
	{
		value: 4,
		label: 'May',
	},
	{
		value: 5,
		label: 'Jun',
	},
	{
		value: 6,
		label: 'Jul',
	},
	{
		value: 7,
		label: 'Aug',
	},
	{
		value: 8,
		label: 'Sep',
	},
	{
		value: 9,
		label: 'Oct',
	},
	{
		value: 10,
		label: 'Nov',
	},
	{
		value: 11,
		label: 'Dec',
	},
];

class UserExpenseInput extends Component {

	constructor(props) {
		super(props);
		this.handleSetExpense = this.handleSetExpense.bind(this);
		this.handleExpenseChange = this.handleExpenseChange.bind(this);
		this.handleReasonChange = this.handleReasonChange.bind(this);
		this.handleMonthChange = this.handleMonthChange.bind(this);
		this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
	}

	handleExpenseChange(event) {
		this.props.handleExpenseChange(event);
	}

	handleMonthChange(event) {
		this.props.handleMonthChange(event);
	}

	handleReasonChange(event) {
		this.props.handleReasonChange(event);
	}

	handleSetExpense() {
		this.props.handleSetExpense();
	}

	handleDeleteExpense(id) {
		this.props.handleDeleteExpense(id);
	}

	render() {

		const {
			newExpense,
			newMonth,
			expenseReason,
			savedExpenses
		} = this.props;

		return (
			<React.Fragment>
				<Grid container>
					<TextField
						key="newExpense"
						type="number"
						name="newExpense"
						value={newExpense}
						onChange={this.handleExpenseChange}
						label="Input new Expense:"
						InputLabelProps={{
							shrink: true,
						}}
						margin="normal"
						variant="outlined"
						InputProps={{
							startAdornment: <InputAdornment position="start">$</InputAdornment>,
						}}
						style={styles.input}
					/>
					<TextField
						key="newMonth"
						type="number"
						name="newMonth"
						select
						label="Month:"
						value={newMonth}
						onChange={this.handleMonthChange}
						SelectProps={{
							MenuProps: {
								// className: classes.menu,
							},
						}}
						style={styles.input}
						// helperText="Month:"
						variant="outlined"
					>
						{months.map(option => (
							<MenuItem
								key={option.value}
								value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						key="expenseReason"
						type="text"
						name="expenseReason"
						label="Reason:"
						value={expenseReason}
						onChange={this.handleReasonChange}
						style={styles.input}
						variant="outlined"
					/>
					<Button
						variant="outlined"
						size="small"
						color="secondary"
						fullWidth
						onClick={this.handleSetExpense}
						style={styles.input}
					>
						Confirm Expense
			        </Button>
					<ExpenseList
						savedExpenses={savedExpenses}
						handleDeleteExpense={this.handleDeleteExpense}
					/>
				</Grid>
			</React.Fragment>
		)
	}
}

export default UserExpenseInput;