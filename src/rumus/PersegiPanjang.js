export default {
    _info : `Keunikan dan sifat-sifat persegi panjang:

1. Memiliki 2 sisi lebar sama panjang
2. Memiliki 2 sisi panjang yang sama panjang
3. Memiliki 4 sudut yang besarnya 90º

LUAS = p X l
KELILING = 2 (p + l)
`,
    form: [
        {
            name: 'panjang',
            type: 'text',
            placeholder: 'Panjang (p)',
            required: 'required'
        },
        {
            name: 'lebar',
            type: 'text',
            placeholder: 'Lebar (l)',
            required: 'required'
        }
    ],
    rumus: (state, config) => {
        let p = parseInt(state.panjang);
        let l = parseInt(state.lebar);
        config.hasil.luas = p * l;
        config.hasil.keliling = 2 * ( p + l );
    },
    hasil: {
        luas:0,
        keliling:0
    }
}