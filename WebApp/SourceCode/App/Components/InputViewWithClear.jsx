import React from 'react';
import Watch from 'watchjs';

const InputViewWithClear = React.createClass({

    value: '',
    placeholder: '',

    getInitialState() {
        this.placeholder = this.props.placeholder == undefined ? '' : this.props.placeholder;

        return {
            value: this.value,
            placeholder: this.placeholder
        };
    },

    componentDidMount() {
        let self = this;

        Watch.watch(this, ['value', 'placeholder'], function () {
            let inputView = self.refs.inputView;
            if (self.value != inputView.value) {
                inputView.value = self.value;
            }

            self.setState({
                value: self.value,
                placeholder: this.placeholder
            });
        });
    },

    onInput(e) {
        this.value = e.target.value;
        this.setState({
            value: e.target.value
        });

        if(this.props.onInput){
            this.props.onInput(e);
        }
    },

    clearValue(e) {
        let inputView = this.refs.inputView;
        inputView.value = '';
        inputView.focus();

        this.value = '';
        this.setState({
            value: ''
        });

        if(this.props.onInput){
            this.props.onInput(e);
        }
    },

    render() {
        return (
            <div>
                <input type={this.props.type}
                       className={this.props.className}
                       placeholder={this.state.placeholder}
                       shouldFilter={this.props.shouldFilter}
                       filterType={this.props.filterType}
                       ref="inputView"
                       onInput={this.onInput}/>
                <div className={this.state.value == '' ? 'hide' : this.props.iconClass} onClick={this.clearValue}>
                    <i className="iconfont smallicon graytext">&#xe61c;</i>
                </div>
            </div>
        );
    }

});

export default InputViewWithClear;