 // Get the submissions from your API
export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
 // Iterate the submissions and create some <section> representations
    let submissionHTML = ""
    for (const submission of submissions) {
        submissionHTML += `<section class="submission">
        <div><b>Owns jeans?</b> ${submission.ownsBlueJeans}</div>
        <div><b>Area type foreign key?</b> ${submission.socioLocationId}</div>
        </section>`
    }
    // Return the HTML string
    return submissionHTML
}