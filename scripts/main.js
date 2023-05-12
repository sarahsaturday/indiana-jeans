import { LocationTypes } from "./LocationTypes.js";
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { saveSubmission } from "./SaveSubmisson.js";
import { SubmissionList } from "./Submissions.js";

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypes()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()