var Movies = [
    {
        "name": "Building Code - Structural",
        "ResponsibleDepartment": "PWE",
        "Description": "Stationary and floating piers - first 100 sq ft, SEE LAKE HOUSTON",
        "StatutoryAuthority": "117.2.1",
        "AMOUNT": "$0",
    },
    {
        "name": "Eating - Structural",
        "ResponsibleDepartment": "PWE",
        "Description": "Stationary and floating piers - additional sq ft, SEE LAKE HOUSTON",
        "StatutoryAuthority": "117.2.1",
        "AMOUNT": "$0",
    }
]

for (elem in Movies) {
  elem['genre'] = ['ResponsibleDepartment', 'Description', 'StatutoryAuthority', 'AMOUNT']
}