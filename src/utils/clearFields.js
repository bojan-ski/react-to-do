export const clearAllFields = () => {
    const formFields = document.querySelector('.form')

    formFields[0].value = ''
    formFields[2].value = ''
    formFields[3].value = ''
}