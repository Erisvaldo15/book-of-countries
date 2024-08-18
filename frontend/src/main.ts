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

if (section) {
    countries.forEach(
        ({ country, description, flag }: countriesFormat): void => {
            const countryDiv: HTMLDivElement = document.createElement('div');
            const header: HTMLElement = document.createElement('header');
            const body: HTMLElement = document.createElement('main');
            const image: HTMLImageElement = document.createElement('img');
            const title: HTMLHeadingElement = document.createElement('h3');
            const descriptionTag: HTMLParagraphElement =
                document.createElement('p');
            const anchor: HTMLAnchorElement = document.createElement('a');

            section.appendChild(countryDiv).setAttribute('id', 'country');

            countryDiv.appendChild(header);
            countryDiv.appendChild(body);
            header.appendChild(image);
            header.appendChild(anchor);
            image.src = `/img/${flag}`;

            body.appendChild(title).textContent = country;
            body.appendChild(descriptionTag).textContent = description;
            body.appendChild(anchor).textContent = 'View more';

            anchor.setAttribute(
                'href',
                `country.html?country=${flag.split('.')[0]}`
            );
        }
    );
}