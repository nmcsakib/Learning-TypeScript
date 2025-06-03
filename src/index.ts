const form = document.getElementById('user-form') as HTMLFormElement;
console.log(form);

// const handleSubmit = (e: { target: HTMLFormElement }) => {
//     e.target.preventDefault()
//     const form = new FormData(e.target);
//     const name = form.get('userName') as FormDataEntryValue
//     const password = form.get('password') as FormDataEntryValue
//     console.log(name, password);
// }

form.addEventListener('submit',(event: Event) => {
    event.preventDefault()

    const form = new FormData(event.target as HTMLFormElement);
    const name = form.get('userName') as FormDataEntryValue
    const password = form.get('password') as FormDataEntryValue
    console.log(name, password);
})