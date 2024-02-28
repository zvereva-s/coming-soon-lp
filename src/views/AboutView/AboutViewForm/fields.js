export const fields = [
  {
    id: 1,
    type: 'text',
    placeholder: "Введіть ім'я",
    label: "Ім'я",
    value: 'name',
    required: true,
    autocomplete: true
  },
  {
    id: 2,
    type: 'tel',
    placeholder: 'Введіть номер телефону',
    label: 'Номер телефону',
    value: 'phone',
    required: true,
    autocomplete: true,
    mask: '###-###-##-##',
    pattern: ''
  },
  {
    id: 3,
    type: 'text',
    placeholder: 'Введіть VIN авто',
    label: 'VIN',
    value: 'vinCode',
    required: false,
    autocomplete: true
  },
  {
    id: 4,
    type: 'text',
    placeholder: 'Введіть номер автозапчастини (якщо є)',
    label: 'Номер запчастини',
    value: 'sku',
    required: false,
    autocomplete: true
  },
  {
    id: 5,
    type: 'text',
    placeholder: 'Введіть назву запчастини та вузол',
    label: 'Назва запчастини',
    value: 'partName',
    required: true,
    autocomplete: false
  }
]
