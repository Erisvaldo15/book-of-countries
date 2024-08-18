import './style.css';
import countriesData from './countries.json';

const section: Element | null = document.querySelector('#countries');

type countriesFormat = {
    country: string;
    description: string;
    details: string;
    climate_type: string;
    flag: string;
};

const countries: countriesFormat[] = countriesData;

function stringToArray(string: string, separator: string): string[] {
    return string.split(separator);
}

function render(countries: countriesFormat[]) {
    countries.forEach((countryObject: countriesFormat): void => {
        const country: HTMLDivElement = document.createElement('div');
        const header: HTMLElement = document.createElement('header');
        const body: HTMLElement = document.createElement('main');
        const image: HTMLImageElement = document.createElement('img');
        const title: HTMLHeadingElement = document.createElement('h3');
        const description: HTMLParagraphElement = document.createElement('p');
        const anchor: HTMLAnchorElement = document.createElement('a');

        const formatted = stringToArray(`${countryObject.flag}`, '.');

        section?.appendChild(country).setAttribute('id', 'country');

        country.appendChild(header);
        country.appendChild(body);
        header.appendChild(image);
        header.appendChild(anchor);
        image.src = `/img/${countryObject.flag}`;

        body.appendChild(title).textContent = countryObject.country;
        body.appendChild(description).textContent = countryObject.description;
        body.appendChild(anchor).textContent = 'View more';

        anchor.setAttribute(
            'href',
            `views/country.html?country=${formatted[0]}`
        );
    });
}

render(countries);