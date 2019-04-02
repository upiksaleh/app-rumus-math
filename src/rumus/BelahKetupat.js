export default {
    _info : `Keunikan bangun belah ketupat
1. Memiliki 4 sisi sama panjang
2. Sama dengan persegi


LUAS=(d1 + d2) /2
KELILING=4 x S

NB: Perhatikan gambar bangun belah ketupat di atas! 
d = diagonal, S = sisi 
`,
    _img: 'images/belahketupat.png',
    form: [
        {
            name: 'sisi',
            type: 'text',
            placeholder: 'Sisi (S)',
            required: 'required'
        },
        {
            name: 'diagonal',
            type: 'text',
            placeholder: 'Diagonal (d1 & d2)',
            required: 'required'
        },
    ],
    rumus: (state, config) => {
        let s = parseInt(state.sisi);
        let d = parseInt(state.diagonal);
        config.hasil.luas = (d + d) / 2;
        config.hasil.keliling = 4 * s;
    },
    hasil: {
        luas:0,
        keliling:0
    }
}