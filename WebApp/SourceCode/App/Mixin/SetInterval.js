var SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function() {
        this.intervals.push(setInterval.apply(null, arguments));
    },

    clearIntervals: function() {
        this.intervals.forEach(clearInterval);
    },

    componentWillUnmount: function() {
        this.clearIntervals();
    }
};

export default SetIntervalMixin;