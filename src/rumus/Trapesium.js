export default {
    _info : `Keunikan dan sifat-sifat trapesium
1. Memiliki 4 sisi


LUAS=1/2 (A + B) X t
KELILING=A+B+C+D
`,
    _img : 'images/trapesium.png',
    form: [
        {
            name: 'alas',
            type: 'text',
            placeholder: 'Alas (a)',
            required: 'required'
        },
        {
            name: 'miring_b',
            type: 'text',
            placeholder: 'Miring (b)',
            required: 'required'
        },
        {
            name: 'alas_atas',
            type: 'text',
            placeholder: 'Atas (c)',
            required: 'required'
        },
        {
            name: 'miring_d',
            type: 'text',
            placeholder: 'Miring (d)',
            required: 'required'
        },
        {
            name: 'tinggi',
            type: 'text',
            placeholder: 'Tinggi (t)',
            required: 'required'
        },
    ],
    rumus: (state, config) => {
        let a = parseInt(state.alas);
        let b = parseInt(state.miring_b);
        let c = parseInt(state.alas_atas);
        let d = parseInt(state.miring_d);
        let t = parseInt(state.tinggi);
        config.hasil.luas = 1/2 * (a + b ) * t;
        config.hasil.keliling = a + b + c + d;
    },
    hasil: {
        luas:0,
        keliling:0
    }
}