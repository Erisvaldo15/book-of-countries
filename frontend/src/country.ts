import countriesData from './countries.json';

const image: Element | null = document.querySelector('#country-image');
const title: HTMLHeadingElement | null = document.querySelector('h2');
const description: HTMLElement | null = document.querySelector('small');
const climate: HTMLParagraphElement | null = document.querySelector('p');

const url: string | null = new URLSearchParams(window.location.search).get(
    'country'
);

type countriesFormat = {
    country: string;
    description: string;
    details: string;
    climate_type: string;
    flag: string;
};

const foundCountry: countriesFormat | undefined = countriesData.find(
    (countryData) => countryData.flag.split('.')[0] === url
);

if (foundCountry && url) {
    if (image !== null) {
        image.setAttribute('src', `../img/${url}.svg`);
    }

    if (title !== null) {
        title.textContent = foundCountry.country;
    }

    if (description !== null) {
        description.textContent = foundCountry.details;
    }

    if (climate !== null) {
        climate.textContent = `Climate: ${foundCountry.climate_type}`;
    }
} 
else {
    window.location.href = '/index.html';
}