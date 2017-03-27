let React = require('react');
let Layout = require('./layout');


class AreaResources extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}>
                <h2>Resources</h2>

                <div className="row area-resources">
                    <div className="col-md-6 col-lg-3">
                        <h3>CA Links</h3>
                        <p><i>Links to other Texas CA Areas and World Services</i></p>
                        <ul className="list-group">
                            <li className="list-group-item"><a href="https://ca.org/">CA World Services</a></li>
                            <li className="list-group-item"><a href="http://northtexasca.com/">North Texas Area</a></li>
                            <li className="list-group-item"><a href="http://www.ca-texas.org/">Texas Area</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Group</h3>
                        <p><i>Resources for individual groups</i></p>
                        <ul className="list-group">
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/meeting_formats_2009.pdf">Meeting Formats</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/approved.pdf">List of CA Approved Literature</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/groupinventory.pdf">Group Inventory</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/Service-Resume-Blank.doc">Blank Service Resume</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h3>SCTA</h3>
                        <p><i>Area Resources</i></p>
                        <ul className="list-group">

                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/Structures2016.pdf">SCTA Structure</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/ByLawsNovember2015.pdf">SCTA Bylaws</a></li>
                            <li className="list-group-item"><a href="/contact#org-chart">SCTA Organization Chart</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/Austin Texas CAWS 2020 Bid Doc.pdf">CAWS 2020 Bid</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>World</h3>
                        <p><i>Resources for the WORLD</i></p>
                        <ul className="list-group">
                            <li className="list-group-item"><a href="#">CA World Service Manual</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/S&B_Guidelines.pdf">CA Structure & Bylaws Guidelines</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/H&I_Guidelines_2013.pdf">CA H&I Guidelines</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/hilabels.pdf">CA H&I Approved Labels</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/IT_Workbook_2012.pdf">CA IT Workbook</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/FinanceGuidelines2007.pdf">Finance Guidelines</a></li>
                            <li className="list-group-item"><a href="http://content.ca-scta.org/Documents/Unity_Guidelines_2010.pdf">Unity Guidelines</a></li>
                        </ul>
                    </div>

                </div>
            </Layout>
        )
    }
}

module.exports=AreaResources;