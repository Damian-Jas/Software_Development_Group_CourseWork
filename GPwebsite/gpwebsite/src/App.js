import './App.css';
//Import jQuery library
import $ from 'jquery';
//import necessary govuk components here
import { Input, LabelText, Label, HintText, Button, Page, Table } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';

function App() {
    //Get the data from viewAppointments.php file using AJAX
    $.getJSON("viewAppointments.php", function (data) {
        //Loop through the data and add a row for each record
        $.each(data, function (index, row) {
            var $tr = $("<tr>").appendTo($("#table-body"));
            $("<td>").text(row.AppointmentNum).appendTo($tr);
            $("<td>").text(row.DateScheduled).appendTo($tr);
            $("<td>").text(row.ProblemDescription).appendTo($tr);
            $("<td>").text(row.Status).appendTo($tr);
            $("<td>").text(row.Notes).appendTo($tr);
            $("<td>").text(row.PatientID).appendTo($tr);
            $("<td>").text(row.DoctorID).appendTo($tr);
        });
    });

    return (
        <Page header={< TopNav company={<TopNav.Anchor
        href="https://GPService.com" target="new" > <TopNav.IconTitle
        icon={<img src="mainlogo.png" width="24" height="24"
        />}>GP service</TopNav.IconTitle></ TopNav.Anchor >} />} >
            <h1>Appointment Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Appointment Number</th>
                        <th>Date Scheduled</th>
                        <th>Problem Description</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>
        </Page>
  );
}

export default App;
