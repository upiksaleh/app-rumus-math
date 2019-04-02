export default {
    _info : `Keunikan dan sifat-sifat persegi:

1. Memiliki 4 sisi
2. Setiap sisi persegi sama panjang
3. Memiliki 4 sudut yang besarnya 90º

LUAS=sisi X sisi
KELILING=4 X sisi
`,
    form: [
        {
            name: 'sisi',
            type: 'text',
            placeholder: 'Sisi',
            required: 'required'
        }
    ],
    rumus: (state, config) => {
        config.hasil.luas = state.sisi * state.sisi;
        config.hasil.keliling = state.sisi * 4;
    },
    hasil: {
        luas:0,
        keliling:0
    }
}