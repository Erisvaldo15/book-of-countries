import { image, title, description, climate } from './selectors';
import { stringToArray } from './formatters';
import redirect from './redirect';

export default function urlValidation(countries) {

    const url = new URLSearchParams(window.location.search).get('country');
    let verifyUrl = false;

    countries.forEach((element) => {
        const formatted = stringToArray(element.image, '.');

        console.log(formatted[0])

        if (url != null && url == formatted[0]) {
            image.setAttribute('src', `../assets/img/${url}.svg`);
            verifyUrl = true;
        }

        if (formatted[0] == url) {
            title.textContent = element.name;
            description.textContent = element.information.details;
            climate.textContent = `Climate: ${element.information.climate}`;
        }
    });

    if (!verifyUrl) {
        redirect('../index.html');
    }
}
