import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.previous?props.previous.description: '',
            note: props.previous?props.previous.note:'',
            amount: props.previous?(props.previous.amount/100).toString():'',
            createdAt: props.previous?moment(props.previous.createdAt):moment(),
            calendarFocused: false,
            error: ''
        }

    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }) );
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide the details.'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };


    render() {
        return (
            <div>
                
                {this.state.error !== '' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange} 
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} 
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange={() => false}
                        id="aaaaaa"

                    />
                    <textarea
                        placeholder="Add a note to your expense"
                        value={this.state.note}
                        onChange = {this.onNoteChange}
                        
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )

    }
};