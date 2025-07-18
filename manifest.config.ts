import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

export default defineManifest({
    manifest_version: 3,
    name: "__MSG_extName__",
    version,
    default_locale: "en",
    description: "__MSG_extDescription__",
    icons: {
      "16": "icons/16.png",
      "48": "icons/48.png",
      "128": "icons/128.png",
    },
    content_scripts: [
      {
        matches: [
          "*://*.google.ac/search?*",
          "*://*.google.ad/search?*",
          "*://*.google.ae/search?*",
          "*://*.google.al/search?*",
          "*://*.google.am/search?*",
          "*://*.google.as/search?*",
          "*://*.google.at/search?*",
          "*://*.google.az/search?*",
          "*://*.google.ba/search?*",
          "*://*.google.be/search?*",
          "*://*.google.bf/search?*",
          "*://*.google.bg/search?*",
          "*://*.google.bi/search?*",
          "*://*.google.bj/search?*",
          "*://*.google.bs/search?*",
          "*://*.google.bt/search?*",
          "*://*.google.by/search?*",
          "*://*.google.ca/search?*",
          "*://*.google.cat/search?*",
          "*://*.google.cc/search?*",
          "*://*.google.cd/search?*",
          "*://*.google.cf/search?*",
          "*://*.google.cg/search?*",
          "*://*.google.ch/search?*",
          "*://*.google.ci/search?*",
          "*://*.google.cl/search?*",
          "*://*.google.cm/search?*",
          "*://*.google.cn/search?*",
          "*://*.google.co.ao/search?*",
          "*://*.google.co.bw/search?*",
          "*://*.google.co.ck/search?*",
          "*://*.google.co.cr/search?*",
          "*://*.google.co.id/search?*",
          "*://*.google.co.il/search?*",
          "*://*.google.co.in/search?*",
          "*://*.google.co.jp/search?*",
          "*://*.google.co.ke/search?*",
          "*://*.google.co.kr/search?*",
          "*://*.google.co.ls/search?*",
          "*://*.google.co.ma/search?*",
          "*://*.google.co.mz/search?*",
          "*://*.google.co.nz/search?*",
          "*://*.google.co.th/search?*",
          "*://*.google.co.tz/search?*",
          "*://*.google.co.ug/search?*",
          "*://*.google.co.uk/search?*",
          "*://*.google.co.uz/search?*",
          "*://*.google.co.ve/search?*",
          "*://*.google.co.vi/search?*",
          "*://*.google.co.za/search?*",
          "*://*.google.co.zm/search?*",
          "*://*.google.co.zw/search?*",
          "*://*.google.com/search?*",
          "*://*.google.com.af/search?*",
          "*://*.google.com.ag/search?*",
          "*://*.google.com.ai/search?*",
          "*://*.google.com.ar/search?*",
          "*://*.google.com.au/search?*",
          "*://*.google.com.bd/search?*",
          "*://*.google.com.bh/search?*",
          "*://*.google.com.bn/search?*",
          "*://*.google.com.bo/search?*",
          "*://*.google.com.br/search?*",
          "*://*.google.com.bz/search?*",
          "*://*.google.com.co/search?*",
          "*://*.google.com.cu/search?*",
          "*://*.google.com.cy/search?*",
          "*://*.google.com.do/search?*",
          "*://*.google.com.ec/search?*",
          "*://*.google.com.eg/search?*",
          "*://*.google.com.et/search?*",
          "*://*.google.com.fj/search?*",
          "*://*.google.com.gh/search?*",
          "*://*.google.com.gi/search?*",
          "*://*.google.com.gt/search?*",
          "*://*.google.com.hk/search?*",
          "*://*.google.com.jm/search?*",
          "*://*.google.com.kh/search?*",
          "*://*.google.com.kw/search?*",
          "*://*.google.com.lb/search?*",
          "*://*.google.com.lc/search?*",
          "*://*.google.com.ly/search?*",
          "*://*.google.com.mm/search?*",
          "*://*.google.com.mt/search?*",
          "*://*.google.com.mx/search?*",
          "*://*.google.com.my/search?*",
          "*://*.google.com.na/search?*",
          "*://*.google.com.nf/search?*",
          "*://*.google.com.ng/search?*",
          "*://*.google.com.ni/search?*",
          "*://*.google.com.np/search?*",
          "*://*.google.com.om/search?*",
          "*://*.google.com.pa/search?*",
          "*://*.google.com.pe/search?*",
          "*://*.google.com.pg/search?*",
          "*://*.google.com.ph/search?*",
          "*://*.google.com.pk/search?*",
          "*://*.google.com.pr/search?*",
          "*://*.google.com.py/search?*",
          "*://*.google.com.qa/search?*",
          "*://*.google.com.sa/search?*",
          "*://*.google.com.sb/search?*",
          "*://*.google.com.sg/search?*",
          "*://*.google.com.sl/search?*",
          "*://*.google.com.sv/search?*",
          "*://*.google.com.tj/search?*",
          "*://*.google.com.tr/search?*",
          "*://*.google.com.tw/search?*",
          "*://*.google.com.ua/search?*",
          "*://*.google.com.uy/search?*",
          "*://*.google.com.vc/search?*",
          "*://*.google.com.vn/search?*",
          "*://*.google.cv/search?*",
          "*://*.google.cz/search?*",
          "*://*.google.de/search?*",
          "*://*.google.dj/search?*",
          "*://*.google.dk/search?*",
          "*://*.google.dm/search?*",
          "*://*.google.dz/search?*",
          "*://*.google.ee/search?*",
          "*://*.google.es/search?*",
          "*://*.google.fi/search?*",
          "*://*.google.fm/search?*",
          "*://*.google.fr/search?*",
          "*://*.google.ga/search?*",
          "*://*.google.ge/search?*",
          "*://*.google.gf/search?*",
          "*://*.google.gg/search?*",
          "*://*.google.gl/search?*",
          "*://*.google.gm/search?*",
          "*://*.google.gp/search?*",
          "*://*.google.gr/search?*",
          "*://*.google.gy/search?*",
          "*://*.google.hn/search?*",
          "*://*.google.hr/search?*",
          "*://*.google.ht/search?*",
          "*://*.google.hu/search?*",
          "*://*.google.ie/search?*",
          "*://*.google.im/search?*",
          "*://*.google.io/search?*",
          "*://*.google.iq/search?*",
          "*://*.google.is/search?*",
          "*://*.google.it/search?*",
          "*://*.google.je/search?*",
          "*://*.google.jo/search?*",
          "*://*.google.kg/search?*",
          "*://*.google.ki/search?*",
          "*://*.google.kz/search?*",
          "*://*.google.la/search?*",
          "*://*.google.li/search?*",
          "*://*.google.lk/search?*",
          "*://*.google.lt/search?*",
          "*://*.google.lu/search?*",
          "*://*.google.lv/search?*",
          "*://*.google.md/search?*",
          "*://*.google.me/search?*",
          "*://*.google.mg/search?*",
          "*://*.google.mk/search?*",
          "*://*.google.ml/search?*",
          "*://*.google.mn/search?*",
          "*://*.google.ms/search?*",
          "*://*.google.mu/search?*",
          "*://*.google.mv/search?*",
          "*://*.google.mw/search?*",
          "*://*.google.ne/search?*",
          "*://*.google.nl/search?*",
          "*://*.google.no/search?*",
          "*://*.google.nr/search?*",
          "*://*.google.nu/search?*",
          "*://*.google.pl/search?*",
          "*://*.google.pn/search?*",
          "*://*.google.ps/search?*",
          "*://*.google.pt/search?*",
          "*://*.google.ro/search?*",
          "*://*.google.rs/search?*",
          "*://*.google.ru/search?*",
          "*://*.google.rw/search?*",
          "*://*.google.sc/search?*",
          "*://*.google.se/search?*",
          "*://*.google.sh/search?*",
          "*://*.google.si/search?*",
          "*://*.google.sk/search?*",
          "*://*.google.sm/search?*",
          "*://*.google.sn/search?*",
          "*://*.google.so/search?*",
          "*://*.google.sr/search?*",
          "*://*.google.st/search?*",
          "*://*.google.td/search?*",
          "*://*.google.tg/search?*",
          "*://*.google.tk/search?*",
          "*://*.google.tl/search?*",
          "*://*.google.tm/search?*",
          "*://*.google.tn/search?*",
          "*://*.google.to/search?*",
          "*://*.google.tt/search?*",
          "*://*.google.vg/search?*",
          "*://*.google.vu/search?*",
          "*://*.google.ws/search?*",
        ],
        js: ["./src/content-scripts/main.ts"],
      },
    ],
});
