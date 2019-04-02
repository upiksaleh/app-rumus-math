export default {
    _info : `LUAS=π X r²
KELILING=2π X r

NB: π = 22/7 atau 3,14
r = jari-jari = 1/2 diameter
diameter = d = 2 X r
`,
    form: [
        {
            name: 'diameter',
            type: 'text',
            placeholder: 'Diameter (d)',
            required: 'required'
        },
    ],
    rumus: (state, config) => {
        let d = parseInt(state.diameter);
        let n = 3.14;
        let r = d/2;
        config.hasil.luas = n * (r*2);
        config.hasil.keliling = (2 * n) * r;
    },
    hasil: {
        luas:0,
        keliling:0
    }
}