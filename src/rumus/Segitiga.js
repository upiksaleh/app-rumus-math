export default {
    _info : `Keunikan dan sifat segitiga:

1. Memiliki 3 sisi
2. Memiliki 4 jenis bentuk, yaitu segitiga siku-siku, segitiga sama sisi, segitiga sembarang, dan segitiga sama kaki.
3. Segitiga siku-siku besar salah satu sudutnya 90º (rumus pythagoras)

LUAS= 1/2 a X t
KELILING=s1 + s2 + s3
`,
    form: [
        {
            name: 'alas',
            type: 'text',
            placeholder: 'Alas (s1)',
            required: 'required'
        },
        {
            name: 'tinggi',
            type: 'text',
            placeholder: 'Tinggi (s2)',
            required: 'required'
        },
        {
            name: 'sisi',
            type: 'text',
            placeholder: 'Sisi (s3)',
            required: 'required'
        }
    ],
    rumus: (state, config) => {
        let a = parseInt(state.alas);
        let t = parseInt(state.tinggi);
        let s = parseInt(state.sisi);
        config.hasil.luas = 1/2 * (a * t)
        config.hasil.keliling = a + t + s;
    },
    hasil: {
        luas:0,
        keliling:0
    }
}