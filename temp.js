let countries = [
  {
    id: 2456,
    value: "A'ana",
    country: "Samoa",
    gst_code: null,
    region_id: null,
    country_code: "WS",
  },
  {
    id: 2856,
    value: "Aargau",
    country: "Switzerland",
    gst_code: null,
    region_id: null,
    country_code: "CH",
  },
  {
    id: 661,
    value: "Abia",
    country: "Nigeria",
    gst_code: null,
    region_id: null,
    country_code: "NG",
  },
  {
    id: 661,
    value: "Abidjan",
    country: "Cote D'Ivoire (Ivory Coast)",
    gst_code: null,
    region_id: null,
    country_code: "CI",
  },
];

let obj = { 1: "moj", 2: "llml", 3: "jkm" };

let da = Object.entries(obj).map(([key, value]) => ({ [key]: value }));
console.log(da);
