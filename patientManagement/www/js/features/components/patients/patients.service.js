angular
    .module('patientManagement.component.patients')
    .service('patients', PatientsService);

function PatientsService() {
    // Returns array of patients and constructor for patient
    var patients = [];

    function Patient(firstName, lastName, dob) {
        this.firsrtName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
        this.dob = dob;
    }
    return {
        patients: patients,
        Patient: Patient
    }
}