import Persegi from "./Persegi";
import PersegiPanjang from "./PersegiPanjang";
import Segitiga from "./Segitiga";
import JajarGenjang from "./JajarGenjang";
import Trapesium from "./Trapesium";
import Lingkaran from "./Lingkaran";
import BelahKetupat from "./BelahKetupat";
import LayangLayang from "./LayangLayang";
let _lists = {
    'persegi' : 'PERSEGI',
    'persegipanjang': 'PERSEGI PANJANG',
    'segitiga' : 'SEGITIGA',
    'jajargenjang' : 'JAJAR GENJANG',
    'trapesium' : 'TRAPESIUM',
    'lingkaran' : 'LINGKARAN',
    'belahketupat' : 'BELAH KETUPAT',
    'layanglayang' : 'LAYANG LAYANG'
};
let config = {
    persegi: Persegi,
    persegipanjang: PersegiPanjang,
    segitiga: Segitiga,
    jajargenjang: JajarGenjang,
    trapesium: Trapesium,
    lingkaran: Lingkaran,
    belahketupat: BelahKetupat,
    layanglayang: LayangLayang
};
export {
    _lists,
    config
}