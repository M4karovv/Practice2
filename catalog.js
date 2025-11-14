// Данные для каталога (пример)
const catalogData = [
    {
        title: 'Квартира в ЖК Chicago',
        type: 'Квартира',
        location: 'метро Октябрьское',
        area: 75,
        rooms: 3,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Коттедж в селе Каменка',
        type: 'Коттедж',
        location: 'село Каменка',
        area: 110,
        rooms: null,
        state: 'Новый ремонт',
        price: 30000000,
        plot: '5 соток',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Офисное помещение в ЖК ApartRiver',
        type: 'Коммерческая',
        location: 'метро Речной вокзал',
        area: 53.5,
        rooms: null,
        state: 'Новый ремонт',
        price: 30000000,
        floor: 2,
        img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Парковочное место в ЖК Михайловский',
        type: 'Парковка',
        location: 'метро Речной вокзал',
        area: 18.69,
        rooms: null,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    // Повторяющиеся карточки для сетки
    {
        title: 'Квартира в ЖК Chicago',
        type: 'Квартира',
        location: 'метро Октябрьское',
        area: 75,
        rooms: 3,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Квартира в ЖК Chicago',
        type: 'Квартира',
        location: 'метро Октябрьское',
        area: 75,
        rooms: 3,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Квартира в ЖК Chicago',
        type: 'Квартира',
        location: 'метро Октябрьское',
        area: 75,
        rooms: 3,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'Квартира в ЖК Chicago',
        type: 'Квартира',
        location: 'метро Октябрьское',
        area: 75,
        rooms: 3,
        state: 'Новый ремонт',
        price: 30000000,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
];

function renderCatalog(data) {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = '';
    data.forEach(item => {
        let details = '';
        if (item.type === 'Квартира') {
            details = `<ul>
                <li>Тип недвижимости: Квартира</li>
                <li>Расположение: ${item.location}</li>
                <li>Площадь: ${item.area} м²</li>
                <li>Количество комнат: ${item.rooms}</li>
                <li>Состояние: ${item.state}</li>
            </ul>`;
        } else if (item.type === 'Коттедж') {
            details = `<ul>
                <li>Тип недвижимости: Коттедж</li>
                <li>Расположение: ${item.location}</li>
                <li>Площадь: ${item.area} м²</li>
                <li>Участок: ${item.plot}</li>
                <li>Состояние: ${item.state}</li>
            </ul>`;
        } else if (item.type === 'Коммерческая') {
            details = `<ul>
                <li>Тип недвижимости: Коммерческая</li>
                <li>Расположение: ${item.location}</li>
                <li>Площадь: ${item.area} м²</li>
                <li>Этаж: ${item.floor}</li>
            </ul>`;
        } else if (item.type === 'Парковка') {
            details = `<ul>
                <li>Тип недвижимости: Парковка, гараж</li>
                <li>Расположение: ${item.location}</li>
                <li>Площадь: ${item.area} м²</li>
            </ul>`;
        }
        grid.innerHTML += `
        <div class="catalog-card">
            <img class="card-img" src="${item.img}" alt="${item.title}">
            <div class="card-content">
                <div class="card-title">${item.title}</div>
                ${details}
                <div class="card-price">${item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <button class="card-btn">Подробнее</button>
        </div>
        `;
    });
}

function filterCatalog() {
    const form = document.getElementById('catalogFilters');
    const type = form.type.value;
    const priceMin = parseInt(form.priceMin.value) || 0;
    const priceMax = parseInt(form.priceMax.value) || Infinity;
    const areaMin = parseFloat(form.areaMin.value) || 0;
    const areaMax = parseFloat(form.areaMax.value) || Infinity;
    const filtered = catalogData.filter(item => {
        let ok = true;
        if (type && item.type !== type) ok = false;
        if (item.price < priceMin || item.price > priceMax) ok = false;
        if (item.area < areaMin || item.area > areaMax) ok = false;
        return ok;
    });
    renderCatalog(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog(catalogData);
    document.getElementById('catalogFilters').addEventListener('input', filterCatalog);
}); 