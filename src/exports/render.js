import { section } from './selectors';
import { stringToArray } from './formatters';
import * as element from './createElements';

export default function render(countries) {
    countries.forEach((prop) => {

        const formatted = stringToArray(`${prop.image}`, '.');

        console.log(element.country)

        section.appendChild(element.country).setAttribute('id', 'country');

        element.country.appendChild(element.header);
        element.country.appendChild(element.body);
        element.header.appendChild(element.image);
        element.header.appendChild(element.anchor);
        element.image.src = `assets/img/${prop.image}`;

        element.body.appendChild(element.title).textContent = prop.name;
        element.body.appendChild(element.description).textContent = prop.description;
        element.body.appendChild(element.anchor).textContent = 'View more';

        element.anchor.setAttribute(
            'href',
            `views/country.html?country=${formatted[0]}`
        );
    });
}
