export default function json2html(data) {
    // Start building the table with the required attribute
    let html = `
        <table data-user="arindamphatowali@gmail.com">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>`;
    
    // Only include the Gender column if it's present in the data
    if (data.some(item => item.Gender)) {
        html += `<th>Gender</th>`;
    }

    html += `</tr>
            </thead>
            <tbody>`;

    // Loop through the data array to add rows
    data.forEach(item => {
        html += `
            <tr>
                <td>${item.Name || ''}</td>
                <td>${item.Age || ''}</td>`;
        
        // Only render the Gender column if it's present
        if (item.Gender) {
            html += `<td>${item.Gender || ''}</td>`;
        }

        html += `</tr>`;
    });

    // Close the table
    html += `
        </tbody>
    </table>`;

    return html;
}
