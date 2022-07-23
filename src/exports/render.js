import { section } from './selectors';
import { stringToArray } from './formatters';

export default function render(countries) {
    
    countries.forEach((prop) => {

        const country = document.createElement('div');
        const header = document.createElement('header');
        const body = document.createElement('main');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const anchor = document.createElement('a');

        const formatted = stringToArray(`${prop.image}`, '.');

            section.appendChild(country).setAttribute('id', 'country');

            country.appendChild(header);
            country.appendChild(body);
            header.appendChild(image);
            header.appendChild(anchor);
            image.src = `assets/img/${prop.image}`;

            body.appendChild(title).textContent = prop.name;
            body.appendChild(description).textContent = prop.description;
            body.appendChild(anchor).textContent = 'View more';

            anchor.setAttribute(
                'href',
                `views/country.html?country=${formatted[0]}`
            );
    });
}
