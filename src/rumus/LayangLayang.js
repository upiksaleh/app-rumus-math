export default {
    _info : `LUAS=(d1 + d2) /2
KELILING=2 (s1 + s2)

NB:
d = diagonal, S = sisi
`,
    _img: 'images/layanglayang.png',
    form: [
        {
            name: 's1',
            type: 'text',
            placeholder: 'Sisi (S1)',
            required: 'required'
        },
        {
            name: 's2',
            type: 'text',
            placeholder: 'Sisi (S2)',
            required: 'required'
        },
        {
            name: 'd1',
            type: 'text',
            placeholder: 'Diagonal (d1)',
            required: 'required'
        },
        {
            name: 'd2',
            type: 'text',
            placeholder: 'Diagonal (d2)',
            required: 'required'
        },
    ],
    rumus: (state, config) => {
        let s1 = parseInt(state.s1);
        let s2 = parseInt(state.s2);
        let d1 = parseInt(state.d1);
        let d2 = parseInt(state.d2);
        config.hasil.luas = (d1 + d2) / 2;
        config.hasil.keliling = 2 * (s1 + s1);
    },
    hasil: {
        luas:0,
        keliling:0
    }
}