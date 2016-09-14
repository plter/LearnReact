/**
 * Created by plter on 9/13/16.
 */

(function () {


    var time = {value: "00:00:00"};
    var timeFormat = num => (num >= 10 ? "" : "0") + num;

    const Clock = React.createClass({
        render: ()=> {
            return <h1>{time}</h1>;
        }
    });


    setInterval(()=> {
        let date = new Date();
        time = `${timeFormat(date.getHours())}:${timeFormat(date.getMinutes())}:${timeFormat(date.getSeconds())}`;

        ReactDOM.render(<Clock/>, document.getElementById("root"));
    }, 1000);
})();