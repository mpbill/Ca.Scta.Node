/**
 * Created by mpbil on 3/25/2017.
 */
let React = require('react');
let Layout = require('./layout');
let moment = require('moment');
let dayOfWeekEnumToString = require('./helpers/dayOfWeekEnumToString');
let getAllMeetingTimesForDay = require('./helpers/getAllMeetingsForDay');
let dayOfWeekEnum = require('../mock-data/meetings/makeMeeting').dayOfWeekEnum;
let getTimeString = function (d) {
    let timeString = moment(d).format("h:mmA");
    let shortTimeString = timeString.slice(0,timeString.length-1);
    return shortTimeString;
};
class Meetings extends React.Component{
    static smallMeetingTimeMapper(t){
        let dayOfWeek = dayOfWeekEnumToString(t.day);
        let typeMappings = t.meetingTypes.map(Meetings.smallMeetingTimeTypeMapper);
        return (
            <div className="list-group-item" key={t.id}>
                <h4 className="list-group-item-heading">{dayOfWeek}</h4>
                {getTimeString(t.time)}<br />
                {typeMappings}
            </div>
        )
    }
    static smallMeetingTimeTypeMapper(t){
        return <a key={t.id} data-placement="bottom" data-toggle="tooltip" title={t.name}>{t.abbreviation}</a>;
    }
    static meetingTypeMapper(mt) {
        return (
            <span key={mt.id}>
                <a data-placement="bottom" data-toggle="tooltip" title={mt.name}>
                    {mt.abbreviation}
                </a><br />
            </span>
        );
    }
    static largeMeetingTimeTableRowMapper(m){
        let daysMapped=[];
        for(let i=0;i<7;i++){
            let daysMeetingTimes = getAllMeetingTimesForDay(i,m);
            if(daysMeetingTimes){

                let dayMeetingTypesMapped = daysMeetingTimes.meetingTypes.map(Meetings.meetingTypeMapper);
                daysMapped.push(<td key={i}>{getTimeString(daysMeetingTimes.time)}<br />{dayMeetingTypesMapped}</td>)
            }
            else{
                daysMapped.push(<td key={i} />);
            }

        }
        return (
            <tr>
                {daysMapped}
            </tr>
        )
    }
    static renderDescription(d){
        if(d){
            return <span>({d})<br/></span>
        }
        return null;
    }
    static metingMapper(m){
        return (
            <div className="panel panel-info" key={m.id}>
                <div className="panel-heading">
                    <h4 className="meeting-header-text">{m.name}</h4>
                </div>
                <div className="panel-body">

                    <address className="address-large">
                        {Meetings.renderDescription(m.address.description)}
                        {m.address.street1}<br />
                        {m.address.city}, {m.address.state} {m.address.zipCode}<br />
                    </address>
                    <a className="btn btn-primary btn-sm" role="button" href={m.address.mapLink}>
                        <span className="glyphicon glyphicon-map-marker"> Map</span>
                    </a>

                </div>
                <div className="hidden-sm hidden-md hidden-lg hidden-print">
                    <div className="list-group">
                        {m.meetingTimes.map(Meetings.smallMeetingTimeMapper)}
                    </div>
                </div>
                <div className="hidden-xs">
                    <div className="inner">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="weekday-header">
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Meetings.largeMeetingTimeTableRowMapper(m.meetingTimes)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}>
                <h3>{this.props.title} Meetings</h3>
                <div className="ca-meetings-wrapper">
                    {this.props.meetingGroup.meetings.map(Meetings.metingMapper)}
                </div>
            </Layout>
        )
    }
}

module.exports=Meetings;