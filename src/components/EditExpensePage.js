import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(expense, this.props.expense.id);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm 
                    previous={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onClick}
                >Remove</button>
            </div>
        );
    }
};


const mapStateToProps = (state , props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
        editExpense: (expense, id) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense({ id }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);