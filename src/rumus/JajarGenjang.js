export default {
    _info : `Keunikan dan sifat-sifat jajargenjang

1. Memiliki 2 pasang sisi sejajar
2. Memiliki 4 sisi

LUAS= a X t
KELILING= 2 (a + b)
`,
    form: [
        {
            name: 'alas',
            type: 'text',
            placeholder: 'Alas (a)',
            required: 'required'
        },
        {
            name: 'tinggi',
            type: 'text',
            placeholder: 'Tinggi (t)',
            required: 'required'
        },
        {
            name: 'tinggi_miring',
            type: 'text',
            placeholder: 'Tinggi Miring (b)',
            required: 'required'
        }
    ],
    rumus: (state, config) => {
        let a = parseInt(state.alas);
        let t = parseInt(state.tinggi);
        let b = parseInt(state.tinggi_miring);
        config.hasil.luas = a*t;
        config.hasil.keliling = 2 * (a + b);
    },
    hasil: {
        luas:0,
        keliling:0
    }
}