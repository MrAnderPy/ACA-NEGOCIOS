const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const prices = {
  monthly: { duo: '89.900', combo: '69.900', flex: '59.900', period: '/ mes', note: 'Precio de referencia por pareja' },
  semester: { duo: '479.000', combo: '369.000', flex: '319.000', period: '/ 6 meses', note: 'Precio de referencia por periodo' },
  annual: { duo: '899.000', combo: '699.000', flex: '599.000', period: '/ año', note: 'Precio de referencia por año' }
};

document.querySelectorAll('.toggle-option').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.toggle-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = prices[button.dataset.frequency];
    document.querySelectorAll('[data-price]').forEach(price => {
      price.textContent = selected[price.dataset.price];
    });
    document.querySelectorAll('[data-period]').forEach(period => {
      period.textContent = selected.period;
    });
    document.querySelectorAll('[data-note]').forEach(note => {
      note.textContent = note.dataset.note === 'duo' ? 'Precio de referencia por pareja' :
        note.dataset.note === 'combo' ? 'Precio de referencia por persona' : selected.note;
    });
  });
});

document.querySelectorAll('.plan-cta').forEach(link => {
  link.addEventListener('click', () => {
    const interest = document.querySelector('#interest');
    if ([...interest.options].some(option => option.value === link.dataset.plan)) {
      interest.value = link.dataset.plan;
    }
  });
});

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const message = document.querySelector('#formMessage');
  message.textContent = `¡Gracias${name ? ', ' + name : ''}! Esta es una demostración: conecta el formulario a un servicio para recibir solicitudes.`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
