export const patientMoudles = {
  patientTab1: [
    {
      icon: "far fa-user",
      value: "Title",
      type: "checkBox",
      options: [
        { value: "mr", label: "Mr" },
        { value: "ms", label: "Ms" },
        { value: "doctor", label: "Doctor" }
      ],
      placeholder: "Title"
    },
    {
      icon: "far fa-user",
      value: "First Name",
      type: "textField",
      name: "firstName"
    },
    {
      icon: "far fa-user",
      value: "Last Name",
      type: "textField",
      name: "lastName"
    },
    { icon: "fas fa-birthday-cake", value: "Date of Birth" },
    { icon: "far fa-user", value: "Age", type: "textField" },
    {
      icon: "fas fa-user-friends",
      value: "Age Group",
      type: "checkBox",
      options: [
        { value: "infant", label: "Infant" },
        { value: "child", label: "Child" },
        { value: "adult", label: "Adult" }
      ],
      placeholder: "Age Group"
    },
    {
      icon: "fas fa-users",
      value: "Gender",
      type: "checkBox",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" }
      ],
      placeholder: "Gender"
    },
    { icon: "far fa-id-card", value: "CNIC", type: "textField" },
    {
      icon: "fas fa-heartbeat",
      value: "Blood Group",
      type: "checkBox",
      options: [
        { value: "a+", label: "A+" },
        { value: "a-", label: "A-" },
        { value: "b+", label: "B+" },
        { value: "b+", label: "B+" },
        { value: "b-", label: "B-" },
        { value: "o", label: "O" },
        { value: "o-", label: "O-" },
        { value: "ab+", label: "AB+" },
        { value: "ab-", label: "AB-" }
      ],
      placeholder: "Blood Group"
    },
    { icon: "fas fa-user-md", value: "Occuption", type: "textField" },
    {
      icon: "fas fa-ring",
      value: "Marital Status",
      type: "checkBox",
      options: [
        { value: "single", label: "Single" },
        { value: "married", label: "Married" },
        { value: "notDisclosed", label: "Not Disclosed" }
      ],
      placeholder: "Marital Status"
    },
    {
      icon: "fas fa-praying-hands",
      value: "Religion",
      type: "textFieldz"
    }
  ],
  patientTab2: [
    { icon: "far fa-user", value: "Cell Phone", type: "textField" },
    { icon: "far fa-user", value: "Phone", type: "textField" },
    { icon: "far fa-user", value: "Email", type: "textField" }
  ],
  patientTab3: [
    { icon: "far fa-user", value: "House Number / Name", type: "textField" },
    {
      icon: "far fa-user",
      value: "Street / Mohallah / Village",
      type: "textField"
    },
    { icon: "far fa-user", value: "Email", type: "textField" }
  ]
};
